import { Waves, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ocean-dark text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Waves className="w-8 h-8 text-secondary" />
            <span className="text-2xl font-display tracking-widest">SURF SALVA</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-primary-foreground/80">
            <a href="#sobre" className="hover:text-secondary transition-colors">Sobre</a>
            <a href="#aulas" className="hover:text-secondary transition-colors">Aulas</a>
            <a href="#galeria" className="hover:text-secondary transition-colors">Galeria</a>
            <a href="#contato" className="hover:text-secondary transition-colors">Contato</a>
          </nav>

          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/surfschoolsurfsalva"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>© {new Date().getFullYear()} Surf Salva. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;