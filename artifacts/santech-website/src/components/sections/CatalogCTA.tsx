import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export default function CatalogCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t, dir } = useI18n();

  return (
    <section
      ref={ref}
      className="relative py-20 bg-primary text-primary-foreground overflow-hidden"
      data-testid="section-catalog"
    >
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-white/40 h-full" />
          ))}
        </div>
      </div>
      {/* Soft glow */}
      <div className="absolute top-1/2 -translate-y-1/2 -end-32 w-[500px] h-[500px] rounded-full bg-accent/20 blur-3xl pointer-events-none" />
      <div className="absolute top-0 -start-20 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Visual: stylized catalog */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative">
              {/* Back catalog */}
              <div className="absolute top-3 start-3 w-44 h-56 bg-accent/40 rounded-sm" />
              {/* Front catalog */}
              <div className="relative w-44 h-56 bg-white text-primary rounded-sm shadow-2xl flex flex-col items-center justify-between p-6 border-t-4 border-accent">
                <div className="text-[10px] tracking-[0.2em] font-semibold uppercase text-accent">
                  Santech 2026
                </div>
                <FileText className="w-16 h-16 text-primary/30" strokeWidth={1.2} />
                <div className="text-center">
                  <div className="text-xs font-serif font-bold leading-tight text-primary">
                    Product Catalog
                  </div>
                  <div className="text-[9px] text-muted-foreground mt-1 tracking-wider uppercase">
                    18+ Brands · PDF
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
              {t("catalog.eyebrow")}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-5 leading-tight">
              {t("catalog.title")}
            </h2>
            <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
              {t("catalog.desc")}
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Button
                size="lg"
                onClick={() => {
                  // Scroll to contact for now (placeholder for actual PDF)
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-accent hover:bg-accent/90 text-white font-semibold tracking-wide rounded-sm group"
                data-testid="button-catalog-download"
              >
                <Download className={`w-4 h-4 ${dir === "rtl" ? "ms-2 order-2" : "me-2"}`} />
                {t("catalog.button")}
                <ArrowRight className={`w-4 h-4 transition-transform ${dir === "rtl" ? "me-2 -rotate-180 group-hover:-translate-x-1" : "ms-2 group-hover:translate-x-1"}`} />
              </Button>
              <span className="text-xs text-primary-foreground/60 tracking-wide">
                {t("catalog.note")}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
