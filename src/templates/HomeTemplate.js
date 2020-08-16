import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Header } from '../components/Header';

function HomeLayout(props) {
  return (
    <>
      <Header />
      <div>{props.children}</div>
    </>
  );
}

export default function HomeTemplate({ Component, auth, ...props }) {
  return (
    <>
      {!auth ? (
        <Route
          {...props}
          render={(propsComponent) => {
            return (
              <HomeLayout>
                <Component {...propsComponent} />
              </HomeLayout>
            );
          }}
        />
      ) : (
        <Route
          {...props}
          render={(propsComponent) =>
            localStorage.getItem('UserSignIn') ? (
              <HomeLayout>
                <Component {...propsComponent} />
              </HomeLayout>
            ) : (
              <Redirect
                to={{
                  pathname: '/sign-in',
                  state: { from: propsComponent.location },
                }}
              />
            )
          }
        />
      )}
    </>
  );
}

HomeLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

HomeTemplate.propTypes = {
  Component: PropTypes.any,
  auth: PropTypes.bool,
};
