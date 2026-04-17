import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe2, Shield, Award, Ruler, LifeBuoy } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useI18n();

  const reasons = [
    { icon: Globe2, title: t("why.1.title"), desc: t("why.1.desc") },
    { icon: Shield, title: t("why.2.title"), desc: t("why.2.desc") },
    { icon: Award, title: t("why.3.title"), desc: t("why.3.desc") },
    { icon: Ruler, title: t("why.4.title"), desc: t("why.4.desc") },
    { icon: LifeBuoy, title: t("why.5.title"), desc: t("why.5.desc") },
  ];

  return (
    <section
      id="why-us"
      ref={ref}
      className="py-28 bg-background relative overflow-hidden"
      data-testid="section-why-us"
    >
      {/* Decorative side accent */}
      <div className="absolute top-0 start-0 w-1 h-32 bg-accent" />
      <div
        className="absolute -top-20 -end-20 w-96 h-96 rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "hsl(var(--primary))" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-end">
          <div className="lg:col-span-7">
            <motion.span
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 border-b border-accent pb-1"
            >
              {t("why.eyebrow")}
            </motion.span>
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-[1.05]"
            >
              {t("why.title.1")}{" "}
              <span className="text-primary italic">{t("why.title.2")}</span>
            </motion.h2>
          </div>
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-5 text-muted-foreground text-base md:text-lg leading-relaxed"
          >
            {t("why.intro")}
          </motion.p>
        </div>

        {/* Reasons Grid — first one is featured/large */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            const isFeatured = i === 0;
            return (
              <motion.div
                key={i}
                custom={i + 3}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className={`group relative p-8 border border-border bg-background hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  isFeatured
                    ? "lg:col-span-2 lg:row-span-1 bg-primary text-primary-foreground border-primary"
                    : ""
                }`}
                data-testid={`card-why-${i}`}
              >
                {/* Top accent stripe — grows on hover */}
                <span
                  className={`absolute top-0 start-0 h-[3px] bg-accent transition-all duration-500 ${
                    isFeatured ? "w-full" : "w-12 group-hover:w-full"
                  }`}
                />

                <div
                  className={`w-14 h-14 rounded-md flex items-center justify-center mb-6 transition-colors ${
                    isFeatured
                      ? "bg-accent/20 text-accent"
                      : "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white"
                  }`}
                >
                  <Icon className="w-6 h-6" strokeWidth={1.75} />
                </div>

                <h3
                  className={`text-xl md:text-2xl font-serif font-semibold mb-3 leading-snug ${
                    isFeatured ? "text-white" : "text-foreground"
                  }`}
                >
                  {r.title}
                </h3>
                <p
                  className={`text-sm md:text-base leading-relaxed ${
                    isFeatured ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}
                >
                  {r.desc}
                </p>

                {/* Number badge */}
                <span
                  className={`absolute top-6 end-6 text-xs font-mono tabular-nums tracking-wider ${
                    isFeatured ? "text-primary-foreground/40" : "text-muted-foreground/40"
                  }`}
                >
                  0{i + 1}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
