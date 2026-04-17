import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Building2, Landmark } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function RootedInSyria() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useI18n();

  const cities = [
    "syria.cities.aleppo",
    "syria.cities.homs",
    "syria.cities.latakia",
    "syria.cities.tartus",
    "syria.cities.hama",
    "syria.cities.daraa",
    "syria.cities.deirezzor",
    "syria.cities.suwayda",
    "syria.cities.raqqa",
    "syria.cities.idlib",
    "syria.cities.hasakah",
    "syria.cities.qamishli",
    "syria.cities.quneitra",
  ];

  return (
    <section
      id="syria"
      ref={ref}
      className="relative py-28 overflow-hidden bg-gradient-to-b from-secondary/30 via-background to-background"
      data-testid="section-syria"
    >
      {/* Decorative arabesque/geometric background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Soft accent glow */}
      <div className="absolute top-1/3 -start-20 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -end-20 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 border-b border-accent pb-1"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-accent" />
            {t("syria.eyebrow")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-[1.05] mb-6"
          >
            {t("syria.title.1")}{" "}
            <span className="text-primary italic">{t("syria.title.2")}</span>
            <br />
            {t("syria.title.3")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-base md:text-lg leading-relaxed"
          >
            {t("syria.intro")}
          </motion.p>
        </div>

        {/* Two feature cards: HQ + Heritage */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Damascus HQ — featured card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative bg-primary text-primary-foreground p-10 overflow-hidden group"
            data-testid="card-syria-hq"
          >
            <span className="absolute top-0 start-0 h-[3px] w-full bg-accent" />
            {/* Watermark */}
            <Building2
              className="absolute -bottom-8 -end-8 w-48 h-48 text-white/[0.05]"
              strokeWidth={1}
            />
            <div className="relative">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-4">
                <MapPin className="w-4 h-4" />
                {t("syria.hq.label")}
              </div>
              <h3 className="text-4xl md:text-5xl font-serif font-bold mb-3">
                {t("syria.hq.city")}
              </h3>
              <p className="text-primary-foreground/80 text-base leading-relaxed mb-6 max-w-sm">
                {t("syria.hq.address")}
              </p>
              <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                <div className="text-3xl font-serif font-bold text-accent leading-none">
                  33.5°<span className="text-xl">N</span>
                </div>
                <div className="w-px h-8 bg-white/20" />
                <div className="text-3xl font-serif font-bold text-accent leading-none">
                  36.3°<span className="text-xl">E</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Heritage card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative bg-background border border-border p-10 overflow-hidden group hover:border-accent/40 transition-colors"
            data-testid="card-syria-heritage"
          >
            <span className="absolute top-0 start-0 h-[3px] w-12 bg-accent transition-all duration-500 group-hover:w-full" />
            <Landmark
              className="absolute -bottom-8 -end-8 w-48 h-48 text-accent/[0.06]"
              strokeWidth={1}
            />
            <div className="relative">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-4">
                <Landmark className="w-4 h-4" />
                {t("syria.heritage.label")}
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 leading-tight">
                {t("syria.heritage.title")}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {t("syria.heritage.desc")}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Coverage / Cities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-background border border-border p-8 md:p-10 relative overflow-hidden"
          data-testid="card-syria-coverage"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-3">
                <MapPin className="w-4 h-4" />
                14
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3 leading-tight">
                {t("syria.coverage.title")}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {t("syria.coverage.desc")}
              </p>
            </div>

            <div className="md:col-span-8">
              <div className="flex flex-wrap gap-2">
                {/* Damascus chip — featured first */}
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-sm"
                  data-testid="chip-city-damascus"
                >
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  {t("syria.hq.city")}
                </motion.span>
                {cities.map((cityKey, i) => (
                  <motion.span
                    key={cityKey}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.35, delay: 0.65 + i * 0.04 }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-secondary/50 hover:bg-accent/10 text-foreground text-sm font-medium rounded-sm border border-border hover:border-accent/40 transition-colors cursor-default"
                    data-testid={`chip-city-${i}`}
                  >
                    <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                    {t(cityKey)}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
