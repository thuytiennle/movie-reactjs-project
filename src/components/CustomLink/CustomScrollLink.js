import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';
import { CustomThemeContext } from '../../containers/Theme/CustomThemeContext';

const ScrollLink = styled(Link)`
  position: relative;
  display: ${(props) => props.display};
  margin: 0 10px;
  padding: 5px 20px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  background-color: ${(props) => props.bg};

  &:hover {
    color: ${(props) => props.color} !important;
    background-color: ${(props) => props.bgHover} !important;
  }

  &:active {
    transform: translate(0px, 5px);
  }

  @media screen and (max-width: 960px) {
    margin: 0;
    &:active {
      transform: unset;
    }
  }
`;
export default function CustomScrollLink(props) {
  const { currentTheme } = useContext(CustomThemeContext);

  return (
    <ScrollLink
      smooth={Boolean(true)}
      duration={500}
      color={currentTheme === 'darkTheme' ? '#FFB74D' : '#cc4444'}
      {...props}
    >
      {props.children}
    </ScrollLink>
  );
}

CustomScrollLink.propTypes = {
  children: PropTypes.node.isRequired,
};
