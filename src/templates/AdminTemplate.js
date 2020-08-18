import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import AdminSidebar from '../components/Sidebar/AdminSidebar';

function AdminLayout(props) {
  return (
    <>
      <AdminSidebar />
      {props.children}
    </>
  );
}

AdminLayout.propTypes = {
  children: PropTypes.any,
};

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        // Only access to dashboard page only when user is admin
        if (
          localStorage.getItem('UserSignIn') &&
          JSON.parse(localStorage.getItem('UserSignIn')).maLoaiNguoiDung ===
            'QuanTri'
        ) {
          return (
            <AdminLayout>
              <Component {...propsComponent} />
            </AdminLayout>
          );
        }
        // userType is not admin after log in then direct to home
        if (
          localStorage.getItem('UserSignIn') &&
          JSON.parse(localStorage.getItem('UserSignIn')).maLoaiNguoiDung !==
            'QuanTri'
        ) {
          return <Redirect to="/" />;
        }
        return (
          <Redirect
            to={{
              pathname: '/sign-in',
              state: { from: propsComponent.location },
            }}
          />
        );
      }}
    />
  );
}

AdminTemplate.propTypes = {
  Component: PropTypes.any,
};
