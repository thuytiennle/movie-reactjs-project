import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';

import { SearchInput } from '../../../components/SearchInput';
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
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: theme.spacing(2),
  },
  searchInput: {
    marginRight: theme.spacing(1),
  },
}));

const MovieToolbar = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          placeholder="Search user"
        />
        <Button color="primary" variant="contained">
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
