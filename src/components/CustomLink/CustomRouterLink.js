import { Button, makeStyles } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: 5,
    backgroundColor: theme.palette.background.default,
    height: 'fit-content',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
}));

export default function CustomRouterLink(props) {
  const { to, variant } = props;
  const classes = useStyles();

  const CustomLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref) => (
        <Link ref={ref} to={to} {...linkProps} />
      )),
    [to],
  );
  return (
    <Button
      className={classes.button}
      variant={variant}
      color="inherit"
      aria-label="mode"
      component={CustomLink}
      {...props}
    >
      {props.children}
    </Button>
  );
}

CustomRouterLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  variant: PropTypes.string,
};
