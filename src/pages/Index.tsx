import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Surf Salva - Escola de Surf em Salvador | Aulas para Todos os Níveis</title>
        <meta
          name="description"
          content="Aprenda a surfar em Salvador, Bahia! Aulas de surf para iniciantes e avançados com instrutores certificados. Equipamento incluso e praias paradisíacas."
        />
        <meta name="keywords" content="escola de surf, aulas de surf, Salvador, Bahia, surf iniciante, aprender surf" />
      </Helmet>
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;