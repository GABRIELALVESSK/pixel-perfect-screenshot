import { Instagram } from "lucide-react";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=600",
    alt: "Surfista na onda",
  },
  {
    url: "https://images.unsplash.com/photo-1455729552865-3658a5d39692?w=600",
    alt: "Aula de surf",
  },
  {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
    alt: "Praia tropical",
  },
  {
    url: "https://images.unsplash.com/photo-1509914398892-963f53e6e2f1?w=600",
    alt: "Surfista ao pôr do sol",
  },
  {
    url: "https://images.unsplash.com/photo-1531722569936-825d3dd91b15?w=600",
    alt: "Prancha na praia",
  },
  {
    url: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?w=600",
    alt: "Ondas perfeitas",
  },
];

const Gallery = () => {
  return (
    <section id="galeria" className="py-24 bg-ocean-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-display text-primary-foreground mb-4">
            GALERIA
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Confira momentos incríveis das nossas aulas e dos nossos alunos
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl aspect-square"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ocean/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="w-10 h-10 text-primary-foreground" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/surfschoolsurfsalva"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors text-lg font-semibold"
          >
            <Instagram className="w-6 h-6" />
            Siga-nos no Instagram para mais fotos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;