import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

import useStyles from './styles';

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Typography variant="h4">Allegro coding challenge</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
