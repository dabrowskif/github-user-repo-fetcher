import React from 'react';
import { Container, Toolbar } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

function App() {
  return (
    <Container maxWidth="xl">
      <Navbar />
      <Toolbar />
      <Toolbar />
      <Routes>
        {/* eslint-disable-next-line react/no-unstable-nested-components */}
        <Route path="/" element={<Home />} />
        <Route path="/:username" element={<Home />} />
      </Routes>
    </Container>
  );
}

export default App;
