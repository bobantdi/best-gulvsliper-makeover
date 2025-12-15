import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

import blogImage1 from "@/assets/blog-floor-sanding-1.jpg";
import blogImage2 from "@/assets/blog-floor-sanding-2.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Hvordan Vedlikeholde Ditt Nyslipt Gulv",
    excerpt:
      "Lær de beste tipsene for å holde gulvet ditt vakkert i mange år fremover. Fra daglig rengjøring til årlig vedlikehold.",
    category: "Vedlikehold",
    date: "15. desember 2024",
    readTime: "5 min",
    author: "Erik Hansen",
    image: blogImage1,
    imageAlt: "Vedlikehold av nyslipt tregulv",
  },
  {
    id: 2,
    title: "Lakk vs. Olje: Hva Er Best for Ditt Gulv?",
    excerpt:
      "En grundig sammenligning av lakk og olje som overflatebehandling. Vi hjelper deg å velge riktig for ditt hjem.",
    category: "Guider",
    date: "10. desember 2024",
    readTime: "8 min",
    author: "Maria Olsen",
    image: blogImage2,
    imageAlt: "Parkett og gulvbehandling med lakk eller olje",
  },
  {
    id: 3,
    title: "Tegn På at Gulvet Ditt Trenger Sliping",
    excerpt: "Er du usikker på om gulvet ditt trenger sliping? Her er de vanligste tegnene du bør se etter.",
    category: "Tips",
    date: "5. desember 2024",
    readTime: "4 min",
    author: "Erik Hansen",
  },
  {
    id: 4,
    title: "Støvfri Gulvsliping: Hvordan Det Fungerer",
    excerpt: "Moderne gulvsliping trenger ikke være støvete. Lær om vår støvfrie slipeprosess og fordelene.",
    category: "Prosess",
    date: "1. desember 2024",
    readTime: "6 min",
    author: "Jan Nordmann",
  },
  {
    id: 5,
    title: "Historien Om Tregulv i Norge",
    excerpt: "Fra gamle stavkirker til moderne hjem - en reise gjennom tregulvets historie i Norge.",
    category: "Historikk",
    date: "25. november 2024",
    readTime: "10 min",
    author: "Maria Olsen",
  },
  {
    id: 6,
    title: "Miljøvennlig Gulvbehandling",
    excerpt: "Vi bruker miljøvennlige produkter for å beskytte både din helse og miljøet. Les mer om våre valg.",
    category: "Miljø",
    date: "20. november 2024",
    readTime: "5 min",
    author: "Erik Hansen",
  },
];

const categories = ["Alle", "Vedlikehold", "Guider", "Tips", "Prosess", "Historikk", "Miljø"];

export default function Blog() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 wood-gradient opacity-20" />
        <div className="container relative">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Blogg & Tips
            </h1>
            <p className="text-lg text-muted-foreground">
              Nyttige artikler, tips og råd om gulvsliping, vedlikehold og alt 
              relatert til tregulv. Hold deg oppdatert med våre eksperter.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Alle" ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card
                key={post.id}
                className="group overflow-hidden hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="aspect-[16/10] relative overflow-hidden">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.imageAlt ?? post.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 wood-gradient opacity-60" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    {post.category}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      {post.author}
                    </span>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      Les Mer
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Last Inn Flere Artikler
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Hold Deg Oppdatert
            </h2>
            <p className="text-muted-foreground mb-8">
              Meld deg på vårt nyhetsbrev for å motta tips og nyheter direkte i innboksen.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Din e-postadresse"
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button type="submit">Meld På</Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
