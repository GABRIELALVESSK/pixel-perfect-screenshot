import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSession } from '@/integrations/supabase/session-context';
import { Loader2 } from 'lucide-react';

const AuthGuard: React.FC = () => {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-sand">
        <Loader2 className="w-8 h-8 animate-spin text-ocean-dark" />
        <p className="ml-3 text-ocean-dark">Carregando autenticação...</p>
      </div>
    );
  }

  // If the user is not authenticated, redirect them to the login page
  if (!session) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the child routes
  return <Outlet />;
};

export default AuthGuard;