import styled from 'styled-components';

export const LoadingDiv = styled.div`
  background-color: #000;
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const LoadingImg = styled.img`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
