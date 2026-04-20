import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Menu, X, ArrowUpRight, Phone, Mail, MessageCircle, Facebook, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { settings } from "@/lib/settings";
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

  // Lock body scroll when mobile menu is open (simple overflow approach)
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
    };
  }, [mobileMenuOpen]);

  // Close menu on Escape
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileMenuOpen]);

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
            src={settings.brand.logo}
            alt={settings.brand.logo_alt}
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

      {/* Mobile Nav — simple, portaled to body */}
      <MobileMenuPortal>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 z-[60] bg-background overflow-y-auto overflow-x-hidden overscroll-contain"
            aria-hidden={!mobileMenuOpen}
          >
            {/* Subtle accent decoration at top */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

            {/* Close button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label={t("nav.menu.close")}
              className="absolute top-5 end-5 w-11 h-11 rounded-full flex items-center justify-center text-foreground/70 hover:text-accent hover:bg-foreground/5 transition-colors"
              data-testid="button-mobile-menu-close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content */}
            <div className="relative min-h-full flex flex-col pt-24 pb-10 px-6">
              <div className="flex flex-col gap-7 items-center text-center mt-4">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.key}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.3 }}
                    className="text-2xl font-serif text-foreground hover:text-accent transition-colors"
                    data-testid={`link-mobile-nav-${item.key}`}
                  >
                    {t(item.key)}
                  </motion.a>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + navItems.length * 0.04 + 0.05, duration: 0.3 }}
                  className="w-full max-w-xs mt-4"
                >
                  <Button
                    className="w-full"
                    size="lg"
                    onClick={(e) => {
                      // @ts-ignore
                      scrollToSection(e, "#contact");
                    }}
                  >
                    {t("nav.cta")}
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </MobileMenuPortal>
    </header>
  );
}

function MobileMenuPortal({ children }: { children: React.ReactNode }) {
  if (typeof document === "undefined") return null;
  return createPortal(children, document.body);
}
