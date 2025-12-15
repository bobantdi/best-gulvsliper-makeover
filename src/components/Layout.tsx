import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Hjem", path: "/" },
  { name: "Tjenester", path: "/tjenester" },
  { name: "Om Oss", path: "/om-oss" },
  { name: "Blogg", path: "/blogg" },
  { name: "Kontakt", path: "/kontakt" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="tel:+4712345678" className="flex items-center gap-1 hover:opacity-80">
              <Phone className="h-3 w-3" />
              <span className="hidden sm:inline">+47 123 45 678</span>
            </a>
            <a href="mailto:kontakt@bestgulvsliper.no" className="flex items-center gap-1 hover:opacity-80">
              <Mail className="h-3 w-3" />
              <span className="hidden sm:inline">kontakt@bestgulvsliper.no</span>
            </a>
          </div>
          <span className="text-xs opacity-80">Profesjonell gulvsliping i hele Norge</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xl">S</span>
            </div>
            <span className="font-display text-xl font-bold text-foreground">Seagull gulvsliper</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild>
              <Link to="/kontakt">Få Tilbud</Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-border bg-background">
            <div className="container py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 text-sm font-medium ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild className="mt-2">
                <Link to="/kontakt" onClick={() => setMobileMenuOpen(false)}>
                  Få Tilbud
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-wood-dark text-primary-foreground">
        <div className="container py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
               <div className="flex items-center gap-3 mb-4">
                 <div className="w-10 h-10 rounded-full bg-primary-foreground flex items-center justify-center">
                   <span className="text-wood-dark font-display font-bold text-xl">S</span>
                 </div>
                 <span className="font-display text-xl font-bold">Seagull gulvsliper</span>
               </div>
              <p className="text-sm opacity-80">
                Profesjonell gulvsliping og behandling av tregulv i hele Norge.
              </p>
            </div>

            <div>
              <h4 className="font-display font-semibold mb-4">Tjenester</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Parkettsliping</li>
                <li>Gulvsliping</li>
                <li>Lakkering</li>
                <li>Oljing</li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold mb-4">Lenker</h4>
              <ul className="space-y-2 text-sm opacity-80">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:opacity-100">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+47 123 45 678</li>
                <li>kontakt@bestgulvsliper.no</li>
                <li>Oslo, Norge</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-60">
            © {new Date().getFullYear()} Seagull Gulvsliper. Alle rettigheter reservert.
          </div>
        </div>
      </footer>
    </div>
  );
}
