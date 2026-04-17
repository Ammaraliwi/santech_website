import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import LangToggle from "@/components/LangToggle";

const navItems = [
  { key: "nav.home", href: "#hero" },
  { key: "nav.about", href: "#about" },
  { key: "industries.eyebrow", href: "#industries" },
  { key: "nav.services", href: "#services" },
  { key: "projects.eyebrow", href: "#projects" },
  { key: "nav.partners", href: "#partners" },
  { key: "nav.contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
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
          <img
            src={`${import.meta.env.BASE_URL}brand/santech-logo.png`}
            alt="Santech Trading Co."
            className={`h-14 w-14 rounded-sm object-cover transition-all ${isScrolled ? "" : "ring-1 ring-white/20"}`}
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className={`font-serif font-bold text-base tracking-wider ${isScrolled ? "text-foreground" : "text-white drop-shadow-md"}`}>
              {t("brand.name")}
            </span>
            <span className={`text-[10px] tracking-widest font-medium ${isScrolled ? "text-muted-foreground" : "text-white/70 drop-shadow-sm"}`}>
              {t("brand.tagline")}
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-accent ${
                isScrolled ? "text-foreground" : "text-white drop-shadow-md hover:text-accent"
              }`}
              data-testid={`link-nav-${item.key}`}
            >
              {t(item.key)}
            </a>
          ))}
          <LangToggle inverted={!isScrolled} />
          <Button
            onClick={(e) => {
              // @ts-ignore
              scrollToSection(e, "#contact");
            }}
            variant={isScrolled ? "default" : "outline"}
            className={!isScrolled ? "bg-white/10 text-white border-white/30 hover:bg-white hover:text-primary backdrop-blur-sm" : ""}
            data-testid="button-nav-contact"
          >
            {t("nav.cta")}
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-2 relative z-10">
          <LangToggle inverted={!isScrolled && !mobileMenuOpen} testId="button-lang-toggle-mobile" />
          <button
            type="button"
            className="p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
            aria-label={mobileMenuOpen ? t("nav.menu.close") : t("nav.menu.open")}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
          >
            {mobileMenuOpen ? (
              <X className={isScrolled ? "text-foreground" : "text-white"} aria-hidden="true" />
            ) : (
              <Menu className={isScrolled ? "text-foreground" : "text-white"} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        id="mobile-nav-menu"
        className={`lg:hidden fixed inset-0 bg-background z-0 flex flex-col pt-24 px-6 transition-transform duration-300 ease-in-out overflow-y-auto ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex flex-col gap-6 items-center text-center">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-2xl font-serif text-foreground hover:text-accent transition-colors"
              data-testid={`link-mobile-nav-${item.key}`}
            >
              {t(item.key)}
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
            {t("nav.cta")}
          </Button>
        </div>
      </div>
    </header>
  );
}
