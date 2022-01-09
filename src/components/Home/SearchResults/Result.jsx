import React from 'react';
import {
  Divider,
  Grid, Link,
  Typography,
} from '@mui/material';

import PropTypes from 'prop-types';
import useStyles from './styles';
import StatDisplay from './StatDisplay';

function Result({ repository, username }) {
  const classes = useStyles();

  const link = `https://github.com/${username}/${repository?.name}`;

  return (
    <Grid item xs={12}>
      <Grid container className={classes.resultGrid}>
        <Grid item xs={12} className={classes.resultInfo}>
          <Typography variant="h5" className={classes.resultName}><Link href={link}>{repository?.name}</Link></Typography>
          <Typography variant="caption" className={classes.resultDate}>{repository?.pushed_at}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            className={classes.resultDescription}
          >
            {repository.description}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container className={classes.resultStats} spacing={1}>
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
  username: PropTypes.string.isRequired,
};

export default Result;
