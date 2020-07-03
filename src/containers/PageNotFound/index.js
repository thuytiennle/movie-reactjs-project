import React from 'react';
import {
  NotFoundContainer,
  NotFoundContent,
  NotFoundDiv,
  NotFoundH1,
  NotFoundH2,
  NotFoundLink,
} from './styledPageNotFound';

function PageNotFound() {
  return (
    <NotFoundContainer id="notfound">
      <NotFoundContent className="notfound-content">
        <NotFoundDiv className="notfound-404">
          <NotFoundH1>404</NotFoundH1>
          <NotFoundH2>Page not found</NotFoundH2>
        </NotFoundDiv>
        <NotFoundLink to="/">Homepage</NotFoundLink>
      </NotFoundContent>
    </NotFoundContainer>
  );
}

export default PageNotFound;
