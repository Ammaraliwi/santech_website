import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Award, BadgeCheck, FileCheck, Zap, Handshake } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const certs = [
  { Icon: ShieldCheck, key: 1 },
  { Icon: Award, key: 2 },
  { Icon: BadgeCheck, key: 3 },
  { Icon: FileCheck, key: 4 },
  { Icon: Zap, key: 5 },
  { Icon: Handshake, key: 6 },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useI18n();

  return (
    <section
      id="certifications"
      ref={ref}
      className="relative py-24 bg-background border-y border-border overflow-hidden"
      data-testid="section-certifications"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 border-b border-accent pb-1"
          >
            {t("certifications.eyebrow")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight mb-4"
          >
            {t("certifications.title.1")}{" "}
            <span className="text-primary italic">{t("certifications.title.2")}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-base leading-relaxed"
          >
            {t("certifications.intro")}
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
          {certs.map(({ Icon, key }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
              className="bg-background p-6 flex flex-col items-center text-center group hover:bg-secondary/40 transition-colors duration-300"
              data-testid={`cert-${key}`}
            >
              <div className="w-14 h-14 rounded-full border-2 border-accent/30 group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300 flex items-center justify-center mb-3">
                <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
              </div>
              <div className="text-sm font-serif font-bold text-foreground mb-1 leading-tight">
                {t(`certifications.${key}.name`)}
              </div>
              <div className="text-[11px] text-muted-foreground leading-tight">
                {t(`certifications.${key}.desc`)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
