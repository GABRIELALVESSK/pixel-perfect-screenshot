import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Waves, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#aulas", label: "Aulas" },
    { href: "#galeria", label: "Galeria" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-2">
            <Waves className={`w-8 h-8 ${isScrolled ? "text-ocean" : "text-secondary"}`} />
            <span className={`text-xl font-display tracking-widest ${isScrolled ? "text-ocean-dark" : "text-primary-foreground"}`}>
              SURF SALVA
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${
                  isScrolled
                    ? "text-foreground hover:text-ocean"
                    : "text-primary-foreground hover:text-secondary"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              Agendar Aula
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card rounded-xl shadow-xl p-6 mb-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-ocean font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="bg-ocean text-primary-foreground hover:bg-ocean-dark w-full mt-2"
              >
                Agendar Aula
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;