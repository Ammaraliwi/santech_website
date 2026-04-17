import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MessageSquare,
  Ruler,
  PackageSearch,
  Wrench,
  Users,
  Headphones,
  ArrowRight,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";

const steps = [
  { Icon: MessageSquare, key: 1 },
  { Icon: Ruler, key: 2 },
  { Icon: PackageSearch, key: 3 },
  { Icon: Wrench, key: 4 },
  { Icon: Users, key: 5 },
  { Icon: Headphones, key: 6 },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t, dir } = useI18n();

  return (
    <section
      id="process"
      ref={ref}
      className="relative py-28 bg-secondary/30 overflow-hidden"
      data-testid="section-process"
    >
      <div className="absolute top-1/2 -translate-y-1/2 -start-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute top-0 -end-20 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 border-b border-accent pb-1"
          >
            {t("process.eyebrow")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-[1.05] mb-6"
          >
            {t("process.title.1")}{" "}
            <span className="text-primary italic">{t("process.title.2")}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-base md:text-lg leading-relaxed"
          >
            {t("process.intro")}
          </motion.p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-12 start-0 end-0 h-0.5 bg-border">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.8, delay: 0.4, ease: "easeInOut" }}
              className="h-full bg-accent origin-start"
              style={{ transformOrigin: dir === "rtl" ? "right" : "left" }}
            />
          </div>

          <div className="grid grid-cols-6 gap-4 relative">
            {steps.map(({ Icon, key }, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                className="text-center group"
                data-testid={`process-step-${key}`}
              >
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="absolute inset-0 bg-background rounded-full border-2 border-border group-hover:border-accent transition-colors duration-300 flex items-center justify-center">
                    <Icon className="w-9 h-9 text-primary group-hover:text-accent transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <div className="absolute -top-2 -end-2 w-9 h-9 bg-accent text-white text-sm font-serif font-bold rounded-full flex items-center justify-center shadow-md">
                    0{key}
                  </div>
                </div>
                <h3 className="text-lg font-serif font-bold text-foreground mb-2 leading-tight">
                  {t(`process.${key}.title`)}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed px-2">
                  {t(`process.${key}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet: vertical timeline */}
        <div className="lg:hidden space-y-6">
          {steps.map(({ Icon, key }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-5 items-start bg-background p-6 border border-border relative overflow-hidden"
              data-testid={`process-step-mobile-${key}`}
            >
              <span className="absolute top-0 start-0 h-full w-1 bg-accent" />
              <div className="relative shrink-0">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
                </div>
                <div className="absolute -top-1 -end-1 w-7 h-7 bg-accent text-white text-xs font-serif font-bold rounded-full flex items-center justify-center">
                  0{key}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                  {t(`process.${key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`process.${key}.desc`)}
                </p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight
                  className="w-5 h-5 text-accent/40 absolute -bottom-3 start-9"
                  style={{ transform: "rotate(90deg)" }}
                  aria-hidden="true"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
