import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from './Styles';

export default (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography className={classes.label}>
        Select a level to start the game!
      </Typography>
    </div>
  );
};
