import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ForkLeftIcon from '@mui/icons-material/ForkLeft';
import BugReportIcon from '@mui/icons-material/BugReport';

import useStyles from './styles';

function StatDisplay({
  color, name, value,
}) {
  const customStyleProps = { borderColor: color };
  const classes = useStyles(customStyleProps);

  // eslint-disable-next-line consistent-return
  function getStatIcon() {
    switch (name) {
      case 'stars':
        return <StarIcon style={{ color: `rgb(${color})`, marginRight: '5px', marginTop: '2px' }} />;
      case 'forks':
        return <ForkLeftIcon style={{ color: `rgb(${color})`, marginRight: '5px', marginTop: '2px' }} />;
      case 'issues':
        return <BugReportIcon style={{ color: `rgb(${color})`, marginRight: '5px', marginTop: '2px' }} />;
      default:
        return null;
    }
  }

  return (
    <Grid item xs={12} sm={4} className={classes.statItem}>
      <div className={classes.statDisplay}>
        {getStatIcon()}
        <Typography color={`rgb(${color})`} lineHeight="2.2rem">
          {value}
        </Typography>
      </div>
    </Grid>
  );
}

StatDisplay.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default StatDisplay;
