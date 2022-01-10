import React from 'react';
import {
  CircularProgress,
  Grid,
  Paper, Typography,
} from '@mui/material';

import PropTypes from 'prop-types';
import useStyles from './styles';
import Result from './Result';

function SearchResults({
  serverResStatusCode, settings, userRepositories, isLoading,
}) {
  const classes = useStyles();
  const showPaginatedRepositories = (array) => {
    const firstIndex = settings.page * settings.rowsPerPage;
    const lastIndex = firstIndex + settings.rowsPerPage;
    return array.slice(firstIndex, lastIndex);
  };

  const handleErrorInfo = () => {
    switch (serverResStatusCode) {
      case 403:
        return (
          <div>
            <Typography style={{ marginTop: '50px' }}>{`An error has occured! Code: ${serverResStatusCode}`}</Typography>
            <Typography style={{ marginBottom: '50px' }}>You have used all your requests! Try again later.</Typography>
          </div>
        );

      case 404:
        return (
          <div>
            <Typography style={{ marginTop: '50px' }}>{`An error has occured! Code: ${serverResStatusCode}`}</Typography>
            <Typography style={{ marginBottom: '50px' }}>Wrong username.</Typography>
          </div>
        );
      default:
        return null;
    }
  };

  // TODO remove nested ternaries and make soe nice looking code.
  return (
    <Paper elevation={8} className={classes.paper}>
      {/* eslint-disable-next-line no-nested-ternary */}
      { isLoading
        ? <CircularProgress size={100} />
        : (
      // eslint-disable-next-line no-nested-ternary
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
            : (
              serverResStatusCode === 200
                ? <Typography style={{ marginTop: '50px', marginBottom: '50px' }}>User does not have any repositories!</Typography>
                : handleErrorInfo()
            ))}
    </Paper>
  );
}

SearchResults.propTypes = {
  settings: PropTypes.objectOf(PropTypes.any).isRequired,
  userRepositories: PropTypes.arrayOf(PropTypes.any).isRequired,
  isLoading: PropTypes.bool.isRequired,
  serverResStatusCode: PropTypes.number.isRequired,
};

export default SearchResults;
