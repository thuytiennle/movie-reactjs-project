import { PropTypes } from 'prop-types';
import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  makeStyles,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    padding: '0 10px',
  },
}));

export default function ShowTimeItem(props) {
  const classes = useStyles();
  const { summary, details } = props;

  return (
    <div className={classes.root}>
      <Accordion className={classes.accordion} defaultExpanded={Boolean(true)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {summary}
        </AccordionSummary>
        <AccordionDetails>{details}</AccordionDetails>
      </Accordion>
    </div>
  );
}

ShowTimeItem.propTypes = {
  summary: PropTypes.any,
  details: PropTypes.any,
};
