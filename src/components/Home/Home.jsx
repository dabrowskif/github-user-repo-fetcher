import React, { useState } from 'react';
import { Container, Grow } from '@mui/material';

import Form from './Form/Form';
import SearchResults from './SearchResults/SearchResults';
import Pagination from './Pagination/Pagination';

function Home() {
  const [userRepositories, setUserRepositories] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(false);
  const [settings, setSettings] = useState({
    username: '', page: 0, rowsPerPage: 10, numberOfResults: 0,
  });

  const getNumberOfShowedResults = () => settings.numberOfResults - settings.page * settings.rowsPerPage;

  return (
    <Grow in timeout={500}>
      <Container maxWidth="sm">
        <Form
          setIsLoading={setIsLoading}
          settings={settings}
          setSettings={setSettings}
          setUserRepositories={setUserRepositories}
        />
        <Pagination
          settings={settings}
          setSettings={setSettings}
        />
        <SearchResults
          settings={settings}
          setSettings={setSettings}
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
