import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Building2,
  UtensilsCrossed,
  Coffee,
  Truck,
  Cake,
  Utensils,
  HeartPulse,
  GraduationCap,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";

const industries = [
  { Icon: Building2, key: 1 },
  { Icon: UtensilsCrossed, key: 2 },
  { Icon: Coffee, key: 3 },
  { Icon: Truck, key: 4 },
  { Icon: Utensils, key: 5 },
  { Icon: Cake, key: 6 },
  { Icon: HeartPulse, key: 7 },
  { Icon: GraduationCap, key: 8 },
];

export default function Industries() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useI18n();

  return (
    <section
      id="industries"
      ref={ref}
      className="relative py-28 bg-background overflow-hidden"
      data-testid="section-industries"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 border-b border-accent pb-1"
          >
            {t("industries.eyebrow")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-[1.05] mb-6"
          >
            {t("industries.title.1")}{" "}
            <span className="text-primary italic">{t("industries.title.2")}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-base md:text-lg leading-relaxed"
          >
            {t("industries.intro")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {industries.map(({ Icon, key }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative bg-background p-8 group hover:bg-primary hover:text-primary-foreground transition-all duration-500 cursor-default overflow-hidden"
              data-testid={`industry-${key}`}
            >
              <span className="absolute top-0 start-0 h-[3px] w-12 bg-accent transition-all duration-500 group-hover:w-full" />
              <div className="absolute -bottom-6 -end-6 text-[7rem] font-serif font-bold text-foreground/[0.04] group-hover:text-white/10 leading-none transition-colors">
                0{key}
              </div>
              <div className="relative">
                <div className="w-14 h-14 rounded-sm bg-accent/10 group-hover:bg-accent flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110">
                  <Icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 leading-tight">
                  {t(`industries.${key}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-primary-foreground/80 transition-colors">
                  {t(`industries.${key}.desc`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
