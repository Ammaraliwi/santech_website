import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";
import { MapPin, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";

type Category = "all" | "layouts" | "renders" | "production";

type Project = {
  id: string;
  src: string;
  category: Exclude<Category, "all">;
  title: { en: string; ar: string };
  client: { en: string; ar: string };
  location: { en: string; ar: string };
  type: { en: string; ar: string };
};

const projects: Project[] = [
  {
    id: "nakeel",
    src: "/portfolio/nakeel-tahini-factory.jpg",
    category: "layouts",
    title: { en: "Al-Nakeel Tahini Factory — Production Layout", ar: "مصنع النخيل للطحينة — مخطط الإنتاج" },
    client: { en: "Al-Nakeel Factory", ar: "مصنع النخيل" },
    location: { en: "Industrial Zone", ar: "المنطقة الصناعية" },
    type: { en: "Food Factory", ar: "مصنع غذائي" },
  },
  {
    id: "syrian-house-ground",
    src: "/portfolio/syrian-house-ground-floor.jpg",
    category: "layouts",
    title: { en: "Syrian House Factory — Ground Floor Plan", ar: "مصنع البيت السوري — مخطط الطابق الأرضي" },
    client: { en: "Syrian House Group", ar: "مجموعة البيت السوري" },
    location: { en: "Khartoum", ar: "الخرطوم" },
    type: { en: "Central Production Facility", ar: "منشأة إنتاج مركزية" },
  },
  {
    id: "syrian-house-first",
    src: "/portfolio/syrian-house-first-floor.jpg",
    category: "layouts",
    title: { en: "Syrian House Factory — First Floor (Packaging)", ar: "مصنع البيت السوري — الطابق الأول (التعبئة)" },
    client: { en: "Syrian House Group", ar: "مجموعة البيت السوري" },
    location: { en: "Khartoum", ar: "الخرطوم" },
    type: { en: "Packaging Plant", ar: "خط تعبئة" },
  },
  {
    id: "central-bakery-line",
    src: "/portfolio/central-bakery-line.jpg",
    category: "layouts",
    title: { en: "Automatic Arabic Bread & Bakery Line — Layout", ar: "خط الخبز العربي الآلي والمخبوزات — مخطط" },
    client: { en: "Syrian House Group", ar: "مجموعة البيت السوري" },
    location: { en: "Khartoum", ar: "الخرطوم" },
    type: { en: "Industrial Bakery", ar: "مخبز صناعي" },
  },
  {
    id: "catering-cold",
    src: "/portfolio/catering-cold-storage.jpg",
    category: "layouts",
    title: { en: "Catering Complex — Cold Rooms & Prep Areas", ar: "مجمع تقديم طعام — غرف تبريد وأقسام تحضير" },
    client: { en: "Syrian House Group", ar: "مجموعة البيت السوري" },
    location: { en: "Khartoum", ar: "الخرطوم" },
    type: { en: "Catering / Cloud Kitchen", ar: "كاترينغ / مطبخ مركزي" },
  },
  {
    id: "mojo-layout",
    src: "/portfolio/mojo-kitchen-layout.jpg",
    category: "layouts",
    title: { en: "MOJO Fast Food — Kitchen Equipment Layout", ar: "مطعم MOJO للوجبات السريعة — مخطط معدات المطبخ" },
    client: { en: "MOJO Fast Food", ar: "MOJO Fast Food" },
    location: { en: "Damascus", ar: "دمشق" },
    type: { en: "Quick Service Restaurant", ar: "مطعم خدمة سريعة" },
  },
  {
    id: "restaurant-furniture",
    src: "/portfolio/restaurant-furniture-layout.jpg",
    category: "layouts",
    title: { en: "Restaurant — Furniture & Equipment Arrangement", ar: "مطعم — توزيع الأثاث والمعدات" },
    client: { en: "Confidential", ar: "سري" },
    location: { en: "Regional", ar: "إقليمي" },
    type: { en: "Full-Service Restaurant", ar: "مطعم كامل الخدمات" },
  },
  {
    id: "mojo-render",
    src: "/portfolio/mojo-fastfood-render.jpg",
    category: "renders",
    title: { en: "MOJO Fast Food — Front Counter Visualization", ar: "مطعم MOJO — تصميم الكاونتر الأمامي" },
    client: { en: "MOJO Fast Food", ar: "MOJO Fast Food" },
    location: { en: "Damascus", ar: "دمشق" },
    type: { en: "3D Visualization", ar: "تصميم ثلاثي الأبعاد" },
  },
  {
    id: "donafello-storefront",
    src: "/portfolio/donafello-storefront.jpg",
    category: "renders",
    title: { en: "Donafello — Donut Boutique Storefront", ar: "Donafello — واجهة محل الدوناتس" },
    client: { en: "Donafello", ar: "Donafello" },
    location: { en: "Mall Concept", ar: "مفهوم مول تجاري" },
    type: { en: "Concept Visualization", ar: "تصميم مفاهيمي" },
  },
  {
    id: "donafello-interior",
    src: "/portfolio/donafello-interior.jpg",
    category: "renders",
    title: { en: "Donafello — Interior Seating & Feature Wall", ar: "Donafello — التصميم الداخلي والجدار المميز" },
    client: { en: "Donafello", ar: "Donafello" },
    location: { en: "Mall Concept", ar: "مفهوم مول تجاري" },
    type: { en: "Interior Design", ar: "تصميم داخلي" },
  },
  {
    id: "syrian-house-3d",
    src: "/portfolio/syrian-house-kitchen-3d.jpg",
    category: "renders",
    title: { en: "Syrian House — Kitchen Project 3D Layout", ar: "البيت السوري — مخطط مشروع المطبخ ثلاثي الأبعاد" },
    client: { en: "Syrian House Group", ar: "مجموعة البيت السوري" },
    location: { en: "Khartoum", ar: "الخرطوم" },
    type: { en: "3D Kitchen Layout", ar: "مخطط مطبخ ثلاثي الأبعاد" },
  },
  {
    id: "bakery-3d-line",
    src: "/portfolio/bakery-3d-line.jpg",
    category: "production",
    title: { en: "Automated Bakery Production Line — 3D View", ar: "خط إنتاج مخبز آلي — عرض ثلاثي الأبعاد" },
    client: { en: "Syrian House Group", ar: "مجموعة البيت السوري" },
    location: { en: "Khartoum", ar: "الخرطوم" },
    type: { en: "Production Line Engineering", ar: "هندسة خط إنتاج" },
  },
  {
    id: "ozone-flour",
    src: "/portfolio/ozone-flour-line.jpg",
    category: "production",
    title: { en: "Ozone PCF — Flour Cleaning & Grading Line", ar: "Ozone PCF — خط تنظيف وتدريج الطحين" },
    client: { en: "Ozone Industries", ar: "صناعات Ozone" },
    location: { en: "Industrial Plant", ar: "منشأة صناعية" },
    type: { en: "Process Engineering", ar: "هندسة معالجة" },
  },
  {
    id: "s900-suite",
    src: "/portfolio/s900-cooking-suite.jpg",
    category: "production",
    title: { en: "S900 Series — Modular Cooking Suite", ar: "سلسلة S900 — تشكيلة طهي معيارية" },
    client: { en: "Multi-Project Equipment", ar: "تجهيزات متعددة المشاريع" },
    location: { en: "—", ar: "—" },
    type: { en: "Equipment Configuration", ar: "تكوين معدات" },
  },
];

const categoryLabels: Record<Category, { en: string; ar: string }> = {
  all: { en: "All Work", ar: "كل الأعمال" },
  layouts: { en: "Engineering Layouts", ar: "مخططات هندسية" },
  renders: { en: "3D Visualizations", ar: "تصاميم ثلاثية الأبعاد" },
  production: { en: "Production Lines", ar: "خطوط إنتاج" },
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t, lang } = useI18n();

  const [active, setActive] = useState<Category>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? null : (i + 1) % filtered.length));
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, filtered.length]);

  const current = openIndex !== null ? filtered[openIndex] : null;

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-28 bg-background overflow-hidden"
      data-testid="section-projects"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 border-b border-accent pb-1"
          >
            {t("projects.eyebrow")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-[1.05] mb-6"
          >
            {t("projects.title.1")}{" "}
            <span className="text-primary italic">{t("projects.title.2")}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-base md:text-lg leading-relaxed"
          >
            {t("projects.intro")}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-10"
          data-testid="projects-filter"
        >
          {(Object.keys(categoryLabels) as Category[]).map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 text-xs font-semibold tracking-[0.15em] uppercase border transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-foreground border-border hover:border-primary hover:text-primary"
                }`}
                data-testid={`filter-${cat}`}
              >
                {categoryLabels[cat][lang]}
              </button>
            );
          })}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.button
                layout
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                onClick={() => setOpenIndex(i)}
                className="group relative overflow-hidden bg-secondary/30 aspect-[4/3] cursor-zoom-in text-start"
                data-testid={`portfolio-${p.id}`}
              >
                <img
                  src={p.src}
                  alt={p.title[lang]}
                  loading="lazy"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05] select-none pointer-events-none"
                  style={{ WebkitUserSelect: "none", userSelect: "none" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-500" />

                <div className="absolute top-3 start-3 z-10">
                  <span className="inline-block px-2.5 py-1 text-[10px] font-semibold tracking-[0.15em] uppercase bg-accent text-accent-foreground">
                    {categoryLabels[p.category][lang]}
                  </span>
                </div>

                <div className="absolute top-3 end-3 z-10 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <Maximize2 className="w-4 h-4 text-white" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5 z-10 text-primary-foreground transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-accent mb-1.5 opacity-90">
                    {p.type[lang]}
                  </div>
                  <h3 className="font-serif font-bold text-lg leading-tight mb-2">
                    {p.title[lang]}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[11px] opacity-80">
                    <MapPin className="w-3 h-3" />
                    <span>{p.client[lang]}</span>
                    <span className="opacity-50">•</span>
                    <span>{p.location[lang]}</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {current && openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setOpenIndex(null)}
            onContextMenu={(e) => e.preventDefault()}
            data-testid="lightbox"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex(null);
              }}
              className="absolute top-4 end-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              aria-label="Close"
              data-testid="lightbox-close"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
              }}
              className="absolute start-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex((i) => (i === null ? null : (i + 1) % filtered.length));
              }}
              className="absolute end-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 rtl:rotate-180" />
            </button>

            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full flex-1 min-h-0 flex items-center justify-center">
                <img
                  src={current.src}
                  alt={current.title[lang]}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  className="max-w-full max-h-[75vh] object-contain select-none pointer-events-none"
                  style={{ WebkitUserSelect: "none", userSelect: "none", WebkitTouchCallout: "none" }}
                />
              </div>
              <div className="w-full max-w-3xl mt-5 text-center text-white">
                <div className="text-[10px] font-semibold tracking-[0.25em] uppercase text-accent mb-2">
                  {categoryLabels[current.category][lang]} • {current.type[lang]}
                </div>
                <h3 className="font-serif font-bold text-xl md:text-2xl mb-2">
                  {current.title[lang]}
                </h3>
                <div className="flex items-center justify-center gap-2 text-sm text-white/70">
                  <span>{current.client[lang]}</span>
                  <span className="opacity-50">•</span>
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{current.location[lang]}</span>
                </div>
                <div className="text-[10px] text-white/40 mt-3 tracking-wider">
                  {openIndex + 1} / {filtered.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
