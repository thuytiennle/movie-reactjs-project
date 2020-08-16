import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { routesHome } from '../../routes';
import HomeTemplate from '../../templates/HomeTemplate';
import CustomThemeProvider from '../Theme/CustomThemeProvider';
import LanguageProvider from '../Language/LanguageProvider';
import { SignUp } from '../Auth/SignUp';
import { SignIn } from '../Auth/SignIn';
import { PageNotFound } from '../PageNotFound';
import { history } from '../../utils/history';

function App() {
  const showMenuHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((route, index) => {
        return (
          <HomeTemplate
            key={index}
            path={route.path}
            exact={route.exact}
            auth={route.auth}
            Component={route.component}
          />
        );
      });
    }
  };
  return (
    <CustomThemeProvider>
      <LanguageProvider>
        <Router history={history}>
          <Switch>
            {showMenuHome(routesHome)}
            <Route exact={false} path="/sign-up" component={SignUp} />
            <Route exact={false} path="/sign-in" component={SignIn} />
            <Route path="" component={PageNotFound} />
          </Switch>
        </Router>
      </LanguageProvider>
    </CustomThemeProvider>
  );
}

export default App;
