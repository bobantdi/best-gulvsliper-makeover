import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Heart, CheckCircle } from "lucide-react";

const stats = [
  { value: "15+", label: "Års Erfaring", icon: Clock },
  { value: "1000+", label: "Fornøyde Kunder", icon: Users },
  { value: "5000+", label: "Fullførte Prosjekter", icon: Award },
  { value: "100%", label: "Kvalitetsgaranti", icon: Heart },
];

const values = [
  {
    title: "Kvalitet",
    description: "Vi leverer alltid førsteklasses arbeid og bruker kun de beste produktene.",
  },
  {
    title: "Ærlighet",
    description: "Vi er transparente i vår kommunikasjon og gir deg alltid ærlige råd.",
  },
  {
    title: "Pålitelighet",
    description: "Vi holder det vi lover og leverer til avtalt tid og pris.",
  },
  {
    title: "Kundefokus",
    description: "Din tilfredshet er vår høyeste prioritet i alt vi gjør.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 wood-gradient opacity-20" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Om Seagull Gulvsliper
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                I over 15 år har Seagull Gulvsliper vært ledende innen profesjonell 
                gulvsliping i Norge. Vi kombinerer tradisjonelt håndverk med moderne 
                teknologi for å gi deg det beste resultatet.
              </p>
              <p className="text-muted-foreground">
                Vårt team av erfarne håndverkere har slipet og behandlet tusenvis av 
                gulv for fornøyde kunder over hele landet. Vi er stolte av vårt arbeid 
                og garanterer alltid høyeste kvalitet.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl wood-gradient opacity-80" />
              <div className="absolute -bottom-6 -left-6 bg-background rounded-xl p-6 shadow-xl">
                <p className="font-display text-4xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">års erfaring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="font-display text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Vår Historie
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Seagull Gulvsliper ble grunnlagt med en enkel visjon: å levere 
                profesjonell gulvsliping av høyeste kvalitet til rimelige priser. 
                Det som startet som et lite familieforetak har vokst til å bli en 
                av Norges mest pålitelige gulvslipere.
              </p>
              <p>
                Gjennom årene har vi investert i det beste utstyret og kontinuerlig 
                opplæring av våre ansatte. Vi holder oss oppdatert på de nyeste 
                teknikkene og produktene for å sikre at våre kunder alltid får 
                det beste resultatet.
              </p>
              <p>
                I dag er vi stolte av å betjene kunder over hele Norge, fra 
                privatboliger til store næringsbygg. Vår dedikasjon til kvalitet 
                og kundeservice har gjort oss til førstevalget for mange når det 
                kommer til gulvsliping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Våre Verdier
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Disse verdiene styrer alt vi gjør og hvordan vi behandler våre kunder.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-background rounded-xl p-6 shadow-sm">
                <CheckCircle className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            La Oss Hjelpe Deg
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Kontakt oss i dag for å diskutere ditt prosjekt.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/kontakt">Ta Kontakt</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
