import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';

const CustomTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    margin: `10px ${theme.spacing(1)} 10px 0`,
    opacity: 0.5,
    '&:hover': {
      color: theme.palette.secondary.main,
      opacity: 1,
    },
    '&$selected': {
      opacity: 1,
      color: theme.palette.secondary.main,
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      opacity: 1,
      color: theme.palette.secondary.main,
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

export default CustomTab;
