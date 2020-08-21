import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { routesAdmin, routesHome } from '../../routes';
import AdminTemplate from '../../templates/AdminTemplate';
import HomeTemplate from '../../templates/HomeTemplate';
import { history } from '../../utils/history';
import { SignIn } from '../Auth/SignIn';
import { SignUp } from '../Auth/SignUp';
import LanguageProvider from '../Language/LanguageProvider';
import { PageNotFound } from '../PageNotFound';
import CustomThemeProvider from '../Theme/CustomThemeProvider';

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

  const showMenuAdmin = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((route, index) => {
        return (
          <AdminTemplate
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
    <CustomThemeProvider>
      <LanguageProvider>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Router history={history}>
            <Switch>
              {showMenuHome(routesHome)}
              {showMenuAdmin(routesAdmin)}
              <Route exact={false} path="/sign-up" component={SignUp} />
              <Route exact={false} path="/sign-in" component={SignIn} />
              <Route path="" component={PageNotFound} />
            </Switch>
          </Router>
        </MuiPickersUtilsProvider>
      </LanguageProvider>
    </CustomThemeProvider>
  );
}

export default App;
