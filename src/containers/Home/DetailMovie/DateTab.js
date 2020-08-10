import React from 'react';
import { PropTypes } from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default function DateTab(props) {
  const date = new Date(props.date);
  return (
    <Typography>
      {`${`0${date.getDate()}`.slice(-2)}/${`0${date.getMonth() + 1}`.slice(
        -2,
      )}`}
    </Typography>
  );
}

DateTab.propTypes = {
  date: PropTypes.any,
};
