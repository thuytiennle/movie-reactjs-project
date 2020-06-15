import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { routesHome } from '../../routes';
import HomeTemplate from '../../templates/HomeTemplate';

function App() {
  const showMenuHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((route, index) => {
        return (
          <HomeTemplate
            key={index}
            path={route.path}
            exact={route.exact}
            Component={route.component}
          />
        );
      });
    }
  };
  return (
    <BrowserRouter>
      <Switch>{showMenuHome(routesHome)}</Switch>
    </BrowserRouter>
  );
}

export default App;
