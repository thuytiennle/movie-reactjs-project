import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import { actMovieModalOpen } from '../../containers/Home/MovieShow/modules/actions';
import { TrailerButton } from '../Button';
import { CustomRouterLink } from '../CustomLink';
import { TextTranslation } from '../../containers/Language/TextTranslation';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
    border: `1px solid ${theme.palette.secondary.main}`,
    '&:hover .showTime-container': {
      display: 'block',
      overflow: 'hidden',
    },
  },
  media: {
    width: 250,
    height: 375,
  },
  box: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    display: 'none',
  },
  button: {
    width: 'fit-content',
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '10px 30px',
  },
}));

function MovieItem(props) {
  const { movie } = props;
  // Declare dispatch
  const dispatch = useDispatch();

  const classes = useStyles();

  return (
    <Card className={`${classes.root} swiper-slide`}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={movie.hinhAnh}
          title={`${movie.tenPhim}-image`}
        />
      </CardActionArea>
      <Box className={`${classes.box} showTime-container`}>
        <TrailerButton
          small
          onClick={() => dispatch(actMovieModalOpen(movie.trailer))}
        >
          <PlayArrowIcon />
        </TrailerButton>
        <div className={classes.button}>
          <CustomRouterLink
            variant="outlined"
            to={`/detail-movie/${movie.maPhim}`}
          >
            <TextTranslation id="container.BookingButton" />
          </CustomRouterLink>
        </div>
      </Box>
    </Card>
  );
}

MovieItem.propTypes = {
  movie: PropTypes.object,
};

export default memo(MovieItem);
