import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const testimonials = [1, 2, 3];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useI18n();

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-28 bg-secondary/30 overflow-hidden"
      data-testid="section-testimonials"
    >
      {/* Background decorative quotation mark */}
      <Quote
        className="absolute top-10 end-10 w-72 h-72 text-primary/[0.03] pointer-events-none"
        strokeWidth={1}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 border-b border-accent pb-1"
          >
            {t("testimonials.eyebrow")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-[1.05] mb-6"
          >
            {t("testimonials.title.1")}{" "}
            <span className="text-primary italic">{t("testimonials.title.2")}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-base md:text-lg leading-relaxed"
          >
            {t("testimonials.intro")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((key, i) => (
            <motion.figure
              key={key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
              className="relative bg-background border border-border p-8 group hover:border-accent/40 transition-all duration-300 flex flex-col"
              data-testid={`testimonial-${key}`}
            >
              <span className="absolute top-0 start-0 h-[3px] w-12 bg-accent transition-all duration-500 group-hover:w-full" />

              <Quote className="w-10 h-10 text-accent mb-4" strokeWidth={1.5} />

              {/* 5 stars */}
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" strokeWidth={1.5} />
                ))}
              </div>

              <blockquote className="text-foreground text-base leading-relaxed flex-1 mb-6 italic">
                "{t(`testimonials.${key}.quote`)}"
              </blockquote>

              <figcaption className="pt-6 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-serif font-bold text-lg shrink-0">
                    {(t(`testimonials.${key}.name`) as string).charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <div className="font-serif font-bold text-foreground text-sm leading-tight">
                      {t(`testimonials.${key}.name`)}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {t(`testimonials.${key}.role`)}
                    </div>
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
