/* eslint-disable no-unused-vars */
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
  const [userRepositories, setUserRepositories] = useState([]);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [fetchInfo, setFetchInfo] = useState({
    limit: 60, used: 0, repositoriesFetched: 0, maxRepositoriesToFetch: 0,
  });
  const [settings, setSettings] = useState({
    sortedValue: STARS, username: '', page: 0, rowsPerPage: 10, numberOfResults: 0,
  });

  const getNumberOfShowedResults = () => settings.numberOfResults - settings.page * settings.rowsPerPage;

  const fetchRepositories = async (username) => {
    setIsLoading(true);
    const fetchedUserRepositories = await getAllUserRepositories(username);

    setUserRepositories(sortArrayByValue(fetchedUserRepositories.repositories, settings.sortedValue));
    setSettings({
      ...settings,
      username,
      page: 0,
      rowsPerPage: 10,
      numberOfResults: fetchedUserRepositories.numberOfRepositories,
    });
    setFetchInfo({
      ...fetchInfo,
      used: fetchedUserRepositories.requestInfo.data.rate.used,
      limit: fetchedUserRepositories.requestInfo.data.rate.limit,
      repositoriesFetched: fetchedUserRepositories.repositories.length,
      maxRepositoriesToFetch: fetchedUserRepositories.numberOfRepositories,
    });

    setIsLoading(false);
  };

  const sortRepositories = (sortedValue) => {
    setUserRepositories(sortArrayByValue(userRepositories, sortedValue));
  };

  useEffect(async () => {
    if (Object.keys(params).length !== 0 && userRepositories.length === 0) {
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
