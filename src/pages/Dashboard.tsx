import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Erro ao sair: " + error.message);
    } else {
      toast.success("Você saiu com sucesso!");
      navigate("/login");
    }
  };

  return (
    <>
      <Helmet>
        <title>Dashboard | Surf Salva</title>
      </Helmet>
      <Navbar />
      <main className="min-h-screen pt-24 bg-sand">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-5xl font-display text-ocean-dark mb-6">
            Seu Painel de Aluno
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Bem-vindo(a) de volta! Aqui você pode gerenciar suas aulas e pacotes.
          </p>
          
          <Button 
            onClick={handleLogout} 
            variant="destructive"
            className="bg-sunset hover:bg-sunset/90"
          >
            Sair
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;