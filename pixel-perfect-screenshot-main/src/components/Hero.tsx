import { Button } from "@/components/ui/button";
import { Waves, Instagram } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean via-ocean-light to-background" />
      
      {/* Wave pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute bottom-0 w-full h-64" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="currentColor"
            className="text-primary-foreground"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Waves className="w-12 h-12 text-secondary animate-pulse" />
          <span className="text-secondary font-display text-2xl tracking-widest">SURF SALVA</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display text-primary-foreground mb-6 leading-none">
          APRENDA A SURFAR
          <br />
          <span className="text-secondary">EM SALVADOR</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 font-light">
          Aulas de surf para todos os níveis nas melhores praias da Bahia. 
          Venha viver a experiência do surf com instrutores experientes!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6 font-semibold"
          >
            Agende sua Aula
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6"
            asChild
          >
            <a href="https://www.instagram.com/surfschoolsurfsalva" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 mr-2" />
              @surfschoolsurfsalva
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;