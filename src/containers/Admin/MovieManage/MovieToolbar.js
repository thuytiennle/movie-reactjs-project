import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { TextTranslation } from '../../Language/TextTranslation';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 0,
    [theme.breakpoints.up('lg')]: {
      marginLeft: 240,
    },
  },
  row: {
    height: '42px',
    margin: theme.spacing(2),
  },
  routerButton: {
    backgroundColor: theme.palette.secondary.light,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.titleBar.main,
    },
  },
}));

const MovieToolbar = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.row}>
        <Button
          className={classes.routerButton}
          variant="contained"
          component={Link}
          to="/admin/movie-manage/add-movie"
        >
          <TextTranslation id="container.Admin.MovieManage.AddMovieBtn" />
        </Button>
      </div>
    </div>
  );
};

MovieToolbar.propTypes = {
  className: PropTypes.string,
};

export default MovieToolbar;
