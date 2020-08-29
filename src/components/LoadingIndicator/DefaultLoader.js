import React, { useContext } from 'react';
import styled from 'styled-components';
import { CustomThemeContext } from '../../containers/Theme/CustomThemeContext';

const LoadingDiv = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100%;
  height: 100vh;
  position: relative;

  .pl-hourglass {
    animation-name: hourglassA;
    background: #a3a3a3;
    clip-path: polygon(0 0, 100% 0, 50% 50%, 100% 100%, 0 100%, 50% 50%);
    -webkit-clip-path: polygon(
      0 0,
      100% 0,
      50% 50%,
      100% 100%,
      0 100%,
      50% 50%
    );
  }
  .pl-hourglass:before,
  .pl-hourglass:after {
    position: static;
    clip-path: none;
    -webkit-clip-path: none;
  }
  .pl-hourglass:before {
    animation-name: hourglassB;
  }
  .pl-hourglass:after {
    animation-name: hourglassC;
  }
  @keyframes hourglassA {
    from,
    75% {
      transform: rotate(0);
    }
    to {
      transform: rotate(180deg);
    }
  }
  @keyframes hourglassB {
    from {
      transform: scaleY(1);
    }
    50%,
    to {
      transform: scaleY(0);
    }
  }
  @keyframes hourglassC {
    from {
      transform: scaleY(0);
    }
    50%,
    to {
      transform: scaleY(1);
    }
  }
`;

const LoadingContainer = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoaderCell = styled.div`
  flex-basis: 50%;
  padding: 1.5em;
`;

const LoaderPl = styled.div`
  margin: 0 auto 1.5em auto;
  position: relative;
  width: 3em;
  height: 3em;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  &:before,
  &:after {
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    background: ${(props) => props.bgColor};
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    transform-origin: 50% 100%;
    clip-path: polygon(0 0, 100% 0, 50% 100%);
    -webkit-clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
`;

function DefaultLoader() {
  const { currentTheme } = useContext(CustomThemeContext);

  return (
    <LoadingDiv bgColor={currentTheme === 'darkTheme' ? '#000' : 'fff'}>
      <LoadingContainer>
        <LoaderCell className="cell">
          <LoaderPl
            className="pl pl-hourglass"
            bgColor={currentTheme === 'darkTheme' ? '#FFB74D' : '#cc4444'}
          />
        </LoaderCell>
      </LoadingContainer>
    </LoadingDiv>
  );
}

export default DefaultLoader;
