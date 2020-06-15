import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

function HomeLayout(props) {
  return <div>{props.children}</div>;
}

export default function HomeTemplate({ Component, ...props }) {
  return (
    <div>
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
    </div>
  );
}

HomeLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
