import React from 'react';
import { Redirect } from 'react-router-dom';

export default function DashBoard() {
  // Rediirect to UserMange
  return <Redirect to="/admin/user-manage" />;
}
