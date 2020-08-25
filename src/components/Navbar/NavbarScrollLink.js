import { Box, Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { TextTranslation } from '../../containers/Language/TextTranslation';
import { CustomScrollLink } from '../CustomLink';

const listNavbarScrollLink = [
  {
    name: <TextTranslation id="components.Navbar.ShowTime" />,
    link: 'movie-show',
    offsetTop: 700,
  },
  {
    name: <TextTranslation id="components.Navbar.Cinema" />,
    link: 'cinema',
    offsetTop: 1300,
  },
  {
    name: <TextTranslation id="components.Navbar.News" />,
    link: 'news',
    offsetTop: 2050,
  },
  {
    name: <TextTranslation id="components.Navbar.Discounts" />,
    link: 'discounts',
    offsetTop: 3100,
  },
];

const useStyles = makeStyles((theme) => ({
  button: {
    margin: '0 10px',
    padding: '5px 20px',
    '&:hover': {
      color: theme.palette.secondary.main,
      backgroundColor: 'transparent',
    },
  },
}));

export default function NavbarScrollLink(props) {
  // eslint-disable-next-line global-require
  const Scroll = require('react-scroll');
  const scroll = Scroll.animateScroll;

  const classes = useStyles();
  const { pathname } = useLocation();
  const history = useHistory();

  return (
    <>
      {listNavbarScrollLink.map((item, index) => (
        <React.Fragment key={`scroll-link-${index}`}>
          {pathname === '/' ? (
            <CustomScrollLink
              display="block"
              offset={-50}
              to={item.link}
              {...props}
            >
              {item.name}
            </CustomScrollLink>
          ) : (
            <Box display="flex" justifyContent="center">
              <Button
                className={classes.button}
                onClick={() => {
                  // Back to home page
                  history.push('/');
                  scroll.scrollTo(item.offsetTop, {
                    duration: 1500,
                    delay: 1000,
                    smooth: true,
                  });
                }}
              >
                {item.name}
              </Button>
            </Box>
          )}
        </React.Fragment>
      ))}
    </>
  );
}
