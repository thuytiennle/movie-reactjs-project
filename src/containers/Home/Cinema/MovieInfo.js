import React from 'react';
import Typography from '@material-ui/core/Typography';
import { PropTypes } from 'prop-types';
import { SimpleCard } from '../../../components/Card';

export default function MovieInfo(props) {
  const { movie } = props;

  return (
    <SimpleCard img={movie.hinhAnh} title={movie.title}>
      <Typography variant="body2" color="textPrimary" component="p">
        2D
      </Typography>
    </SimpleCard>
  );
}

MovieInfo.propTypes = {
  movie: PropTypes.any,
};
