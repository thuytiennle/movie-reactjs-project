import { Box, Button, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { PropTypes } from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-scroll';
import { TextTranslation } from '../../Language/TextTranslation';
import { actMovieModalOpen } from '../MovieShow/modules/actions';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'relative',
    width: '100%',
    padding: '100px 0',
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down('sm')]: {
      padding: '50px 0',
    },
  },
  contentContainer: {
    width: '100%',
    position: 'relative',
  },
  imgContent: {
    borderRadius: 5,
    border: `1px solid ${theme.palette.secondary.main}`,
    maxWidth: 250,
    maxHeight: 450,
  },
  content: {
    padding: '0 10px',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  padding: {
    padding: 5,
  },
  contentButton: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
}));

export default function MovieIntro(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { movie } = props;

  return (
    <div className={classes.wrapper}>
      <Container maxWidth="md">
        <Grid container alignItems="center" justify="center">
          <Grid item xs={12} sm={3}>
            <Box width="100%" display="flex" justifyContent="center">
              <img className={classes.imgContent} src={movie.hinhAnh} alt="" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={9}>
            <div className={classes.content}>
              <Typography
                variant="h4"
                color="secondary"
                className={classes.padding}
              >
                {movie.tenPhim}
              </Typography>
              <Typography
                variant="body2"
                color="textPrimary"
                component="p"
                className={classes.padding}
              >
                {movie.moTa}
              </Typography>
              <div className={classes.contentButton}>
                <Button
                  variant="contained"
                  className="my-3 mx-2"
                  onClick={() => dispatch(actMovieModalOpen(movie.trailer))}
                >
                  <PlayArrowIcon />
                </Button>
                <Button variant="contained" color="secondary" className="my-3">
                  <Link smooth={Boolean(true)} offset={-50} to="movieShowTime">
                    <TextTranslation id="container.BookingButton" />
                  </Link>
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

MovieIntro.propTypes = {
  movie: PropTypes.any,
};
