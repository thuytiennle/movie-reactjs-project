import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() => ({
  circle: {
    position: 'relative',
    top: '50%',
    left: '50%',
  },
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <CircularProgress size={20} color="secondary" className={classes.circle} />
  );
}
