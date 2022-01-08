import React from 'react';
import {
  Divider,
  Grid,
  Typography,
} from '@mui/material';

import useStyles from './styles';
import StatDisplay from './StatDisplay';

function Result() {
  // eslint-disable-next-line no-unused-vars
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Grid container className={classes.resultGrid}>
        <Grid item xs={12} className={classes.resultName}>
          <Typography variant="h5">Name</Typography>
          <Typography variant="caption" style={{ color: 'gray' }}>Last updated</Typography>
        </Grid>
        <Grid item xs={12} className={classes.resultLastUpdate}>
          <Typography>Description</Typography>
        </Grid>
        <Grid item xs={12} className={classes.resultStats}>
          <Grid container>
            <StatDisplay color="gold" name="stars" value={5} />
            <StatDisplay color="purple" name="forks" value={15} />
            <StatDisplay color="red" name="issues" value={25123123123} />
          </Grid>
        </Grid>
        <Grid item xs={12}><Divider /></Grid>
      </Grid>
    </Grid>
  );
}

export default Result;
