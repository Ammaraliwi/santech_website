import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <a 
          href="#hero" 
          onClick={(e) => scrollToSection(e, "#hero")}
          className="flex items-center gap-3 relative z-10"
          data-testid="link-logo"
        >
          <div className="flex items-center gap-2">
            <div
              className="w-10 h-10 rounded-sm flex items-center justify-center font-serif font-bold text-xl text-white"
              style={{ background: "hsl(38 92% 50%)" }}
            >
              S
            </div>
            <div className="flex flex-col leading-tight">
              <span className={`font-serif font-bold text-base tracking-wider ${isScrolled ? "text-foreground" : "text-white drop-shadow-md"}`}>
                SANTECH
              </span>
              <span className={`text-xs tracking-widest font-medium ${isScrolled ? "text-muted-foreground" : "text-white/70 drop-shadow-sm"}`}>
                TRADING CO.
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-accent ${
                isScrolled ? "text-foreground" : "text-white drop-shadow-md hover:text-accent"
              }`}
              data-testid={`link-nav-${item.label.toLowerCase()}`}
            >
              {item.label}
            </a>
          ))}
          <Button 
            onClick={(e) => {
              // @ts-ignore
              scrollToSection(e, "#contact");
            }}
            variant={isScrolled ? "default" : "outline"} 
            className={!isScrolled ? "bg-white/10 text-white border-white/30 hover:bg-white hover:text-primary backdrop-blur-sm" : ""}
            data-testid="button-nav-contact"
          >
            Get a Quote
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden relative z-10 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? "text-foreground" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-foreground" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden fixed inset-0 bg-background z-0 flex flex-col pt-24 px-6 transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col gap-6 items-center text-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-2xl font-serif text-foreground hover:text-accent transition-colors"
              data-testid={`link-mobile-nav-${item.label.toLowerCase()}`}
            >
              {item.label}
            </a>
          ))}
          <Button 
            className="mt-6 w-full max-w-xs" 
            size="lg"
            onClick={(e) => {
              // @ts-ignore
              scrollToSection(e, "#contact");
            }}
          >
            Get a Quote
          </Button>
        </div>
      </div>
    </header>
  );
}
