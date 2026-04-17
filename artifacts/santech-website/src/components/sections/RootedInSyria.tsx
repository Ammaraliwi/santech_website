import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Building2, Landmark } from "lucide-react";
import { useI18n } from "@/lib/i18n";

/* -------- Inline SVG: Damascus skyline silhouette -------- */
function DamascusSkyline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1600 240"
      preserveAspectRatio="xMidYEnd slice"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g fill="currentColor">
        {/* Far-left palm trees */}
        <g transform="translate(60,160)">
          <rect x="-2" y="0" width="4" height="80" />
          <path d="M0,5 C-25,-5 -35,5 -40,15 C-30,8 -15,8 0,12 Z" />
          <path d="M0,5 C25,-5 35,5 40,15 C30,8 15,8 0,12 Z" />
          <path d="M0,5 C-10,-25 -5,-35 5,-40 C5,-25 5,-10 2,5 Z" />
          <path d="M0,5 C10,-22 18,-25 25,-22 C15,-15 8,-8 2,5 Z" />
        </g>

        {/* Citadel walls — Damascus citadel crenellations */}
        <g transform="translate(140,140)">
          <path d="M0,100 L0,40 L20,40 L20,20 L40,20 L40,40 L60,40 L60,20 L80,20 L80,40 L100,40 L100,20 L120,20 L120,40 L140,40 L140,100 Z" />
          {/* Tower */}
          <rect x="60" y="-20" width="20" height="40" />
          <path d="M55,-20 L60,-30 L65,-20 Z" />
          <path d="M75,-20 L80,-30 L85,-20 Z" />
        </g>

        {/* Small dome cluster (old city) */}
        <g transform="translate(340,160)">
          <ellipse cx="0" cy="60" rx="40" ry="30" />
          <rect x="-40" y="60" width="80" height="20" />
          <ellipse cx="-50" cy="70" rx="20" ry="15" />
          <ellipse cx="50" cy="70" rx="20" ry="15" />
          <rect x="-2" y="20" width="4" height="20" />
          <circle cx="0" cy="18" r="5" />
        </g>

        {/* UMAYYAD MOSQUE — centerpiece */}
        <g transform="translate(680,40)">
          {/* Left minaret (al-Gharbiyya) */}
          <rect x="-10" y="20" width="18" height="180" />
          <rect x="-14" y="60" width="26" height="6" />
          <rect x="-14" y="100" width="26" height="6" />
          <path d="M-10,20 L-1,-10 L8,20 Z" />
          <rect x="-3" y="-25" width="2" height="15" />
          <circle cx="-2" cy="-28" r="2.5" />

          {/* Main building / prayer hall */}
          <rect x="40" y="120" width="320" height="80" />
          {/* Side small domes */}
          <ellipse cx="80" cy="120" rx="22" ry="16" />
          <ellipse cx="320" cy="120" rx="22" ry="16" />
          {/* Central great Dome of the Eagle (Qubbat an-Nasr) */}
          <ellipse cx="200" cy="105" rx="70" ry="55" />
          <rect x="130" y="105" width="140" height="20" />
          <rect x="197" y="40" width="6" height="20" />
          <circle cx="200" cy="36" r="6" />
          <path d="M200,30 L200,18" stroke="currentColor" strokeWidth="1.5" fill="none" />
          {/* Crescent on top */}
          <path d="M196,15 a4,4 0 1,0 6,4" fill="none" stroke="currentColor" strokeWidth="1.5" />

          {/* Right minaret (Jesus minaret — taller/octagonal feel) */}
          <rect x="380" y="0" width="18" height="200" />
          <rect x="376" y="40" width="26" height="6" />
          <rect x="376" y="80" width="26" height="6" />
          <rect x="376" y="120" width="26" height="6" />
          <path d="M380,0 L389,-30 L398,0 Z" />
          <rect x="386" y="-45" width="2" height="15" />
          <circle cx="387" cy="-48" r="2.5" />

          {/* Far right minaret (al-Qaitbay) */}
          <rect x="430" y="40" width="14" height="160" />
          <rect x="426" y="90" width="22" height="6" />
          <path d="M430,40 L437,15 L444,40 Z" />
          <rect x="436" y="3" width="2" height="12" />
          <circle cx="437" cy="0" r="2" />
        </g>

        {/* More old-city domes */}
        <g transform="translate(1180,160)">
          <rect x="-30" y="40" width="60" height="40" />
          <ellipse cx="0" cy="40" rx="35" ry="28" />
          <rect x="-2" y="0" width="4" height="15" />
          <circle cx="0" cy="-2" r="4" />
          <ellipse cx="-50" cy="55" rx="15" ry="12" />
          <ellipse cx="50" cy="55" rx="15" ry="12" />
        </g>

        {/* Palmyra colonnade silhouette — far right */}
        <g transform="translate(1340,140)">
          <rect x="-10" y="-10" width="200" height="6" />
          {[0, 30, 60, 90, 120, 150, 180].map((x) => (
            <g key={x}>
              <rect x={x - 4} y="-4" width="13" height="6" />
              <rect x={x - 1} y="-4" width="7" height="100" />
              <rect x={x - 4} y="92" width="13" height="6" />
            </g>
          ))}
        </g>

        {/* Far-right palm tree */}
        <g transform="translate(1560,160)">
          <rect x="-2" y="0" width="4" height="80" />
          <path d="M0,5 C-25,-5 -35,5 -40,15 C-30,8 -15,8 0,12 Z" />
          <path d="M0,5 C25,-5 35,5 40,15 C30,8 15,8 0,12 Z" />
          <path d="M0,5 C-10,-25 -5,-35 5,-40 C5,-25 5,-10 2,5 Z" />
        </g>

        {/* Ground line */}
        <rect x="0" y="200" width="1600" height="40" />
      </g>
    </svg>
  );
}

/* -------- Landmark icon SVGs (small) -------- */
function MosqueIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="currentColor">
      <rect x="6" y="28" width="36" height="14" />
      <ellipse cx="24" cy="28" rx="12" ry="10" />
      <rect x="22" y="14" width="4" height="6" />
      <circle cx="24" cy="12" r="2" />
      <rect x="2" y="22" width="4" height="20" />
      <path d="M2,22 L4,17 L6,22 Z" />
      <rect x="42" y="22" width="4" height="20" />
      <path d="M42,22 L44,17 L46,22 Z" />
    </svg>
  );
}

function CitadelIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="currentColor">
      <path d="M4,42 L4,18 L10,18 L10,12 L16,12 L16,18 L22,18 L22,12 L28,12 L28,18 L34,18 L34,12 L40,12 L40,18 L44,18 L44,42 Z" />
      <rect x="20" y="28" width="8" height="14" fill="hsl(var(--background))" />
    </svg>
  );
}

function ColumnsIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="currentColor">
      <rect x="2" y="6" width="44" height="4" />
      <rect x="2" y="40" width="44" height="4" />
      <rect x="6" y="10" width="6" height="30" />
      <rect x="18" y="10" width="6" height="30" />
      <rect x="30" y="10" width="6" height="30" />
      <rect x="40" y="10" width="4" height="30" />
    </svg>
  );
}

function CastleIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="currentColor">
      <path d="M4,44 L4,20 L10,20 L10,12 L14,12 L14,20 L20,20 L20,8 L28,8 L28,20 L34,20 L34,12 L38,12 L38,20 L44,20 L44,44 Z" />
      <rect x="22" y="28" width="4" height="16" fill="hsl(var(--background))" />
    </svg>
  );
}

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

  const landmarks = [
    { Icon: MosqueIcon, key: "syria.landmarks.umayyad" },
    { Icon: CitadelIcon, key: "syria.landmarks.citadel" },
    { Icon: ColumnsIcon, key: "syria.landmarks.palmyra" },
    { Icon: CastleIcon, key: "syria.landmarks.krak" },
    { Icon: CitadelIcon, key: "syria.landmarks.aleppo" },
  ];

  // Islamic 8-point star pattern as a CSS background-image data URL
  const islamicPattern = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><g fill='none' stroke='%231F5A85' stroke-width='0.8' opacity='1'><rect x='20' y='20' width='40' height='40'/><rect x='20' y='20' width='40' height='40' transform='rotate(45 40 40)'/><circle cx='40' cy='40' r='12'/></g></svg>")`;

  return (
    <section
      id="syria"
      ref={ref}
      className="relative pt-28 pb-0 overflow-hidden bg-gradient-to-b from-secondary/30 via-background to-background"
      data-testid="section-syria"
    >
      {/* Islamic 8-point star pattern background */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: islamicPattern,
          backgroundSize: "80px 80px",
        }}
      />
      {/* Soft glows */}
      <div className="absolute top-1/3 -start-20 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 -end-20 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Damascus HQ — featured card with skyline watermark */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative bg-primary text-primary-foreground p-10 overflow-hidden group min-h-[320px]"
            data-testid="card-syria-hq"
          >
            <span className="absolute top-0 start-0 h-[3px] w-full bg-accent" />
            {/* Skyline watermark inside HQ card */}
            <div className="absolute bottom-0 left-0 right-0 h-32 text-white/[0.08] pointer-events-none">
              <DamascusSkyline className="w-full h-full" />
            </div>
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

          {/* Heritage card — with landmark icon strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative bg-background border border-border p-10 overflow-hidden group hover:border-accent/40 transition-colors flex flex-col"
            data-testid="card-syria-heritage"
          >
            <span className="absolute top-0 start-0 h-[3px] w-12 bg-accent transition-all duration-500 group-hover:w-full" />
            <Landmark
              className="absolute -bottom-8 -end-8 w-48 h-48 text-accent/[0.06]"
              strokeWidth={1}
            />
            <div className="relative flex-1">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-4">
                <Landmark className="w-4 h-4" />
                {t("syria.heritage.label")}
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 leading-tight">
                {t("syria.heritage.title")}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                {t("syria.heritage.desc")}
              </p>
            </div>
            {/* Landmark icons strip */}
            <div className="relative pt-6 border-t border-border">
              <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-4">
                {t("syria.landmarks.label")}
              </div>
              <div className="flex items-end justify-between gap-4">
                {landmarks.map(({ Icon, key }, i) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                    className="flex flex-col items-center gap-2 group/landmark cursor-default flex-1"
                    data-testid={`landmark-${i}`}
                    title={t(key)}
                  >
                    <Icon className="w-9 h-9 text-primary/60 group-hover/landmark:text-accent transition-colors" />
                    <span className="text-[10px] text-center text-muted-foreground/80 font-medium leading-tight">
                      {t(key)}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Coverage / Cities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-background/80 backdrop-blur-sm border border-border p-8 md:p-10 relative overflow-hidden mb-20"
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

      {/* Full-width Damascus skyline silhouette at the section bottom */}
      <div className="relative w-full h-32 md:h-40 text-primary/15 pointer-events-none">
        <DamascusSkyline className="absolute inset-0 w-full h-full" />
      </div>
    </section>
  );
}
