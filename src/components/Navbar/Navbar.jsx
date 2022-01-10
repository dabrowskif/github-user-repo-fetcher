import React from 'react';
import {
  AppBar, IconButton, Toolbar, Typography,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

import useStyles from './styles';

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.title}>
        <IconButton>
          <HomeIcon fontSize="large" style={{ color: 'white' }} />
        </IconButton>
        <Typography variant="h4" className={classes.titleText}>Allegro coding challenge</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
