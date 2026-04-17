import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Truck, Cake, Utensils, MapPin, Calendar, Maximize2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const projects = [
  { Icon: Building2, key: 1, accent: true },
  { Icon: Truck, key: 2 },
  { Icon: Cake, key: 3 },
  { Icon: Utensils, key: 4 },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useI18n();

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-28 bg-background overflow-hidden"
      data-testid="section-projects"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 border-b border-accent pb-1"
          >
            {t("projects.eyebrow")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-[1.05] mb-6"
          >
            {t("projects.title.1")}{" "}
            <span className="text-primary italic">{t("projects.title.2")}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-base md:text-lg leading-relaxed"
          >
            {t("projects.intro")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {projects.map(({ Icon, key, accent }, i) => (
            <motion.article
              key={key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative p-10 group overflow-hidden cursor-default transition-all duration-500 ${
                accent
                  ? "bg-primary text-primary-foreground"
                  : "bg-background hover:bg-secondary/40"
              }`}
              data-testid={`project-${key}`}
            >
              <span
                className={`absolute top-0 start-0 h-[3px] bg-accent transition-all duration-500 ${
                  accent ? "w-full" : "w-12 group-hover:w-full"
                }`}
              />
              <div className="absolute -bottom-10 -end-10 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity">
                <Icon className="w-56 h-56" strokeWidth={1} />
              </div>

              <div className="relative">
                <div className="flex items-start justify-between mb-6 gap-4">
                  <div className={`text-xs font-semibold tracking-[0.2em] uppercase ${accent ? "text-accent" : "text-accent"}`}>
                    {t(`projects.${key}.type`)}
                  </div>
                  <div className={`w-12 h-12 rounded-sm flex items-center justify-center shrink-0 ${accent ? "bg-white/10" : "bg-accent/10"}`}>
                    <Icon className={`w-6 h-6 ${accent ? "text-accent" : "text-accent"}`} strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className={`text-2xl md:text-3xl font-serif font-bold mb-6 leading-tight ${accent ? "" : "text-foreground"}`}>
                  {t(`projects.${key}.title`)}
                </h3>

                <p className={`text-base leading-relaxed mb-8 ${accent ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {t(`projects.${key}.scope`)}
                </p>

                <div className={`grid grid-cols-3 gap-4 pt-6 border-t ${accent ? "border-white/10" : "border-border"}`}>
                  <div>
                    <div className={`text-[10px] font-semibold tracking-widest uppercase mb-1 ${accent ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
                      <MapPin className="inline w-3 h-3 me-1" />
                      {t("projects.location")}
                    </div>
                    <div className={`text-sm font-serif font-bold ${accent ? "" : "text-foreground"}`}>
                      {t(`projects.${key}.location`)}
                    </div>
                  </div>
                  <div>
                    <div className={`text-[10px] font-semibold tracking-widest uppercase mb-1 ${accent ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
                      <Maximize2 className="inline w-3 h-3 me-1" />
                      {t("projects.scale")}
                    </div>
                    <div className={`text-sm font-serif font-bold ${accent ? "text-accent" : "text-accent"}`}>
                      {t(`projects.${key}.scale`)}
                    </div>
                  </div>
                  <div>
                    <div className={`text-[10px] font-semibold tracking-widest uppercase mb-1 ${accent ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
                      <Calendar className="inline w-3 h-3 me-1" />
                      {t("projects.year")}
                    </div>
                    <div className={`text-sm font-serif font-bold ${accent ? "" : "text-foreground"}`}>
                      {t(`projects.${key}.year`)}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
