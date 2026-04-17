import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail, User } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const team = [
  { key: 1, hasName: true, initials: "AW" },
  { key: 2, hasName: false, initials: "SD" },
  { key: 3, hasName: false, initials: "TD" },
  { key: 4, hasName: false, initials: "DS" },
];

export default function Leadership() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useI18n();

  return (
    <section
      id="leadership"
      ref={ref}
      className="relative py-28 bg-background overflow-hidden"
      data-testid="section-leadership"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 border-b border-accent pb-1"
          >
            {t("leadership.eyebrow")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-[1.05] mb-6"
          >
            {t("leadership.title.1")}{" "}
            <span className="text-primary italic">{t("leadership.title.2")}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-base md:text-lg leading-relaxed"
          >
            {t("leadership.intro")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {team.map(({ key, hasName, initials }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="relative bg-background p-8 group hover:bg-secondary/30 transition-all duration-500 overflow-hidden"
              data-testid={`leadership-${key}`}
            >
              <span className="absolute top-0 start-0 h-[3px] w-12 bg-accent transition-all duration-500 group-hover:w-full" />

              {/* Avatar */}
              <div className="relative w-28 h-28 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground font-serif font-bold text-3xl group-hover:scale-105 transition-transform duration-500">
                  {hasName ? initials : <User className="w-12 h-12 text-white/80" strokeWidth={1.5} />}
                </div>
                {/* Accent ring on hover */}
                <div className="absolute inset-0 rounded-full ring-2 ring-accent ring-offset-4 ring-offset-background opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="text-center">
                {hasName && (
                  <h3 className="font-serif font-bold text-lg text-foreground mb-1 leading-tight">
                    {t(`leadership.${key}.name`)}
                  </h3>
                )}
                <div className="text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-3">
                  {t(`leadership.${key}.role`)}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`leadership.${key}.bio`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
