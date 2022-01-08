import React from 'react';
import { Container, Toolbar } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

function App() {
  return (
    <Container maxWidth="xl">
      <Navbar />
      <Toolbar />
      <Toolbar />
      <Home />
    </Container>
  );
}

export default App;
