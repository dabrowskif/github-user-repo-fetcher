import React, { useEffect, useState } from 'react';
import { Container, Grow } from '@mui/material';

import { useParams } from 'react-router-dom';
import Form from './Form/Form';
import SearchResults from './SearchResults/SearchResults';
import Pagination from './Pagination/Pagination';
import Options from './Options/Options';
import sortArrayByValue, { STARS } from '../../functions/sortingAlgorithm';
import { getAllUserRepositories } from '../../api';

function Home() {
  const params = useParams();
  const [userRepositories, setUserRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [serverResStatusCode, setServerResStatusCode] = useState(200);
  const [fetchInfo, setFetchInfo] = useState({
    limit: 60, used: 0, repositoriesFetched: 0, maxRepositoriesToFetch: 0,
  });
  const [settings, setSettings] = useState({
    sortedValue: STARS, username: '', page: 0, rowsPerPage: 10, numberOfResults: 0,
  });

  const getNumberOfShowedResults = () => settings.numberOfResults - settings.page * settings.rowsPerPage;

  const fetchRepositories = async (username) => {
    setIsLoading(true);
    const serverResponse = await getAllUserRepositories(username);

    if (serverResponse.statusCode === 200) {
      setUserRepositories(sortArrayByValue(serverResponse.repositories, settings.sortedValue));
      setSettings({
        ...settings,
        username,
        page: 0,
        rowsPerPage: 10,
        numberOfResults: serverResponse.numberOfRepositories,
      });
      setFetchInfo({
        ...fetchInfo,
        used: serverResponse.requestInfo.data.rate.used,
        limit: serverResponse.requestInfo.data.rate.limit,
        repositoriesFetched: serverResponse.repositories.length,
        maxRepositoriesToFetch: serverResponse.numberOfRepositories,
      });
    } else {
      setServerResStatusCode(serverResponse.statusCode);
      setUserRepositories([]);
      setSettings({
        ...settings,
        username,
        page: 0,
        rowsPerPage: 10,
        numberOfResults: 0,
      });
      setFetchInfo({
        ...fetchInfo,
        used: serverResponse.requestInfo.data.rate.used,
        limit: serverResponse.requestInfo.data.rate.limit,
        repositoriesFetched: 0,
        maxRepositoriesToFetch: 0,
      });
    }

    setIsLoading(false);
  };

  const sortRepositories = (sortedValue) => {
    setUserRepositories(sortArrayByValue(userRepositories, sortedValue));
  };

  useEffect(async () => {
    if (Object.keys(params).length !== 0 && userRepositories.length === 0 && serverResStatusCode === 200) {
      setSettings({ ...settings, username: params.username });
      fetchRepositories(params.username);
    }
  }, [userRepositories]);

  return (
    <Grow in timeout={600}>
      <Container style={{ padding: '0px' }} maxWidth="sm">
        <Form
          fetchRepositories={fetchRepositories}
        />
        <Options
          fetchInfo={fetchInfo}
          sortRepositories={sortRepositories}
          settings={settings}
          setSettings={setSettings}
        />
        <Pagination
          settings={settings}
          setSettings={setSettings}
        />
        <SearchResults
          settings={settings}
          userRepositories={userRepositories}
          isLoading={isLoading}
          serverResStatusCode={serverResStatusCode}
        />
        {getNumberOfShowedResults() > 5
          ? (
            <Pagination
              settings={settings}
              setSettings={setSettings}
            />
          )
          : null}
      </Container>
    </Grow>
  );
}

export default Home;
