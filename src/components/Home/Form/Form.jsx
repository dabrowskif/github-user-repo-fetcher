import React from 'react';
import {
  Divider, FormGroup, Grid, IconButton, InputAdornment, Paper, TextField, Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import useStyles from './styles';

function Form() {
  const classes = useStyles();

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <Paper elevation={8} className={classes.paper}>
      <Grid container>
        <Grid item xs={12} className={classes.formTitle}>
          <Typography variant="h4" gutterBottom>
            Github repos showcase
          </Typography>
          <Grid item xs={12}><Divider /></Grid>
        </Grid>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit}>
            <FormGroup className={classes.form}>
              <TextField
                label="Github username"
                variant="outlined"
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

export default Form;
