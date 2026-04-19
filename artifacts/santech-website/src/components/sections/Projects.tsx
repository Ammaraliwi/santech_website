import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";
import { MapPin, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";

type Category = "all" | "layouts" | "renders" | "retail" | "production";

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
  {
    id: "foodcourt-mainhall",
    src: "/portfolio/foodcourt-mainhall.jpg",
    category: "renders",
    title: { en: "Mall Food Court — Main Dining Hall", ar: "فود كورت المول — قاعة الطعام الرئيسية" },
    client: { en: "Mall Food Court", ar: "فود كورت مول" },
    location: { en: "Regional", ar: "إقليمي" },
    type: { en: "Hospitality Interior", ar: "تصميم ضيافة داخلي" },
  },
  {
    id: "foodcourt-shops",
    src: "/portfolio/foodcourt-shops.jpg",
    category: "renders",
    title: { en: "Food Court — Shops & Counter Concept", ar: "فود كورت — تصميم المحلات والكاونترات" },
    client: { en: "Mall Food Court", ar: "فود كورت مول" },
    location: { en: "Regional", ar: "إقليمي" },
    type: { en: "F&B Concept Design", ar: "تصميم مفهوم أغذية ومشروبات" },
  },
  {
    id: "foodcourt-seating-upper",
    src: "/portfolio/foodcourt-seating-upper.jpg",
    category: "renders",
    title: { en: "Food Court — Upper Mezzanine Seating", ar: "فود كورت — جلسات الميزانين العلوي" },
    client: { en: "Mall Food Court", ar: "فود كورت مول" },
    location: { en: "Regional", ar: "إقليمي" },
    type: { en: "Interior Visualization", ar: "تصور داخلي" },
  },
  {
    id: "foodcourt-entrance",
    src: "/portfolio/foodcourt-entrance.jpg",
    category: "renders",
    title: { en: "Food Court — Grand Entrance Walkway", ar: "فود كورت — ممر المدخل الرئيسي" },
    client: { en: "Mall Food Court", ar: "فود كورت مول" },
    location: { en: "Regional", ar: "إقليمي" },
    type: { en: "Hospitality Interior", ar: "تصميم ضيافة داخلي" },
  },
  {
    id: "supermarket-topview",
    src: "/portfolio/supermarket-topview.jpg",
    category: "retail",
    title: { en: "Supermarket — Full Layout & Refrigeration Plan", ar: "سوبرماركت — مخطط كامل وأنظمة التبريد" },
    client: { en: "Retail Hypermarket", ar: "سوبرماركت تجزئة" },
    location: { en: "Regional", ar: "إقليمي" },
    type: { en: "Retail Layout Engineering", ar: "هندسة تخطيط تجزئة" },
  },
  {
    id: "supermarket-fresh",
    src: "/portfolio/supermarket-fresh.jpg",
    category: "retail",
    title: { en: "Supermarket — Fresh & Frozen Zone", ar: "سوبرماركت — قسم الطازج والمجمّد" },
    client: { en: "Retail Hypermarket", ar: "سوبرماركت تجزئة" },
    location: { en: "Regional", ar: "إقليمي" },
    type: { en: "Refrigeration & Display", ar: "تبريد وعرض" },
  },
  {
    id: "supermarket-bakery",
    src: "/portfolio/supermarket-bakery.jpg",
    category: "retail",
    title: { en: "In-Store Bakery — Display & Counter", ar: "مخبز داخل المتجر — عرض وكاونتر" },
    client: { en: "Retail Hypermarket", ar: "سوبرماركت تجزئة" },
    location: { en: "Regional", ar: "إقليمي" },
    type: { en: "In-Store Bakery Concept", ar: "مفهوم مخبز داخل المتجر" },
  },
  {
    id: "supermarket-aisle",
    src: "/portfolio/supermarket-aisle.jpg",
    category: "retail",
    title: { en: "Supermarket — Aisle & Shelving Design", ar: "سوبرماركت — تصميم الممرات والرفوف" },
    client: { en: "Retail Hypermarket", ar: "سوبرماركت تجزئة" },
    location: { en: "Regional", ar: "إقليمي" },
    type: { en: "Shelving & Merchandising", ar: "رفوف وعرض البضائع" },
  },
];

const categoryLabels: Record<Category, { en: string; ar: string }> = {
  all: { en: "All Work", ar: "كل الأعمال" },
  layouts: { en: "Engineering Layouts", ar: "مخططات هندسية" },
  renders: { en: "3D Visualizations", ar: "تصاميم ثلاثية الأبعاد" },
  retail: { en: "Retail & Supermarkets", ar: "تجزئة وسوبرماركت" },
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
      className="relative py-20 bg-background overflow-hidden"
      data-testid="section-projects"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-[10px] font-semibold tracking-[0.2em] uppercase text-accent mb-3 border-b border-accent pb-1"
            >
              {t("projects.eyebrow")}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-[1.1] mb-3"
            >
              {t("projects.title.1")}{" "}
              <span className="text-primary italic">{t("projects.title.2")}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-sm md:text-base leading-relaxed"
            >
              {t("projects.intro")}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-1.5 lg:justify-end"
            data-testid="projects-filter"
          >
            {(Object.keys(categoryLabels) as Category[]).map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-3 py-1.5 text-[10px] font-semibold tracking-[0.12em] uppercase border transition-all duration-300 ${
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
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.button
                layout
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: (i % 8) * 0.04 }}
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
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06] select-none pointer-events-none"
                  style={{ WebkitUserSelect: "none", userSelect: "none" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-60 group-hover:opacity-95 transition-opacity duration-500" />

                <div className="absolute top-2 start-2 z-10">
                  <span className="inline-block px-2 py-0.5 text-[9px] font-semibold tracking-[0.12em] uppercase bg-accent text-accent-foreground">
                    {categoryLabels[p.category][lang]}
                  </span>
                </div>

                <div className="absolute top-2 end-2 z-10 w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <Maximize2 className="w-3.5 h-3.5 text-white" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-3 z-10 text-primary-foreground transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-[9px] font-semibold tracking-[0.18em] uppercase text-accent mb-1 opacity-90 line-clamp-1">
                    {p.type[lang]}
                  </div>
                  <h3 className="font-serif font-bold text-sm leading-tight mb-1 line-clamp-2">
                    {p.title[lang]}
                  </h3>
                  <div className="flex items-center gap-1 text-[10px] opacity-80 line-clamp-1">
                    <MapPin className="w-2.5 h-2.5 shrink-0" />
                    <span className="truncate">{p.client[lang]}</span>
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
