import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, ArrowRight, Sparkles, Shield, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";

const services = [
  {
    title: "Parkettsliping",
    description: "Profesjonell sliping av parkett for et nytt og ferskt utseende.",
    icon: Sparkles,
  },
  {
    title: "Gulvsliping",
    description: "Komplett gulvsliping for alle typer tregulv.",
    icon: Shield,
  },
  {
    title: "Lakkering",
    description: "Høykvalitets lakkering som beskytter og fremhever gulvet.",
    icon: Star,
  },
];

const benefits = [
  "Over 15 års erfaring",
  "Profesjonelt utstyr",
  "Støvfri sliping",
  "Miljøvennlige produkter",
  "Gratis befaring",
  "Konkurransedyktige priser",
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
          >
            <source src="/videos/helio-final.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="container relative z-10 py-20 md:py-32">
          <div className="max-w-3xl animate-fade-in">
            <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-white/20">
              Profesjonell Gulvsliping
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Gi gulvet ditt nytt liv med{" "}
              <span className="text-primary">Seagull gulvsliper</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              Vi tilbyr profesjonell parkettsliping, gulvsliping og lakkering i hele Norge. 
              Våre erfarne håndverkere gir gulvet ditt den behandlingen det fortjener.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/kontakt">
                  Få Gratis Tilbud
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20" asChild>
                <Link to="/tjenester">Se Våre Tjenester</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Våre Tjenester
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Vi tilbyr et bredt spekter av gulvtjenester for å møte dine behov.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/tjenester">
                Se Alle Tjenester
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Hvorfor Velge Oss?
              </h2>
              <p className="text-muted-foreground mb-8">
                Med over 15 års erfaring i bransjen, er vi stolte av å levere førsteklasses 
                gulvslipetjenester. Vi bruker kun det beste utstyret og miljøvennlige produkter 
                for å sikre et perfekt resultat hver gang.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl wood-gradient opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-background/90 backdrop-blur-sm rounded-xl p-8 shadow-xl max-w-xs">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground font-medium mb-2">
                    "Fantastisk arbeid! Gulvet vårt ser helt nytt ut."
                  </p>
                  <p className="text-sm text-muted-foreground">— Fornøyd Kunde, Oslo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Klar for et Nytt Gulv?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Kontakt oss i dag for en gratis og uforpliktende befaring. Vi gir deg et 
            konkurransedyktig tilbud skreddersydd til dine behov.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/kontakt">
                <Clock className="mr-2 h-4 w-4" />
                Bestill Befaring
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="tel:+4712345678">Ring Oss Nå</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
