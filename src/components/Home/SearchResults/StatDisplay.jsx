import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ForkLeftIcon from '@mui/icons-material/ForkLeft';
import BugReportIcon from '@mui/icons-material/BugReport';

import useStyles from './styles';
import { FORKS, ISSUES, STARS } from '../../../functions/sortingAlgorithm';

function StatDisplay({
  color, name, value,
}) {
  const customStyleProps = { statColor: color };
  const classes = useStyles(customStyleProps);

  function getStatIcon() {
    switch (name) {
      case STARS:
        return <StarIcon className={classes.statIcon} />;
      case FORKS:
        return <ForkLeftIcon className={classes.statIcon} />;
      case ISSUES:
        return <BugReportIcon className={classes.statIcon} />;
      default:
        return null;
    }
  }

  return (
    <Grid item xs={4} className={classes.statGridItem}>
      <div className={classes.statDiv}>
        {getStatIcon()}
        <Typography className={classes.statValue}>
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
