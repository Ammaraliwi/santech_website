import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n";

interface Stat {
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

function AnimatedNumber({ value, isInView, duration = 1800 }: { value: number; isInView: boolean; duration?: number }) {
  const [display, setDisplay] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!isInView || startedRef.current) return;
    startedRef.current = true;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
      else setDisplay(value);
    };
    requestAnimationFrame(tick);
  }, [isInView, value, duration]);

  return <>{display.toLocaleString()}</>;
}

export default function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { t } = useI18n();

  const stats: Stat[] = [
    { target: 1991, label: t("trust.heritage") },
    { target: 18, suffix: "+", label: t("trust.brands") },
    { target: 100, suffix: "+", label: t("trust.projects") },
    { target: 100, suffix: "%", label: t("trust.italian") },
  ];

  return (
    <section
      ref={ref}
      className="relative bg-primary text-primary-foreground py-10 md:py-12 overflow-hidden border-b-4 border-accent"
      data-testid="section-trustbar"
    >
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-white/40 h-full" />
          ))}
        </div>
      </div>
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
                {stat.prefix}
                <AnimatedNumber value={stat.target} isInView={isInView} duration={1800 + i * 200} />
                {stat.suffix}
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
