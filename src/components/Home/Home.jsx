import React from 'react';

import { Container } from '@mui/material';
import Form from './Form/Form';
import SearchResults from './SearchResults/SearchResults';
import Pagination from './Pagination/Pagination';

function Home() {
  return (
    <Container maxWidth="sm">
      <Form />
      <Pagination />
      <SearchResults />
    </Container>
  );
}

export default Home;
