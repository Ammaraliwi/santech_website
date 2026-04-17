import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Compass,
  PenTool,
  Package,
  Wrench,
  GraduationCap,
  HeartHandshake,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useI18n();

  const services = [
    { icon: Compass, title: t("services.1.title"), description: t("services.1.desc") },
    { icon: PenTool, title: t("services.2.title"), description: t("services.2.desc") },
    { icon: Package, title: t("services.3.title"), description: t("services.3.desc") },
    { icon: Wrench, title: t("services.4.title"), description: t("services.4.desc") },
    { icon: GraduationCap, title: t("services.5.title"), description: t("services.5.desc") },
    { icon: HeartHandshake, title: t("services.6.title"), description: t("services.6.desc") },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="py-28 bg-secondary/30 relative overflow-hidden"
    >
      {/* Decorative background lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="h-full w-full grid grid-rows-12">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="border-b border-foreground" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 border-b border-accent pb-1">
              {t("services.eyebrow")}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
              {t("services.title.1")}{" "}
              <span className="text-primary italic">{t("services.title.2")}</span>{" "}
              {t("services.title.3")}
            </h2>
          </motion.div>
          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-6 text-muted-foreground text-lg leading-relaxed"
          >
            {t("services.intro")}
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="relative bg-background p-8 group hover:bg-primary hover:text-primary-foreground transition-all duration-500 cursor-default overflow-hidden"
                data-testid={`card-service-${i}`}
              >
                {/* Top accent stripe — grows on hover */}
                <span className="absolute top-0 start-0 h-[3px] w-12 bg-accent transition-all duration-500 group-hover:w-full" />
                {/* Faint number watermark */}
                <span className="absolute -bottom-4 end-4 text-[110px] font-serif font-bold leading-none text-foreground/[0.04] group-hover:text-white/10 transition-colors duration-500 select-none pointer-events-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative w-14 h-14 rounded-md bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
                  <Icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" strokeWidth={1.75} />
                </div>
                <h3 className="relative text-xl font-serif font-semibold mb-3 text-foreground group-hover:text-primary-foreground transition-colors">
                  {service.title}
                </h3>
                <p className="relative text-muted-foreground text-sm leading-relaxed group-hover:text-primary-foreground/75 transition-colors">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
