import React from 'react';
import {
  Divider,
  Grid,
  Typography,
} from '@mui/material';

import PropTypes from 'prop-types';
import useStyles from './styles';
import StatDisplay from './StatDisplay';

function Result({ repository }) {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Grid container className={classes.resultGrid}>
        <Grid item xs={12} className={classes.resultInfo}>
          <Typography variant="h5" className={classes.resultName}>{repository?.name}</Typography>
          <Typography variant="caption" className={classes.resultDate}>{repository?.pushed_at}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            className={classes.resultDescription}
          >
            {repository.description}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.resultStats}>
          <Grid container>
            <StatDisplay color="255,215,0" name="stars" value={repository?.stargazers_count} />
            <StatDisplay color="128,0,128" name="forks" value={repository?.forks_count} />
            <StatDisplay color="255,0,0" name="issues" value={repository?.open_issues} />
          </Grid>
        </Grid>
        <Grid item xs={12}><Divider /></Grid>
      </Grid>
    </Grid>
  );
}

Result.propTypes = {
  repository: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Result;
