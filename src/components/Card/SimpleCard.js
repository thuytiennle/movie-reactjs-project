import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { PropTypes } from 'prop-types';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    borderRadius: 'unset',
    boxShadow: 'none',
  },
  media: {
    height: 60,
    width: 60,
    display: 'block',
  },
  title: {
    fontSize: 17,
  },
}));

export default function MovieInfo(props) {
  const classes = useStyles();
  const { img, title, children } = props;

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={img} title="Paella dish" />
      <CardContent>
        <Typography
          className={classes.title}
          variant="body2"
          color="secondary"
          component="p"
        >
          {title}
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
}

MovieInfo.propTypes = {
  children: PropTypes.node,
  title: PropTypes.any,
  img: PropTypes.any,
};
