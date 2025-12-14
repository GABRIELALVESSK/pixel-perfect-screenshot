import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/integrations/supabase/client';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { useSession } from '@/integrations/supabase/session-context';
import { useEffect } from 'react';

const Login = () => {
  const { session, isLoading } = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && session) {
      // Redirect authenticated users to the home page
      navigate('/');
    }
  }, [session, isLoading, navigate]);

  if (isLoading || session) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-sand">
        <p className="text-ocean-dark">Carregando...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-sand p-4">
      <Helmet>
        <title>Login | Surf Salva</title>
      </Helmet>
      <div className="w-full max-w-md bg-card p-8 rounded-xl shadow-2xl">
        <h1 className="text-4xl font-display text-ocean-dark text-center mb-6">
          Bem-vindo(a) à Surf Salva
        </h1>
        <Auth
          supabaseClient={supabase}
          providers={[]}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: 'hsl(var(--ocean))',
                  brandAccent: 'hsl(var(--ocean-dark))',
                  defaultButtonBackground: 'hsl(var(--secondary))',
                  defaultButtonBackgroundHover: 'hsl(var(--secondary-foreground))',
                  defaultButtonText: 'hsl(var(--secondary-foreground))',
                  inputBackground: 'hsl(var(--background))',
                  inputBorder: 'hsl(var(--border))',
                  inputBorderHover: 'hsl(var(--ocean))',
                  inputBorderFocus: 'hsl(var(--ocean))',
                  inputText: 'hsl(var(--foreground))',
                },
              },
            },
          }}
          theme="light"
          localization={{
            variables: {
              sign_in: {
                email_label: 'Seu e-mail',
                password_label: 'Sua senha',
                email_input_placeholder: 'exemplo@email.com',
                password_input_placeholder: '••••••••',
                button_label: 'Entrar',
                loading_button_label: 'Entrando...',
                link_text: 'Já tem uma conta? Entre',
                social_provider_text: 'Entrar com {{provider}}',
              },
              sign_up: {
                email_label: 'Seu e-mail',
                password_label: 'Crie uma senha',
                email_input_placeholder: 'exemplo@email.com',
                password_input_placeholder: '••••••••',
                button_label: 'Cadastrar',
                loading_button_label: 'Cadastrando...',
                link_text: 'Não tem uma conta? Cadastre-se',
                social_provider_text: 'Cadastrar com {{provider}}',
                confirmation_text: 'Verifique seu e-mail para o link de confirmação',
              },
              forgotten_password: {
                email_label: 'Seu e-mail',
                email_input_placeholder: 'exemplo@email.com',
                button_label: 'Enviar instruções de redefinição',
                loading_button_label: 'Enviando...',
                link_text: 'Esqueceu sua senha?',
                confirmation_text: 'Verifique seu e-mail para o link de redefinição',
              },
              magic_link: {
                email_input_label: 'Seu e-mail',
                email_input_placeholder: 'exemplo@email.com',
                button_label: 'Enviar link mágico',
                loading_button_label: 'Enviando...',
                link_text: 'Enviar um link mágico por e-mail',
                confirmation_text: 'Verifique seu e-mail para o link mágico',
              },
              update_password: {
                password_label: 'Nova senha',
                password_input_placeholder: '••••••••',
                button_label: 'Atualizar senha',
                loading_button_label: 'Atualizando...',
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Login;