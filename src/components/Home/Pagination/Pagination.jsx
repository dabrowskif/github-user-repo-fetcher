import React from 'react';
import {
  Paper, TablePagination,
} from '@mui/material';

import PropTypes from 'prop-types';
import useStyles from './styles';

function Pagination({ settings, setSettings }) {
  const classes = useStyles();

  const handleChangePage = (event, newPage) => {
    setSettings({ ...settings, page: newPage });
  };

  const handleChangeRowsPerPage = (event) => {
    setSettings({ ...settings, rowsPerPage: parseInt(event.target.value, 10), page: 0 });
  };

  return (
    <Paper elevation={8} className={classes.paper}>
      <TablePagination
        component="div"
        count={settings.numberOfResults}
        page={settings.page}
        onPageChange={handleChangePage}
        rowsPerPage={settings.rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

Pagination.propTypes = {
  settings: PropTypes.objectOf(PropTypes.any).isRequired,
  setSettings: PropTypes.func.isRequired,
};

export default Pagination;
