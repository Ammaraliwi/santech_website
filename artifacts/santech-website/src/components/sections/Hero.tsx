import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { settings } from "@/lib/settings";

export default function Hero() {
  const { t, dir } = useI18n();

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 z-10 ${dir === "rtl" ? "bg-gradient-to-l from-primary/90 via-primary/70 to-primary/30" : "bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30"}`} />
        <img
          src={settings.images.hero_background}
          alt="Premium Industrial Kitchen Showroom"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-6 pt-20">
        <div className="max-w-3xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent border border-accent/30 text-sm font-medium tracking-wider uppercase mb-6 backdrop-blur-sm">
              {t("hero.badge")}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
              {t("hero.title.1")} <span className="text-accent italic">{t("hero.title.2")}</span> {t("hero.title.3")}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <Button size="lg" className="bg-accent text-primary hover:bg-accent/90 font-semibold tracking-wide" onClick={scrollToContact} data-testid="button-hero-quote">
              {t("hero.cta.primary")}
              <ArrowRight className={`w-4 h-4 ${dir === "rtl" ? "mr-2 rotate-180" : "ml-2"}`} />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm" onClick={scrollToAbout} data-testid="button-hero-discover">
              {t("hero.cta.secondary")}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
        onClick={scrollToAbout}
      >
        <span className="text-white/60 text-xs tracking-widest uppercase font-medium">{t("hero.scroll")}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
