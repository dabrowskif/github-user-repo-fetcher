import React from 'react';
import { Container, Toolbar } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

function App() {
  return (
    <Container style={{ padding: '0px' }} maxWidth="xl">
      <Navbar />
      <Toolbar />
      <Toolbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:username" element={<Home />} />
      </Routes>
    </Container>
  );
}

export default App;
