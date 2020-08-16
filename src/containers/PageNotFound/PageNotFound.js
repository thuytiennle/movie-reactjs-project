import React from 'react';
import { Link } from 'react-router-dom';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { TextTranslation } from '../Language/TextTranslation';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: '100vh',
    background: theme.palette.background.dark,
  },
  content: {
    maxWidth: '767px',
    width: '100%',
    lineHeight: '1.4',
    textAlign: 'center',
    position: 'absolute',
    left: '50%',
    top: '50%',
    '-webkit-transform': 'translate(-50%, -50%)',
    '-ms-transform': 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
  },
  container: {
    position: 'relative',
    height: 180,
    marginBottom: 20,
    zIndex: -1,
  },
  h1: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    '-webkit-transform': 'translate(-50%, -50%)',
    '-ms-transform': 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
    fontSize: 224,
    fontWeight: 900,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: '-12px',
    color: theme.palette.secondary.main,
    textTransform: 'uppercase',
    textShadow: `-2px -2px 0px ${theme.palette.secondary.main},
      2px 2px 0px ${theme.palette.secondary.main}`,
    letterSpacing: '-20px',
    '@media only screen and (max-width: 480px)': {
      fontSize: 182,
    },
  },
  h2: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 110,
    fontSize: 42,
    fontWeight: 700,
    color: theme.palette.text.primary,
    textTransform: 'uppercase',
    letterSpacing: 13,
    margin: 0,
    '@media only screen and (max-width: 767px)': {
      fontSize: 24,
    },
  },
  notFoundLink: {
    display: 'inline-block',
    textTransform: 'uppercase',
    color: theme.palette.text.primary,
    textDecoration: 'none',
    border: '2px solid',
    background: 'transparent',
    padding: '10px 40px',
    fontSize: 14,
    fontWeight: 700,
    '-webkit-transition': '0.2s all',
    transition: '0.2s all',
    '&:hover': {
      color: theme.palette.secondary.main,
      textDecoration: 'none',
    },
  },
}));

function PageNotFound() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.content}>
        <Box className={classes.container}>
          <Typography className={classes.h1} variant="h1">
            404
          </Typography>
          <Typography className={classes.h2} variant="h2">
            <TextTranslation id="container.PageNotFound.PageNotFound" />
          </Typography>
        </Box>
        <Link className={classes.notFoundLink} to="/">
          <TextTranslation id="container.PageNotFound.HomePageButton" />
        </Link>
      </Box>
    </Box>
    //
  );
}

export default PageNotFound;
