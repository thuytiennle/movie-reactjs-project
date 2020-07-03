import React from 'react';
import { LoadingDiv, LoadingImg } from './styledLoadingIndicator';

function LoadingIndicator() {
  return (
    <LoadingDiv>
      <LoadingImg src="../img/loader.svg" alt="loading-img" />
    </LoadingDiv>
  );
}

export default LoadingIndicator;
