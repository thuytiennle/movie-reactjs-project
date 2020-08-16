import React from 'react';
import { CustomScrollLink } from '../CustomLink';
import { TextTranslation } from '../../containers/Language/TextTranslation';

const listNavbarScrollLink = [
  {
    name: <TextTranslation id="components.Navbar.ShowTime" />,
    link: 'movie-show',
  },
  {
    name: <TextTranslation id="components.Navbar.Cinema" />,
    link: 'cinema',
  },
  {
    name: <TextTranslation id="components.Navbar.News" />,
    link: 'news',
  },
  {
    name: <TextTranslation id="components.Navbar.Discounts" />,
    link: 'discounts',
  },
];

export default function NavbarScrollLink(props) {
  return (
    <>
      {listNavbarScrollLink.map((item, index) => (
        <CustomScrollLink
          display="block"
          key={`scroll-link-${index}`}
          offset={-50}
          to={item.link}
          {...props}
        >
          {item.name}
        </CustomScrollLink>
      ))}
    </>
  );
}
