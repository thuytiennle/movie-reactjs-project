import { Button, Card, CardContent, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { PropTypes } from 'prop-types';
import React from 'react';
import { Link } from 'react-scroll';
import { TextTranslation } from '../../Language/TextTranslation';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'relative',
    width: '100%',
    height: '70vh',
    backgroundColor: theme.palette.background.default,
  },
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  root: {
    display: 'flex',
    width: '100%',
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  contentContainer: {
    width: '100%',
    position: 'relative',
  },
  imgContent: {
    width: '30%',
    padding: 0,
    margin: '0 20px',
    borderRadius: 5,
    border: `1px solid ${theme.palette.secondary.main}`,
    overflow: 'hidden',
  },
  content: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  padding: {
    padding: 5,
  },
  bookingLink: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.titleBar.contrastText,
  },
}));

export default function CinemaIntro(props) {
  const classes = useStyles();
  const { cinema } = props;

  return (
    <div className={classes.wrapper}>
      <Container maxWidth="md" className={classes.container}>
        <Card className={classes.root}>
          <CardContent className={classes.imgContent}>
            <img src={cinema.hinhAnh} alt="" />
          </CardContent>
          <div className={classes.contentContainer}>
            <CardContent className={classes.content}>
              <Typography
                variant="h5"
                color="secondary"
                className={classes.padding}
              >
                {cinema.tenCumRap}
              </Typography>
              <Typography
                variant="body2"
                color="textPrimary"
                component="p"
                className={classes.padding}
              >
                {cinema.diaChi}
              </Typography>
              <Button variant="contained" color="secondary" className="my-3">
                <Link smooth={Boolean(true)} offset={-50} to="cinemaShowTime">
                  <TextTranslation id="container.BookingButton" />
                </Link>
              </Button>
            </CardContent>
          </div>
        </Card>
      </Container>
    </div>
  );
}

CinemaIntro.propTypes = {
  cinema: PropTypes.any,
};
