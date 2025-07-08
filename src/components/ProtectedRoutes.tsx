// components/ProtectedRoute.tsx
import React, { Component, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: ReactNode;
}

class ProtectedRoute extends Component<ProtectedRouteProps> {
  render() {
    var token = localStorage.getItem('token');
    if (!token) {
      return <Navigate to="/login" replace />;
    }
    return this.props.children;
  }
}

export default ProtectedRoute;