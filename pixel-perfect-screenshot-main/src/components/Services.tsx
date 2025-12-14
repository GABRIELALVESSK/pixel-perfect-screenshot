import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Aula Experimental",
    price: "R$ 120",
    duration: "1 hora",
    features: [
      "Prancha e equipamento inclusos",
      "Instrutor dedicado",
      "Seguro incluído",
      "Fotos da aula",
    ],
    popular: false,
  },
  {
    name: "Pacote Iniciante",
    price: "R$ 450",
    duration: "5 aulas",
    features: [
      "Prancha e equipamento inclusos",
      "Instrutor dedicado",
      "Seguro incluído",
      "Fotos e vídeos",
      "Certificado de conclusão",
    ],
    popular: true,
  },
  {
    name: "Pacote Avançado",
    price: "R$ 800",
    duration: "10 aulas",
    features: [
      "Prancha e equipamento inclusos",
      "Instrutor dedicado",
      "Seguro incluído",
      "Fotos e vídeos",
      "Certificado de conclusão",
      "Análise de vídeo",
      "Treino de manobras",
    ],
    popular: false,
  },
];

const Services = () => {
  return (
    <section id="aulas" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-display text-ocean-dark mb-4">
            NOSSAS AULAS
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o pacote ideal para você e comece sua jornada no surf hoje mesmo!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-card p-8 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 ${
                pkg.popular
                  ? "border-2 border-ocean ring-4 ring-ocean/20 scale-105"
                  : "border border-border"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sunset text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Mais Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-display text-ocean-dark mb-2">
                  {pkg.name}
                </h3>
                <div className="text-4xl font-display text-ocean mb-1">
                  {pkg.price}
                </div>
                <p className="text-muted-foreground">{pkg.duration}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-tropical rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  pkg.popular
                    ? "bg-ocean hover:bg-ocean-dark"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                }`}
                size="lg"
              >
                Escolher Pacote
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;