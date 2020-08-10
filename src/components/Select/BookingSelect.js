import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Paper,
  InputBase,
  FormControl,
  InputLabel,
  Select,
} from '@material-ui/core';
import { PropTypes } from 'prop-types';
import { TextTranslation } from '../../containers/Language/TextTranslation';

// Custumize InputBase
const CustomInput = withStyles((theme) => ({
  input: {
    position: 'relative',
    borderRadius: 'unset',
    borderRight: `1px solid gray`,
    fontSize: 16,
    padding: '10px 20px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),

    '&:focus': {
      outline: 'none',
      background: 'transparent',
    },
  },
}))(InputBase);

// Customize Paper of Menudropdown
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const CustomPaper = withStyles((theme) => ({
  root: {
    maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    width: 300,
    border: `1px solid ${theme.palette.secondary.main}`,
    backgroundColor: theme.palette.background.paper,
    // Customize scrollbar
    '&::-webkit-scrollbar': {
      width: 4,
      backgroundColor: '#e8e3e3',
      borderRadius: 10,
    },
    '&::-webkit-scrollbar-track': {
      borderRadius: 10,
      boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 20,
      backgroundColor: theme.palette.secondary.main,
      outline: '1px solid slategrey',
    },
  },
}))(Paper);

// MenuProps param of Select
// PaperProps:{component: ..., style: {...}}
const MenuProps = {
  transitionDuration: 400,
  getContentAnchorEl: null,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
  PaperProps: {
    component: CustomPaper,
  },
};

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: '100%',
  },
  inputLabel: {
    color: theme.palette.secondary.main,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    paddingLeft: '10px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function BookingSelect(props) {
  const classes = useStyles();
  const { value, label } = props;

  return (
    <FormControl className={classes.formControl}>
      <InputLabel focused={false} className={classes.inputLabel} shrink={false}>
        {value === '' && <TextTranslation id={`container.Booking.${label}`} />}
      </InputLabel>
      <Select
        {...props}
        // Scroll dropdown menu up for good observation
        // onOpen={() => {
        //   // Check if select scroll to position 100 then scroll up
        //   if (window.pageYOffset < 200) {
        //     window.scrollTo({
        //       top: 200,
        //       behavior: 'smooth',
        //     });
        //   }
        // }}
        // Customixe InputBase of Select
        input={<CustomInput />}
        MenuProps={MenuProps}
      >
        {props.children}
      </Select>
    </FormControl>
  );
}

BookingSelect.propTypes = {
  children: PropTypes.node,
  value: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired,
};
