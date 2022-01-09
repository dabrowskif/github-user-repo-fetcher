import React, { useState } from 'react';
import {
  Divider, FormGroup, Grid, IconButton, InputAdornment, Paper, TextField, Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';
import useStyles from './styles';

function Form({ fetchRepositories }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const [formUsername, setFormUsername] = useState('');

  const handleChange = (e) => {
    setFormUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate(`/${formUsername}`);
    fetchRepositories(formUsername);
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
  fetchRepositories: PropTypes.func.isRequired,
};

export default Form;
