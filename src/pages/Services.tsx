import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Sparkles, Shield, Paintbrush, Droplets, Hammer, Layers } from "lucide-react";

const services = [
  {
    title: "Parkettsliping",
    description: "Profesjonell sliping av parkett som gjenoppretter gulvets opprinnelige skjønnhet. Vi fjerner riper, flekker og slitasje for å gi parketten et helt nytt utseende.",
    icon: Sparkles,
    features: [
      "Fjerning av gammel lakk og olje",
      "Utjevning av ujevnheter",
      "Støvfri sliping",
      "Passer alle typer parkett",
    ],
  },
  {
    title: "Gulvsliping",
    description: "Komplett gulvsliping for massive tregulv, plankegulv og andre typer treverk. Vi bruker profesjonelt utstyr for et perfekt resultat.",
    icon: Shield,
    features: [
      "Alle typer tregulv",
      "Dype riper og skader",
      "Profesjonelt utstyr",
      "Miljøvennlig prosess",
    ],
  },
  {
    title: "Lakkering",
    description: "Høykvalitets lakkering som gir gulvet beskyttelse og et vakkert finish. Vi tilbyr både matt, halvblank og blank lakk.",
    icon: Paintbrush,
    features: [
      "Vannbasert lakk",
      "Lang holdbarhet",
      "Rask tørketid",
      "Ulike glansgrader",
    ],
  },
  {
    title: "Oljing",
    description: "Naturlig oljing som fremhever treverkets naturlige skjønnhet og gir en varm, matt overflate. Ideell for rustikke og naturlige interiør.",
    icon: Droplets,
    features: [
      "Naturlige oljer",
      "Enkel vedlikehold",
      "Fremhever trestrukturen",
      "Miljøvennlig",
    ],
  },
  {
    title: "Reparasjoner",
    description: "Vi reparerer skadede gulv, tetter sprekker og erstatter ødelagte bord. Perfekt for eldre gulv som trenger litt ekstra oppmerksomhet.",
    icon: Hammer,
    features: [
      "Tetting av sprekker",
      "Erstatning av bord",
      "Utjevning",
      "Fjerning av flekker",
    ],
  },
  {
    title: "Beising og Farging",
    description: "Gi gulvet ditt en helt ny farge med profesjonell beising. Vi kan matche eksisterende farger eller skape et helt nytt utseende.",
    icon: Layers,
    features: [
      "Bred fargepalett",
      "Jevn påføring",
      "Fargetilpasning",
      "Før/etter rådgivning",
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 wood-gradient opacity-20" />
        <div className="container relative">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Våre Tjenester
            </h1>
            <p className="text-lg text-muted-foreground">
              Vi tilbyr et komplett utvalg av gulvtjenester for å møte alle dine behov. 
              Fra sliping til lakkering, vi har ekspertisen du trenger.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-display text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Vår Arbeidsprosess
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              En enkel og effektiv prosess fra start til slutt.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Kontakt", desc: "Ta kontakt for en gratis befaring" },
              { step: "02", title: "Befaring", desc: "Vi vurderer gulvet og gir tilbud" },
              { step: "03", title: "Arbeid", desc: "Profesjonell utførelse" },
              { step: "04", title: "Ferdig", desc: "Et nydelig nytt gulv" },
            ].map((item, index) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground font-display font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
                {index < 3 && (
                  <ArrowRight className="h-6 w-6 text-muted-foreground mx-auto mt-4 hidden md:block rotate-0 md:rotate-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Klar for å Starte?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Kontakt oss i dag for en gratis og uforpliktende befaring.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/kontakt">Få Gratis Tilbud</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
