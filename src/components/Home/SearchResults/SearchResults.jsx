import React from 'react';
import {
  Grid,
  Paper,
} from '@mui/material';

import useStyles from './styles';
import Result from './Result';

function SearchResults() {
  const classes = useStyles();

  return (
    <Paper elevation={8} className={classes.paper}>
      <Grid container>
        <Result />
        <Result />
        <Result />
        <Result />
        <Result />
        <Result />
      </Grid>
    </Paper>
  );
}

export default SearchResults;
