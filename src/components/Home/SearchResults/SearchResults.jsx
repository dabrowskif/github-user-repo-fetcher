import React, { useEffect, useState } from 'react';
import {
  CircularProgress,
  Grid,
  Paper, Typography,
} from '@mui/material';

import PropTypes from 'prop-types';
import useStyles from './styles';
import Result from './Result';
import sortArrayByValue from '../../../api/sortingAlgorithm';

function SearchResults({
  settings, repositories, isLoading,
}) {
  const classes = useStyles();
  const [sortedRepositories, setSortedRepositories] = useState(repositories);

  const showPaginatedRepositories = (array) => {
    const firstIndex = settings.page * settings.rowsPerPage;
    const lastIndex = firstIndex + settings.rowsPerPage;
    return array.slice(firstIndex, lastIndex);
  };

  useEffect(() => {
    // TODO fix a bug that sorting is delayed until the next sorting value change.
    setSortedRepositories(sortArrayByValue(repositories, settings.sortedValue));
  });

  return (
    <Paper elevation={8} className={classes.paper}>
      {/* eslint-disable-next-line no-nested-ternary */}
      { isLoading
        ? <CircularProgress size={100} />
        : (
          sortedRepositories?.length !== 0
            ? (
              <Grid container>
                {
                  showPaginatedRepositories(sortedRepositories)?.map((repository) => (
                    <Result key={repository?.id} repository={repository} />
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
  repositories: PropTypes.arrayOf(PropTypes.any).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default SearchResults;
