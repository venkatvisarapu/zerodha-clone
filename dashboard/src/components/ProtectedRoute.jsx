import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useGeneralContext } from './GeneralContext';

const ProtectedRoute = () => {
  const { user, loading } = useGeneralContext();

  // This effect will run whenever 'loading' or 'user' changes.
  useEffect(() => {
    // We only want to act when the initial loading is finished.
    if (!loading) {
      // If loading is done and there is NO user, then we redirect.
      if (!user) {
        console.log("User not found, redirecting to login page...");
        // Use window.location.replace for a clean external redirect.
        // This is more reliable than <Navigate> for external URLs.
        window.location.replace(`${import.meta.env.VITE_LANDING_PAGE_URL}/login`);
      }
    }
  }, [user, loading]); // Dependencies for the effect

  // --- Render Logic ---

  // 1. If we are still in the initial loading state, show a loading message.
  // This prevents the page from flashing or trying to redirect prematurely.
  if (loading) {
    return <div>Loading session...</div>;
  }

  // 2. If loading is finished AND the user exists, render the actual page content.
  // The <Outlet /> represents whatever child route is active (e.g., /holdings, /orders).
  return user ? <Outlet /> : <div>Redirecting to login...</div>;
};

export default ProtectedRoute;