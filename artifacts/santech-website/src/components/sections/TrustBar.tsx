import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/lib/i18n";

export default function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { t } = useI18n();

  const stats = [
    { value: "1991", label: t("trust.heritage") },
    { value: "18+", label: t("trust.brands") },
    { value: "500+", label: t("trust.projects") },
    { value: "100%", label: t("trust.italian") },
  ];

  return (
    <section
      ref={ref}
      className="relative bg-primary text-primary-foreground py-10 md:py-12 overflow-hidden border-b-4 border-accent"
      data-testid="section-trustbar"
    >
      {/* Subtle decorative grid */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-white/40 h-full" />
          ))}
        </div>
      </div>
      {/* Soft gradient sheen */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/90 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className={`px-4 md:px-6 text-center ${
                i > 0 ? "md:border-s md:border-white/15" : ""
              }`}
              data-testid={`trustbar-stat-${i}`}
            >
              <div className="text-3xl md:text-4xl font-serif font-bold text-accent mb-2 leading-none tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs md:text-[13px] tracking-wider rtl:tracking-normal text-primary-foreground/85 font-medium ltr:uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
