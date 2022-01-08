import React from 'react';
import {
  Container, Divider, FormGroup, Grid, IconButton, Paper, TextField, Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import useStyles from './styles';

function Form() {
  const classes = useStyles();

  const handleSubmit = async () => {
    // e.preventDefault();
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={8}>
        <Grid container className={classes.mainGrid}>
          <Grid item xs={12} className={classes.formTitle}>
            <Typography variant="h4" gutterBottom>
              Github repos showcase
            </Typography>
            <Grid item xs={12}><Divider /></Grid>
          </Grid>
          <Grid item xs={12}>
            <form onSubmit={handleSubmit}>
              <FormGroup className={classes.form}>
                <TextField label="Github username" variant="outlined" />
                <IconButton><SearchIcon color="primary" /></IconButton>
              </FormGroup>
            </form>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Form;
