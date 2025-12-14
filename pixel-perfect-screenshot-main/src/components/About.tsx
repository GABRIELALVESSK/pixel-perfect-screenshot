import { Award, Users, MapPin, Sun } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Instrutores Certificados",
    description: "Profissionais qualificados com anos de experiência no surf.",
  },
  {
    icon: Users,
    title: "Aulas Personalizadas",
    description: "Turmas pequenas para atenção individual e aprendizado rápido.",
  },
  {
    icon: MapPin,
    title: "Melhores Praias",
    description: "Aulas nas praias mais adequadas para cada nível de aluno.",
  },
  {
    icon: Sun,
    title: "Sol o Ano Todo",
    description: "Salvador oferece condições perfeitas para surfar durante todo o ano.",
  },
];

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-sand">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-display text-ocean-dark mb-4">
            POR QUE ESCOLHER A SURF SALVA?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Somos apaixonados pelo surf e queremos compartilhar essa paixão com você. 
            Nossa missão é proporcionar a melhor experiência de aprendizado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-ocean rounded-xl flex items-center justify-center mb-6 group-hover:bg-tropical transition-colors">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display text-ocean-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;