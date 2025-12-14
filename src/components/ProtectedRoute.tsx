import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSession } from '@/integrations/supabase/session-context';

const ProtectedRoute = () => {
  const { session, isLoading } = useSession();

  if (isLoading) {
    // Optionally render a loading spinner or placeholder
    return (
      <div className="flex min-h-screen items-center justify-center bg-sand">
        <p className="text-ocean-dark">Verificando autenticação...</p>
      </div>
    );
  }

  if (!session) {
    // Redirect unauthenticated users to the login page
    return <Navigate to="/login" replace />;
  }

  // Render the child route content if authenticated
  return <Outlet />;
};

export default ProtectedRoute;