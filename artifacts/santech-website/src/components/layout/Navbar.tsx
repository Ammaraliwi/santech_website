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

      {/* Mobile Nav — Creative Edition (portaled to body to escape header stacking context) */}
      <MobileMenuPortal>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-[60] overflow-y-auto overflow-x-hidden overscroll-contain"
            aria-hidden={!mobileMenuOpen}
          >
            {/* Layered background — primary gradient + accent grid + radial glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#0a1f3a]" />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="absolute -top-40 -end-40 w-96 h-96 rounded-full bg-accent/15 blur-[100px]" />
            <div className="absolute -bottom-40 -start-40 w-96 h-96 rounded-full bg-accent/10 blur-[120px]" />

            {/* Content */}
            <div className="relative min-h-full flex flex-col pt-24 pb-10 px-6">
              {/* Eyebrow tagline */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="h-px w-8 bg-accent" />
                <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-accent">
                  {t("brand.tagline")}
                </span>
              </motion.div>

              {/* Nav list with stagger */}
              <nav className="flex flex-col">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.key}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: 0.2 + i * 0.06, duration: 0.4, ease: "easeOut" }}
                    className="group relative flex items-center justify-between py-4 border-b border-white/10 hover:border-accent/60 transition-colors"
                    data-testid={`link-mobile-nav-${item.key}`}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="text-[10px] font-semibold tracking-[0.2em] text-accent/80 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-serif text-2xl font-medium text-white group-hover:text-accent transition-colors">
                        {t(item.key)}
                      </span>
                    </div>
                    <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:bg-accent group-hover:border-accent group-hover:text-primary group-hover:rotate-45 transition-all duration-300">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </motion.a>
                ))}
              </nav>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + navItems.length * 0.06 + 0.1, duration: 0.4 }}
                className="mt-8"
              >
                <Button
                  size="lg"
                  className="w-full bg-accent text-primary hover:bg-accent/90 font-semibold tracking-wide shadow-lg shadow-accent/20 h-12"
                  onClick={(e) => {
                    // @ts-ignore
                    scrollToSection(e, "#contact");
                  }}
                >
                  {t("nav.cta")}
                  <ArrowUpRight className="w-4 h-4 ms-1 rtl:rotate-[270deg]" />
                </Button>
              </motion.div>

              {/* Quick contact strip */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + navItems.length * 0.06 + 0.2, duration: 0.4 }}
                className="mt-8 grid grid-cols-3 gap-2"
              >
                {settings.contact.whatsapp_number && (
                  <a
                    href={`https://wa.me/${settings.contact.whatsapp_number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1.5 py-3 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/40 transition-all"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 text-accent" />
                    <span className="text-[10px] tracking-wider uppercase text-white/70">WhatsApp</span>
                  </a>
                )}
                {settings.contact.phones?.[0]?.link && (
                  <a
                    href={`tel:${settings.contact.phones[0].link}`}
                    className="flex flex-col items-center gap-1.5 py-3 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/40 transition-all"
                    aria-label="Call"
                  >
                    <Phone className="w-4 h-4 text-accent" />
                    <span className="text-[10px] tracking-wider uppercase text-white/70">{t("nav.menu.call") || "Call"}</span>
                  </a>
                )}
                {settings.contact.emails?.[0]?.address && (
                  <a
                    href={`mailto:${settings.contact.emails[0].address}`}
                    className="flex flex-col items-center gap-1.5 py-3 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/40 transition-all"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4 text-accent" />
                    <span className="text-[10px] tracking-wider uppercase text-white/70">Email</span>
                  </a>
                )}
              </motion.div>

              {/* Footer signature */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + navItems.length * 0.06 + 0.3, duration: 0.4 }}
                className="mt-auto pt-8"
              >
                <div className="flex items-center justify-between text-white/50">
                  <div className="flex items-center gap-2 text-[11px]">
                    <MapPin className="w-3 h-3 text-accent" />
                    <span>Damascus · دمشق</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {settings.social?.facebook && (
                      <a
                        href={settings.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-full bg-white/5 hover:bg-accent hover:text-primary flex items-center justify-center transition-all"
                        aria-label="Facebook"
                      >
                        <Facebook className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="mt-3 text-[10px] tracking-[0.2em] uppercase text-white/30 text-center">
                  © {new Date().getFullYear()} {t("brand.name")}
                </div>
              </motion.div>
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
