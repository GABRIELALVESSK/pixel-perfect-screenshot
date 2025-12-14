import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-sand">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-display text-ocean-dark mb-4">
            ENTRE EM CONTATO
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas ou agende sua aula. Estamos prontos para te ajudar!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-ocean rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-display text-ocean-dark mb-1">Telefone</h3>
                <p className="text-muted-foreground">(71) 99999-9999</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-ocean rounded-xl flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-display text-ocean-dark mb-1">WhatsApp</h3>
                <p className="text-muted-foreground">(71) 99999-9999</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-ocean rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-display text-ocean-dark mb-1">E-mail</h3>
                <p className="text-muted-foreground">contato@surfsalva.com.br</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-ocean rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-display text-ocean-dark mb-1">Localização</h3>
                <p className="text-muted-foreground">Salvador, Bahia - Brasil</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-sunset rounded-xl flex items-center justify-center flex-shrink-0">
                <Instagram className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-display text-ocean-dark mb-1">Instagram</h3>
                <a
                  href="https://www.instagram.com/surfschoolsurfsalva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ocean hover:text-ocean-dark transition-colors"
                >
                  @surfschoolsurfsalva
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl shadow-lg">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nome
                  </label>
                  <Input placeholder="Seu nome" className="bg-background" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Telefone
                  </label>
                  <Input placeholder="(00) 00000-0000" className="bg-background" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  E-mail
                </label>
                <Input type="email" placeholder="seu@email.com" className="bg-background" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <Textarea
                  placeholder="Conte-nos o que você precisa..."
                  rows={4}
                  className="bg-background resize-none"
                />
              </div>
              <Button size="lg" className="w-full bg-ocean hover:bg-ocean-dark">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;