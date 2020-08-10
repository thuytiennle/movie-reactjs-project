import React, { useContext } from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import styled from 'styled-components';
import { CustomThemeContext } from '../../containers/Theme/CustomThemeContext';

const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => (props.small ? '55px' : '70px')};
  height: ${(props) => (props.small ? '55px' : '70px')};
  border-radius: 50%;
  border: 2px solid #fff;
  background-color: #1f2833;
  color: ${(props) => props.bgColor};
  display: ${(props) => (props.small ? '' : 'none')};

  &:hover {
    background-color: ${(props) => props.bgColor};
    color: #1f2833;
    box-shadow: 0 0 5px ${(props) => props.bgColor},
      0 0 25px ${(props) => props.bgColor}, 0 0 50px ${(props) => props.bgColor},
      0 0 200px ${(props) => props.bgColor};
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
    font-size: 0.8rem;
  }
`;

export default function TrailerButton(props) {
  const { currentTheme } = useContext(CustomThemeContext);

  return (
    <Button
      {...props}
      bgColor={currentTheme === 'darkTheme' ? '#FFB74D' : '#cc4444'}
    >
      <PlayArrowIcon />
    </Button>
  );
}
