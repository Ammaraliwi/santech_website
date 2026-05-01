import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";
import { MapPin, X, ChevronLeft, ChevronRight, Maximize2, Images } from "lucide-react";
import { useI18n } from "@/lib/i18n";

type Category = "all" | "layouts" | "renders" | "retail" | "production";

type Project = {
  id: string;
  images: string[];
  category: Exclude<Category, "all">;
  title: { en: string; ar: string };
  client: { en: string; ar: string };
  location: { en: string; ar: string };
  type: { en: string; ar: string };
};

const projects: Project[] = [
  {
    id: "syrian-house-complex",
    images: [
      "/portfolio/syrian-house-3d-overview.jpg",
      "/portfolio/syrian-house-floor-plan.jpg",
      "/portfolio/syrian-house-equipment-plan-1.jpg",
      "/portfolio/syrian-house-alabd-layout-1.jpg",
      "/portfolio/syrian-house-interior.jpg",
      "/portfolio/syrian-house-display-cases.jpg",
      "/portfolio/syrian-house-pastry-modern.jpg",
      "/portfolio/syrian-house-bakery-modern.jpg",
    ],
    category: "renders",
    title: { en: "Syrian House — Sweet & Bakery Complex", ar: "البيت السوري — مجمع الحلويات والمخابز" },
    client: { en: "Syrian House Group", ar: "مجموعة البيت السوري" },
    location: { en: "Damascus, Syria", ar: "دمشق، سوريا" },
    type: { en: "Full Sweet & Bakery Complex (Layouts + 3D)", ar: "مجمع حلويات ومخابز متكامل (مخططات + 3D)" },
  },
  {
    id: "syrian-house-factory",
    images: [
      "/portfolio/syrian-house-ground-floor.jpg",
      "/portfolio/syrian-house-first-floor.jpg",
      "/portfolio/central-bakery-line.jpg",
      "/portfolio/catering-cold-storage.jpg",
      "/portfolio/syrian-house-kitchen-3d.jpg",
      "/portfolio/bakery-3d-line.jpg",
    ],
    category: "layouts",
    title: { en: "Syrian House Factory — Central Production Facility", ar: "مصنع البيت السوري — منشأة الإنتاج المركزية" },
    client: { en: "Syrian House Group", ar: "مجموعة البيت السوري" },
    location: { en: "Khartoum", ar: "الخرطوم" },
    type: { en: "Multi-Floor Production, Bakery & Cold-Chain", ar: "إنتاج متعدد الطوابق ومخابز وسلسلة تبريد" },
  },
  {
    id: "nakeel",
    images: ["/portfolio/nakeel-tahini-factory.jpg"],
    category: "layouts",
    title: { en: "Al-Nakeel Tahini Factory — Production Layout", ar: "مصنع النخيل للطحينة — مخطط الإنتاج" },
    client: { en: "Al-Nakeel Factory", ar: "مصنع النخيل" },
    location: { en: "Industrial Zone", ar: "المنطقة الصناعية" },
    type: { en: "Food Factory", ar: "مصنع غذائي" },
  },
  {
    id: "mojo",
    images: [
      "/portfolio/mojo-fastfood-render.jpg",
      "/portfolio/mojo-kitchen-layout.jpg",
    ],
    category: "renders",
    title: { en: "MOJO Fast Food — Restaurant Concept", ar: "MOJO Fast Food — مفهوم المطعم" },
    client: { en: "MOJO Fast Food", ar: "MOJO Fast Food" },
    location: { en: "Damascus", ar: "دمشق" },
    type: { en: "QSR Layout & 3D Visualization", ar: "مخطط ومنظور ثلاثي لمطعم وجبات سريعة" },
  },
  {
    id: "donafello",
    images: [
      "/portfolio/donafello-storefront.jpg",
      "/portfolio/donafello-interior.jpg",
      "/portfolio/donafello-furniture-layout.jpg",
    ],
    category: "renders",
    title: { en: "Donafello — Donut Boutique Concept", ar: "Donafello — مفهوم محل الدوناتس" },
    client: { en: "Donafello", ar: "Donafello" },
    location: { en: "Mall Concept", ar: "مفهوم مول تجاري" },
    type: { en: "Storefront, Interior & Furniture Layout", ar: "واجهة وتصميم داخلي وتوزيع أثاث" },
  },
  {
    id: "restaurant-furniture",
    images: ["/portfolio/restaurant-furniture-layout.jpg"],
    category: "layouts",
    title: { en: "Restaurant — Furniture & Equipment Arrangement", ar: "مطعم — توزيع الأثاث والمعدات" },
    client: { en: "Confidential", ar: "سري" },
    location: { en: "Regional", ar: "إقليمي" },
    type: { en: "Full-Service Restaurant", ar: "مطعم كامل الخدمات" },
  },
  {
    id: "ozone-flour",
    images: ["/portfolio/ozone-flour-line.jpg"],
    category: "production",
    title: { en: "Ozone PCF — Flour Cleaning & Grading Line", ar: "Ozone PCF — خط تنظيف وتدريج الطحين" },
    client: { en: "Ozone Industries", ar: "صناعات Ozone" },
    location: { en: "Industrial Plant", ar: "منشأة صناعية" },
    type: { en: "Process Engineering", ar: "هندسة معالجة" },
  },
  {
    id: "s900-suite",
    images: ["/portfolio/s900-cooking-suite.jpg"],
    category: "production",
    title: { en: "S900 Series — Modular Cooking Suite", ar: "سلسلة S900 — تشكيلة طهي معيارية" },
    client: { en: "Multi-Project Equipment", ar: "تجهيزات متعددة المشاريع" },
    location: { en: "—", ar: "—" },
    type: { en: "Equipment Configuration", ar: "تكوين معدات" },
  },
  {
    id: "foodcourt",
    images: [
      "/portfolio/foodcourt-mainhall.jpg",
      "/portfolio/foodcourt-shops.jpg",
      "/portfolio/foodcourt-seating-upper.jpg",
      "/portfolio/foodcourt-entrance.jpg",
    ],
    category: "renders",
    title: { en: "Mall Food Court — Hospitality Complex", ar: "فود كورت المول — مجمع ضيافة" },
    client: { en: "Mall Food Court", ar: "فود كورت مول" },
    location: { en: "Regional", ar: "إقليمي" },
    type: { en: "Dining Hall, Shops & Entrance Concept", ar: "قاعة طعام، محلات ومدخل" },
  },
  {
    id: "supermarket",
    images: [
      "/portfolio/supermarket-topview.jpg",
      "/portfolio/supermarket-fresh.jpg",
      "/portfolio/supermarket-bakery.jpg",
      "/portfolio/supermarket-aisle.jpg",
    ],
    category: "retail",
    title: { en: "Hypermarket — Full Retail Concept", ar: "سوبرماركت — مفهوم تجزئة متكامل" },
    client: { en: "Retail Hypermarket", ar: "سوبرماركت تجزئة" },
    location: { en: "Regional", ar: "إقليمي" },
    type: { en: "Layout, Refrigeration, Bakery & Shelving", ar: "مخطط وتبريد ومخبز ورفوف" },
  },
  {
    id: "kics",
    images: [
      "/portfolio/kics-ground-floor.jpg",
      "/portfolio/kics-first-floor.jpg",
    ],
    category: "layouts",
    title: { en: "KiCS Central Kitchen — Multi-Floor Layout", ar: "مطبخ KiCS المركزي — مخطط متعدد الطوابق" },
    client: { en: "KiCS Central Kitchen", ar: "KiCS مطبخ مركزي" },
    location: { en: "Regional", ar: "إقليمي" },
    type: { en: "Central Kitchen Layout", ar: "مخطط مطبخ مركزي" },
  },
  {
    id: "boost-juice",
    images: ["/portfolio/boost-juice-bar.jpg"],
    category: "layouts",
    title: { en: "Boost Plus Juice Bar — Ground Floor Layout", ar: "عصائر Boost Plus — مخطط الطابق الأرضي" },
    client: { en: "Boost Plus Juice Bar", ar: "Boost Plus Juice Bar" },
    location: { en: "Khartoum — Al-Mashtal St.", ar: "الخرطوم — شارع المشتل" },
    type: { en: "Juice Bar Concept", ar: "تصميم بار عصائر" },
  },
  {
    id: "waffly",
    images: [
      "/portfolio/waffly-counter-concept.jpg",
      "/portfolio/waffly-shelves-concept.jpg",
      "/portfolio/waffly-mood-cover.jpg",
      "/portfolio/waffly-layout-c.jpg",
      "/portfolio/waffly-layout-d.jpg",
    ],
    category: "renders",
    title: { en: "Waffly Café — Concept & Layouts", ar: "كافيه Waffly — المفهوم والمخططات" },
    client: { en: "Waffly", ar: "Waffly" },
    location: { en: "Concept Project", ar: "مشروع مفهوم" },
    type: { en: "Mood Book, Counter Design & Layout Options", ar: "كتاب مزاج وتصميم كاونتر وخيارات تخطيط" },
  },
  {
    id: "sh-shop",
    images: [
      "/portfolio/sh-shop-ground.jpg",
      "/portfolio/sh-shop-first.jpg",
    ],
    category: "layouts",
    title: { en: "SH Shop — Multi-Floor Retail Layout", ar: "متجر SH — مخطط تجزئة متعدد الطوابق" },
    client: { en: "Confidential Client", ar: "عميل سري" },
    location: { en: "Regional", ar: "إقليمي" },
    type: { en: "Retail Layout Engineering", ar: "هندسة تخطيط تجزئة" },
  },
  {
    id: "shg-bakery",
    images: ["/portfolio/shg-bakery-plan.jpg"],
    category: "layouts",
    title: { en: "SHG Bakery — Equipment & Floor Plan", ar: "مخبز SHG — مخطط المعدات والأرضية" },
    client: { en: "SHG Bakery", ar: "مخبز SHG" },
    location: { en: "Khartoum", ar: "الخرطوم" },
    type: { en: "Bakery Layout", ar: "مخطط مخبز" },
  },
  {
    id: "zaitawi-sesame-line",
    images: ["/portfolio/zaitawi-sesame-line-1.jpg"],
    category: "production",
    title: { en: "Zaitawi — Sesame Sieving Line (CAD Model)", ar: "الزيتاوي — خط نخل السمسم (مخطط CAD)" },
    client: { en: "Zaitawi", ar: "الزيتاوي" },
    location: { en: "Syria", ar: "سوريا" },
    type: { en: "Production Line Engineering", ar: "هندسة خط إنتاج" },
  },
  {
    id: "gelato-brochure",
    images: ["/portfolio/gelato-lab-brochure.jpg"],
    category: "production",
    title: { en: "Gelato Lab by Santech — Carpigiani Equipment Line", ar: "مختبر الجيلاتو من Santech — خط معدات Carpigiani" },
    client: { en: "Santech Gelato Solutions", ar: "حلول جيلاتو Santech" },
    location: { en: "Turnkey Solution", ar: "حل تسليم مفتاح" },
    type: { en: "Gelato Production Line", ar: "خط إنتاج جيلاتو" },
  },
  {
    id: "alrajab",
    images: [
      "/portfolio/alrajab-store-overview.jpg",
      "/portfolio/alrajab-pastry-display.jpg",
      "/portfolio/alrajab-vertical-display.jpg",
      "/portfolio/alrajab-layout-plan.jpg",
    ],
    category: "retail",
    title: { en: "Al-Rajab Patisserie — Full Store Fit-Out", ar: "حلوى الرجب — تجهيز المحل الكامل" },
    client: { en: "Al-Rajab", ar: "الرجب" },
    location: { en: "Syria", ar: "سوريا" },
    type: { en: "Patisserie & Sweet Shop — ISA Display Systems", ar: "محل حلويات — أنظمة عرض ISA" },
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
  const [openProject, setOpenProject] = useState<number | null>(null);
  const [imgIndex, setImgIndex] = useState(0);

  const filtered = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  const current = openProject !== null ? filtered[openProject] : null;
  const totalImgs = current ? current.images.length : 0;

  useEffect(() => {
    if (current === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenProject(null);
      if (e.key === "ArrowRight") setImgIndex((i) => (i + 1) % totalImgs);
      if (e.key === "ArrowLeft") setImgIndex((i) => (i - 1 + totalImgs) % totalImgs);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [current, totalImgs]);

  const openAt = (i: number) => {
    setOpenProject(i);
    setImgIndex(0);
  };

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.button
                layout
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: (i % 6) * 0.05 }}
                onClick={() => openAt(i)}
                className="group relative overflow-hidden bg-secondary/30 aspect-[4/3] cursor-zoom-in text-start"
                data-testid={`portfolio-${p.id}`}
              >
                <img
                  src={p.images[0]}
                  alt={p.title[lang]}
                  loading="lazy"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06] select-none pointer-events-none"
                  style={{ WebkitUserSelect: "none", userSelect: "none" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-500" />

                <div className="absolute top-3 start-3 z-10">
                  <span className="inline-block px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] uppercase bg-accent text-accent-foreground">
                    {categoryLabels[p.category][lang]}
                  </span>
                </div>

                {p.images.length > 1 && (
                  <div className="absolute top-3 end-3 z-10">
                    <span className="inline-flex items-center gap-1 px-2 py-1 text-[10px] font-semibold bg-black/55 text-white backdrop-blur-sm rounded-sm">
                      <Images className="w-3 h-3" />
                      {p.images.length}
                    </span>
                  </div>
                )}

                <div className="absolute bottom-3 end-3 z-10 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <Maximize2 className="w-4 h-4 text-white" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-4 z-10 text-primary-foreground transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-accent mb-1.5 opacity-95 line-clamp-1">
                    {p.type[lang]}
                  </div>
                  <h3 className="font-serif font-bold text-base md:text-lg leading-tight mb-1.5 line-clamp-2 pe-10">
                    {p.title[lang]}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[11px] opacity-85 line-clamp-1">
                    <MapPin className="w-3 h-3 shrink-0" />
                    <span className="truncate">{p.client[lang]} · {p.location[lang]}</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {current && openProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setOpenProject(null)}
            onContextMenu={(e) => e.preventDefault()}
            data-testid="lightbox"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpenProject(null);
              }}
              className="absolute top-4 end-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              aria-label="Close"
              data-testid="lightbox-close"
            >
              <X className="w-5 h-5" />
            </button>

            {totalImgs > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setImgIndex((i) => (i - 1 + totalImgs) % totalImgs);
                  }}
                  className="absolute start-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setImgIndex((i) => (i + 1) % totalImgs);
                  }}
                  className="absolute end-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5 rtl:rotate-180" />
                </button>
              </>
            )}

            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                className="relative w-full flex-1 min-h-0 flex items-center justify-center touch-pan-y"
                drag={totalImgs > 1 ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  const threshold = 50;
                  if (info.offset.x < -threshold || info.velocity.x < -300) {
                    setImgIndex((i) => (i + 1) % totalImgs);
                  } else if (info.offset.x > threshold || info.velocity.x > 300) {
                    setImgIndex((i) => (i - 1 + totalImgs) % totalImgs);
                  }
                }}
              >
                <motion.img
                  key={current.images[imgIndex]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  src={current.images[imgIndex]}
                  alt={current.title[lang]}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  className="max-w-full max-h-[70vh] object-contain select-none pointer-events-none"
                  style={{ WebkitUserSelect: "none", userSelect: "none", WebkitTouchCallout: "none" }}
                />
              </motion.div>
              <div className="w-full max-w-3xl mt-4 text-center text-white">
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
                {totalImgs > 1 && (
                  <>
                    <div className="flex items-center justify-center gap-1.5 mt-4">
                      {current.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setImgIndex(idx);
                          }}
                          className={`h-1.5 rounded-full transition-all ${
                            idx === imgIndex ? "w-6 bg-accent" : "w-1.5 bg-white/30 hover:bg-white/60"
                          }`}
                          aria-label={`Image ${idx + 1}`}
                        />
                      ))}
                    </div>
                    <div className="text-[10px] text-white/40 mt-2 tracking-wider">
                      {imgIndex + 1} / {totalImgs}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
