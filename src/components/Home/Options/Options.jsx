import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, Typography,
} from '@mui/material';
import useStyles from './styles';

import { FORKS, ISSUES, STARS } from '../../../api/sortingAlgorithm';

function Options({ fetchInfo, settings, setSettings }) {
  const classes = useStyles();
  const handleChange = (e) => {
    setSettings({ ...settings, sortedValue: e.target.value });
  };

  return (
    <Paper elevation={8} className={classes.paper}>
      <FormControl component="fieldset">
        <FormLabel component="legend" style={{ marginLeft: '10px' }}>Sort by:</FormLabel>
        <RadioGroup
          aria-label="sortedValue"
          defaultValue={STARS}
          name="radio-buttons-group"
          onChange={handleChange}
        >
          <Grid container>
            <Grid item xs={4}>
              <FormControlLabel value={STARS} control={<Radio />} label="Stars" />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel value={FORKS} control={<Radio />} label="Forks" />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel value={ISSUES} control={<Radio />} label="Issues" />
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.rateLimit}>
                {`You have used ${fetchInfo?.used} / ${fetchInfo?.limit} requests.`}
              </Typography>
            </Grid>
          </Grid>
        </RadioGroup>
      </FormControl>
    </Paper>
  );
}

Options.propTypes = {
  fetchInfo: PropTypes.objectOf(PropTypes.number).isRequired,
  settings: PropTypes.objectOf(PropTypes.any).isRequired,
  setSettings: PropTypes.func.isRequired,
};

export default Options;
