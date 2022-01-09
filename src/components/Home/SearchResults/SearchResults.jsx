import React from 'react';
import {
  CircularProgress,
  Grid,
  Paper, Typography,
} from '@mui/material';

import PropTypes from 'prop-types';
import useStyles from './styles';
import Result from './Result';

function SearchResults({ settings, userRepositories, isLoading }) {
  const classes = useStyles();
  const showPaginatedRepositories = (array) => {
    const firstIndex = settings.page * settings.rowsPerPage;
    const lastIndex = firstIndex + settings.rowsPerPage;
    return array.slice(firstIndex, lastIndex);
  };

  return (
    <Paper elevation={8} className={classes.paper}>
      {/* eslint-disable-next-line no-nested-ternary */}
      { isLoading
        ? <CircularProgress size={100} />
        : (
          userRepositories.length !== 0
            ? (
              <Grid container>
                {
                  showPaginatedRepositories(userRepositories)?.map((repository) => (
                    <Result key={repository?.id} repository={repository} username={settings.username} />
                  ))
                }
              </Grid>
            )
            : <Typography style={{ marginTop: '50px', marginBottom: '50px' }}>No results</Typography>)}
    </Paper>
  );
}

SearchResults.propTypes = {
  settings: PropTypes.objectOf(PropTypes.any).isRequired,
  userRepositories: PropTypes.arrayOf(PropTypes.any).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default SearchResults;
