import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  margin: 0 40px;
  padding: 0;
  @media screen and (max-width: 768px) {
    margin: 0 20px;
  }
`;

export const LogoSpan = styled.span`
  color: ${(props) => (props.color ? '#66fcf1' : '#fff')};
  font-size: 3rem;
  font-weight: 700;
  display: inline-block;
  position: relative;

  &::before {
    content: attr(data-hover);
    width: 100%;
    height: 0;
    position: absolute;
    left: 0;
    top: 0;
    color: ${(props) => (props.color ? '#fff' : '#66fcf1')};
    overflow: hidden;

    transition: all 2s;
  }

  .header-logo:hover &::before {
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    font-size: 2.2rem;
    font-weight: 700;
  }
`;

export const ToggleBtn = styled.button`
  line-height: unset;
  transition: all 0.5s;
  font-size: 2rem;
  color: #fff;

  &:hover {
    color: #66fcf1;
  }
  &:focus {
    outline: none;
  }
`;

export const Navbar = styled.ul`
  flex-grow: ${(props) => props.flex};
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1200px) {
    width: 100%;
    padding-bottom: 10px;
  }
`;

export const NavLink = styled(Link)`
  background-color: #1f2833;
  color: #fff;
  display: inline-block;
  position: relative;

  &::before,
  &::after {
    content: attr(data-hover);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    line-height: 40px;
    text-align: center;
    background: #1f2833;
    color: #66fcf1;
    transition: 0.5s;
    transform-origin: bottom;
    transform: translateY(-100%) rotateX(90deg);
  }

  &::after {
    color: #fff;
    transform-origin: top;
    transform: translateY(0) rotateX(0deg);
  }

  &:hover::before {
    transform: translateY(0) rotateX(0deg);
  }

  &:hover::after {
    transform: translateY(100%) rotateX(90deg);
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
    text-align: center;

    &:hover {
      color: #66fcf1;
    }

    &:before,
    &:hover::before,
    &:after,
    &:hover::after {
      content: ' ';
      transform: none;
      color: transparent;
      background-color: transparent;
    }
  }
`;

export const RouterLink = styled(Link)`
  padding: 5px 15px;
  font-weight: 600;
  color: ${(props) => (props.color ? '#66fcf1' : '#fff')};
  border: 1px solid ${(props) => (props.color ? '#66fcf1' : 'transparent')};
  background: transparent;
  cursor: pointer;

  transition: all 0.5s;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${(props) => (props.color ? '#66fcf1' : '#fff')};
    color: #1f2833;
    box-shadow: 0 0 5px ${(props) => (props.color ? '#66fcf1' : '#fff')},
      0 0 25px ${(props) => (props.color ? '#66fcf1' : '#fff')},
      0 0 50px ${(props) => (props.color ? '#66fcf1' : '#fff')},
      0 0 200px ${(props) => (props.color ? '#66fcf1' : '#fff')};
  }
`;
