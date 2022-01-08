import React, { useState } from 'react';
import {
  Divider, FormGroup, Grid, IconButton, InputAdornment, Paper, TextField, Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import PropTypes from 'prop-types';
import useStyles from './styles';
import { getAllUserRepositories } from '../../../api';

function Form({
  setIsLoading, settings, setSettings, setUserRepositories,
}) {
  const classes = useStyles();
  const [formUsername, setFormUsername] = useState('');

  const handleChange = (e) => {
    setFormUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const userRepositories = await getAllUserRepositories(formUsername);
    setUserRepositories(userRepositories.repositories);
    setSettings({
      ...settings, username: formUsername, page: 0, rowsPerPage: 10, numberOfResults: userRepositories.numberOfRepositories,
    });
    setIsLoading(false);
  };

  return (
    <Paper elevation={8} className={classes.paper}>
      <Grid container>
        <Grid item xs={12} className={classes.formTitle}>
          <Typography variant="h4" gutterBottom>
            Github repos showcase
          </Typography>
          <Grid item xs={12}><Divider sx={{ borderColor: '#757de8' }} /></Grid>
        </Grid>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit}>
            <FormGroup className={classes.form}>
              <TextField
                label="Github username"
                variant="outlined"
                onChange={handleChange}
                InputProps={{
                  endAdornment: <InputAdornment position="end"><IconButton type="submit"><SearchIcon color="primary" /></IconButton></InputAdornment>,
                }}
              />
            </FormGroup>
          </form>
        </Grid>
      </Grid>
    </Paper>
  );
}

Form.propTypes = {
  setIsLoading: PropTypes.func.isRequired,
  settings: PropTypes.objectOf(PropTypes.any).isRequired,
  setSettings: PropTypes.func.isRequired,
  setUserRepositories: PropTypes.func.isRequired,
};

export default Form;
