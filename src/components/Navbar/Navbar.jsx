import React from 'react';
import {
  AppBar, IconButton, Toolbar, Typography,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

import { Link } from 'react-router-dom';
import useStyles from './styles';

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.title}>
        <IconButton component={Link} to="/"><HomeIcon color="white" fontSize="large" /></IconButton>
        <Typography variant="h4">Allegro coding challenge</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
