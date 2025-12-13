import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    value: "+47 123 45 678",
    href: "tel:+4712345678",
  },
  {
    icon: Mail,
    title: "E-post",
    value: "kontakt@bestgulvsliper.no",
    href: "mailto:kontakt@bestgulvsliper.no",
  },
  {
    icon: MapPin,
    title: "Adresse",
    value: "Oslo, Norge",
    href: null,
  },
  {
    icon: Clock,
    title: "Åpningstider",
    value: "Man-Fre: 08:00-16:00",
    href: null,
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Melding sendt!",
      description: "Vi tar kontakt med deg så snart som mulig.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 wood-gradient opacity-20" />
        <div className="container relative">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Kontakt Oss
            </h1>
            <p className="text-lg text-muted-foreground">
              Vi er her for å hjelpe deg. Ta kontakt for en gratis og uforpliktende 
              befaring, eller send oss en melding med dine spørsmål.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Send Oss en Melding
              </h2>
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Navn *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Ditt navn"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefon</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+47 000 00 000"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">E-post *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="din@epost.no"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Melding *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Fortell oss om ditt prosjekt..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        "Sender..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Melding
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Kontaktinformasjon
              </h2>
              <div className="space-y-4 mb-8">
                {contactInfo.map((item) => (
                  <Card key={item.title}>
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.title}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-medium text-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium text-foreground">{item.value}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map placeholder */}
              <Card>
                <CardContent className="p-0">
                  <div className="aspect-video rounded-lg wood-gradient opacity-50 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-wood-dark mx-auto mb-2" />
                      <p className="text-wood-dark font-medium">Oslo, Norge</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ofte Stilte Spørsmål
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Hvor lang tid tar gulvsliping?",
                a: "En vanlig gulvsliping tar vanligvis 1-2 dager, avhengig av størrelsen på gulvet og nødvendig behandling.",
              },
              {
                q: "Er det mye støv?",
                a: "Vi bruker moderne støvfritt utstyr som minimerer støvproduksjonen betydelig.",
              },
              {
                q: "Hva koster gulvsliping?",
                a: "Prisen avhenger av gulvets tilstand og størrelse. Kontakt oss for et gratis tilbud.",
              },
              {
                q: "Når kan jeg gå på gulvet igjen?",
                a: "Normalt kan du gå forsiktig på gulvet etter 24 timer, men full belastning anbefales etter 48-72 timer.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-display font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
