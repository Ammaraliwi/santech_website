import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Globe, Lightbulb } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, dir } = useI18n();

  const stats = [
    { value: t("about.stat1.value"), label: t("about.stat1.label"), icon: Award },
    { value: t("about.stat2.value"), label: t("about.stat2.label"), icon: Users },
    { value: t("about.stat3.value"), label: t("about.stat3.label"), icon: Globe },
    { value: t("about.stat4.value"), label: t("about.stat4.label"), icon: Lightbulb },
  ];

  return (
    <section id="about" ref={ref} className="py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-8">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 border-b border-accent pb-1">
                {t("about.eyebrow")}
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                {t("about.title.1")}{" "}
                <span className="text-primary italic">{t("about.title.2")}</span>{" "}
                {t("about.title.3")}
              </h2>
            </motion.div>

            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              {t("about.p1")}
            </motion.p>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-muted-foreground leading-relaxed"
            >
              {t("about.p2")}
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex items-center gap-4 pt-2"
            >
              <div className="h-px flex-1 bg-border" />
              <span className="text-sm text-muted-foreground font-medium tracking-wider uppercase">
                {t("about.divider")}
              </span>
              <div className="h-px flex-1 bg-border" />
            </motion.div>
          </div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="relative p-8 bg-card border border-border rounded-sm group hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                  data-testid={`card-stat-${i}`}
                >
                  <div className={`absolute top-4 ${dir === "rtl" ? "left-4" : "right-4"} w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors`}>
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <div className="text-4xl font-serif font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground leading-snug">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* In-house Design Callout */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20 p-10 bg-primary text-primary-foreground rounded-sm relative overflow-hidden"
          data-testid="card-design-callout"
        >
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="grid grid-cols-12 h-full">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="border-r border-white/20 h-full" />
              ))}
            </div>
          </div>
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3 inline-block">
              {t("about.callout.eyebrow")}
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              {t("about.callout.title")}
            </h3>
            <p className="text-primary-foreground/75 leading-relaxed">
              {t("about.callout.text")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
