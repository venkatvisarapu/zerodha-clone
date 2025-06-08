import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useGeneralContext } from './GeneralContext';

const ProtectedRoute = () => {
  const { user, loading } = useGeneralContext();

  if (loading) {
    return <div>Loading session...</div>;
  }

  // After loading, if user exists, show the page, otherwise redirect to frontend login
  return user ? <Outlet /> : <Navigate to="http://localhost:5174/login" replace />;
};

export default ProtectedRoute;