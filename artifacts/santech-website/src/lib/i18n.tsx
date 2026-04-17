import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "en" | "ar";

type Dict = Record<string, string>;

const en: Dict = {
  // Nav
  "nav.home": "Home",
  "nav.about": "About",
  "nav.services": "Services",
  "nav.partners": "Partners",
  "nav.contact": "Contact",
  "nav.cta": "Get a Quote",
  "brand.name": "SANTECH",
  "brand.tagline": "TRADING CO.",

  // Hero
  "hero.badge": "Premium HoReCa Equipment",
  "hero.title.1": "Engineering",
  "hero.title.2": "Culinary",
  "hero.title.3": "Excellence",
  "hero.subtitle": "The trusted partner for food service professionals across the Middle East. From bespoke AutoCAD design to premium international supply and expert installation.",
  "hero.cta.primary": "Request Consultation",
  "hero.cta.secondary": "Discover Santech",
  "hero.scroll": "Scroll",

  // Trust Bar
  "trust.heritage": "Established",
  "trust.brands": "Premium Brands",
  "trust.projects": "Kitchens Delivered",
  "trust.italian": "European Quality",

  // Why Us
  "why.eyebrow": "Why Santech",
  "why.title.1": "The Santech",
  "why.title.2": "Difference",
  "why.intro": "Five reasons leading hotels, restaurants, and patisseries across Syria and the Middle East trust us with the heart of their business.",
  "why.1.title": "Italian Excellence, Local Expertise",
  "why.1.desc": "Direct partnerships with Italy's most prestigious manufacturers, paired with deep regional knowledge of Syrian and Middle Eastern food service operations.",
  "why.2.title": "Single-Source Accountability",
  "why.2.desc": "From design to commissioning, one trusted team owns the project. No finger-pointing between vendors — just clear accountability and seamless delivery.",
  "why.3.title": "Three Decades of Heritage",
  "why.3.desc": "Backed by Syrian House Group's 30+ years pioneering food service excellence across Africa and the Middle East. Our track record speaks for itself.",
  "why.4.title": "AutoCAD Precision Design",
  "why.4.desc": "Every project starts with engineered drawings — no guesswork. Our in-house CAD studio optimizes every centimeter for workflow, hygiene, and performance.",
  "why.5.title": "Long-Term Partnership",
  "why.5.desc": "We don't disappear after delivery. Spare parts, scheduled maintenance, staff training, and 24/7 support keep your operation running flawlessly for years.",

  // About
  "about.eyebrow": "Who We Are",
  "about.title.1": "Three Decades of",
  "about.title.2": "Food Service",
  "about.title.3": "Excellence",
  "about.p1": "Santech Trading Co. was established in 2017 as the Syrian arm of the Syrian House Group, bringing decades of food service expertise from Sudan — where SHG has been a market leader since 1991 serving pastry shops, restaurants, and gelato studios across Africa.",
  "about.p2": "Based in Damascus, our mission is to be the trusted partner for every food service professional in Syria and the wider Middle East. We bring only premium, internationally certified equipment — paired with end-to-end consultancy, AutoCAD kitchen design, installation, and training. From a boutique patisserie to a five-star hotel catering kitchen, we deliver world-class solutions at every scale.",
  "about.divider": "Part of Syrian House Group",
  "about.stat1.value": "30+",
  "about.stat1.label": "Years of Experience",
  "about.stat2.value": "500+",
  "about.stat2.label": "Projects Completed",
  "about.stat3.value": "18+",
  "about.stat3.label": "Premium Brand Partners",
  "about.stat4.value": "100%",
  "about.stat4.label": "Customer Satisfaction Focus",
  "about.callout.eyebrow": "In-House Design Studio",
  "about.callout.title": "Professional AutoCAD Kitchen Design",
  "about.callout.text": "Our in-house design team uses professional AutoCAD systems to prepare precise kitchen layouts tailored to every client's requirements — from spatial planning to equipment positioning and workflow optimization. Every detail matters when designing the heart of a food operation.",

  // Services
  "services.eyebrow": "What We Do",
  "services.title.1": "End-to-End",
  "services.title.2": "Food Service",
  "services.title.3": "Solutions",
  "services.intro": "From the first consultation sketch to long-term support, Santech delivers a complete ecosystem of professional services — so you never have to manage multiple vendors.",
  "services.1.title": "Consultancy & Planning",
  "services.1.desc": "Expert guidance from concept to completion. We analyze your space, workflow, budget, and operational needs to design the optimal food service solution.",
  "services.2.title": "AutoCAD Kitchen Design",
  "services.2.desc": "Professional computerized kitchen layouts drawn to precise specifications. Every dimension, equipment placement, and flow pattern is optimized before procurement begins.",
  "services.3.title": "Equipment Supply",
  "services.3.desc": "Direct access to 18+ premium international brands — Electrolux, Carpigiani, LaCimbali, UNOX, and more. We source only certified, industry-grade equipment.",
  "services.4.title": "Installation & Commissioning",
  "services.4.desc": "Full professional installation by trained technicians. Every machine is commissioned, tested, and calibrated to manufacturer specifications before handover.",
  "services.5.title": "Training & Certification",
  "services.5.desc": "Hands-on operational training for your team in partnership with our international suppliers. Your staff learns directly from the experts who built the equipment.",
  "services.6.title": "After-Sales Support",
  "services.6.desc": "Long-term partnership beyond the sale. Maintenance programs, spare parts availability, and technical support to keep your kitchen at peak performance.",

  // Partners
  "partners.eyebrow": "Our Partners",
  "partners.title.1": "World-Class Brands,",
  "partners.title.2": "One Trusted Partner",
  "partners.intro": "We are the authorized distributor for 18+ premium international equipment manufacturers — each selected for their uncompromising quality, innovation, and service standards.",
  "partners.cta.text": "Not sure which brand fits your needs?",
  "partners.cta.link": "Talk to our specialists.",
  "partners.cat.1": "Gelato & Ice Cream",
  "partners.cat.2": "Professional Baking",
  "partners.cat.3": "Coffee Systems",
  "partners.cat.4": "Refrigeration",
  "partners.cat.5": "Food Processing",
  "partners.cat.6": "Kitchen Workflow",

  // Contact
  "contact.eyebrow": "Get In Touch",
  "contact.title.1": "Let's Build Your",
  "contact.title.2": "Perfect Kitchen",
  "contact.intro": "Whether you're opening a new restaurant, expanding your hotel catering, or upgrading your pastry studio — our team is ready to consult, design, and supply.",
  "contact.label.address": "Address",
  "contact.address": "Mazzeh Autostrada, 2/6 Complex\nDamascus, Syria",
  "contact.label.phone": "Phone",
  "contact.label.email": "Email",
  "contact.gm.label": "General Manager",
  "contact.gm.name": "Dr. Ahmed Wasil Mongid",
  "form.name": "Full Name *",
  "form.name.ph": "John Smith",
  "form.company": "Company",
  "form.company.ph": "Restaurant / Hotel Name",
  "form.email": "Email *",
  "form.email.ph": "you@company.com",
  "form.phone": "Phone",
  "form.phone.ph": "+963 ...",
  "form.message": "Message *",
  "form.message.ph": "Tell us about your project — type of establishment, scale, specific equipment needs, timeline...",
  "form.submit": "Send Message",
  "form.submit.loading": "Sending...",
  "form.disclaimer": "We typically respond within 24 hours on business days.",
  "form.success.title": "Message Received",
  "form.success.text": "Thank you for reaching out. A member of our team will respond within one business day.",

  // Footer
  "footer.tagline": "Premium HoReCa professional equipment distributor across the Middle East. Excellence in design, supply, and support.",
  "footer.contact.title": "Contact Info",
  "footer.links.title": "Quick Links",
  "footer.gm": "General Manager:",
  "footer.copyright": "© {year} Santech Trading Co. (STC). All rights reserved.",
  "footer.shg": "Part of Syrian House Group",
};

const ar: Dict = {
  // Nav
  "nav.home": "الرئيسية",
  "nav.about": "من نحن",
  "nav.services": "خدماتنا",
  "nav.partners": "شركاؤنا",
  "nav.contact": "تواصل معنا",
  "nav.cta": "اطلب عرض سعر",
  "brand.name": "سانتك",
  "brand.tagline": "للتجارة",

  // Hero
  "hero.badge": "معدات HoReCa الاحترافية",
  "hero.title.1": "هندسة",
  "hero.title.2": "التميز",
  "hero.title.3": "في عالم الطهي",
  "hero.subtitle": "الشريك الموثوق لمحترفي خدمات الطعام في الشرق الأوسط. من تصميم المطابخ بنظام AutoCAD إلى التوريد العالمي والتركيب الاحترافي.",
  "hero.cta.primary": "اطلب استشارة",
  "hero.cta.secondary": "اكتشف سانتك",
  "hero.scroll": "اسحب للأسفل",

  // Trust Bar
  "trust.heritage": "تأسست عام",
  "trust.brands": "علامة تجارية عالمية",
  "trust.projects": "مطبخ تم تجهيزه",
  "trust.italian": "جودة أوروبية",

  // Why Us
  "why.eyebrow": "لماذا سانتك",
  "why.title.1": "الفرق",
  "why.title.2": "مع سانتك",
  "why.intro": "خمسة أسباب تجعل أبرز الفنادق والمطاعم ومحلات الحلويات في سوريا والشرق الأوسط يثقون بنا في قلب أعمالهم.",
  "why.1.title": "تميز إيطالي وخبرة محلية",
  "why.1.desc": "شراكات مباشرة مع أعرق المصنعين الإيطاليين، مقترنة بمعرفة عميقة بأسواق الخدمات الغذائية في سوريا والشرق الأوسط.",
  "why.2.title": "مسؤولية موحدة من نقطة واحدة",
  "why.2.desc": "من التصميم إلى التشغيل، فريق واحد موثوق يدير المشروع بأكمله. لا تشتيت بين موردين متعددين، بل مسؤولية واضحة وتنفيذ سلس.",
  "why.3.title": "إرث ثلاثة عقود",
  "why.3.desc": "مدعومون بأكثر من 30 عاماً من ريادة مجموعة البيت السوري في خدمات الأغذية عبر أفريقيا والشرق الأوسط. سجلنا يتحدث عن نفسه.",
  "why.4.title": "تصميم AutoCAD احترافي",
  "why.4.desc": "كل مشروع يبدأ برسومات هندسية دقيقة — لا مكان للتخمين. استوديو التصميم لدينا يحسّن كل سنتيمتر لتحقيق أفضل أداء وكفاءة.",
  "why.5.title": "شراكة طويلة الأمد",
  "why.5.desc": "لا نختفي بعد التسليم. قطع الغيار، الصيانة الدورية، تدريب الكوادر، ودعم على مدار الساعة لضمان استمرار عملك بكفاءة لسنوات.",

  // About
  "about.eyebrow": "من نحن",
  "about.title.1": "ثلاثة عقود من",
  "about.title.2": "التميز",
  "about.title.3": "في خدمات الطعام",
  "about.p1": "تأسست شركة سانتك للتجارة عام 2017 كذراع سورية لمجموعة Syrian House، حاملةً معها عقوداً من الخبرة في خدمات الطعام من السودان — حيث كانت SHG رائدة في السوق منذ عام 1991 خدمةً لمحلات الحلويات والمطاعم وصالات الجيلاتو في إفريقيا.",
  "about.p2": "من مقرنا في دمشق، رسالتنا أن نكون الشريك الموثوق لكل محترف في خدمات الطعام في سوريا والشرق الأوسط. نحن نوفر فقط المعدات الفاخرة المعتمدة دولياً — مع خدمات استشارية شاملة، وتصميم مطابخ احترافي بنظام AutoCAD، وتركيب وتدريب. من محل حلويات صغير إلى مطبخ تجهيز فندق خمس نجوم، نقدم حلولاً عالمية بكل المقاييس.",
  "about.divider": "جزء من مجموعة Syrian House",
  "about.stat1.value": "+30",
  "about.stat1.label": "سنة من الخبرة",
  "about.stat2.value": "+500",
  "about.stat2.label": "مشروع منجز",
  "about.stat3.value": "+18",
  "about.stat3.label": "علامة تجارية فاخرة",
  "about.stat4.value": "100%",
  "about.stat4.label": "تركيز على رضا العميل",
  "about.callout.eyebrow": "استوديو التصميم الداخلي",
  "about.callout.title": "تصميم مطابخ احترافي بنظام AutoCAD",
  "about.callout.text": "يستخدم فريق التصميم الداخلي لدينا أنظمة AutoCAD الاحترافية لإعداد مخططات مطابخ دقيقة مصممة خصيصاً لمتطلبات كل عميل — من التخطيط المكاني إلى توزيع المعدات وتحسين سير العمل. كل تفصيل يهم عند تصميم قلب أي عملية غذائية.",

  // Services
  "services.eyebrow": "ماذا نقدم",
  "services.title.1": "حلول",
  "services.title.2": "متكاملة",
  "services.title.3": "لخدمات الطعام",
  "services.intro": "من رسم الاستشارة الأولى إلى الدعم طويل الأمد، تقدم سانتك منظومة كاملة من الخدمات الاحترافية — لتُغنيك عن التعامل مع موردين متعددين.",
  "services.1.title": "الاستشارة والتخطيط",
  "services.1.desc": "إرشاد متخصص من الفكرة إلى التنفيذ. نحلل المساحة وسير العمل والميزانية والاحتياجات التشغيلية لتصميم الحل الأمثل لخدمة الطعام.",
  "services.2.title": "تصميم المطابخ بـ AutoCAD",
  "services.2.desc": "مخططات مطابخ احترافية محوسبة بمواصفات دقيقة. كل بُعد وموضع معدات وسير عمل يتم تحسينه قبل بدء التوريد.",
  "services.3.title": "توريد المعدات",
  "services.3.desc": "وصول مباشر إلى أكثر من 18 علامة تجارية عالمية — Electrolux، Carpigiani، LaCimbali، UNOX، وغيرها. نوفر فقط معدات معتمدة بمستوى صناعي.",
  "services.4.title": "التركيب والتشغيل",
  "services.4.desc": "تركيب احترافي شامل بواسطة فنيين مدربين. كل آلة يتم تشغيلها واختبارها ومعايرتها وفق مواصفات الشركة المصنعة قبل التسليم.",
  "services.5.title": "التدريب والاعتماد",
  "services.5.desc": "تدريب تشغيلي عملي لفريقك بالشراكة مع موردينا الدوليين. يتعلم موظفوك مباشرة من الخبراء الذين بنوا المعدات.",
  "services.6.title": "خدمات ما بعد البيع",
  "services.6.desc": "شراكة طويلة الأمد بعد البيع. برامج صيانة، توفر قطع الغيار، ودعم فني للحفاظ على أداء مطبخك في أعلى مستوياته.",

  // Partners
  "partners.eyebrow": "شركاؤنا",
  "partners.title.1": "علامات عالمية،",
  "partners.title.2": "شريك واحد موثوق",
  "partners.intro": "نحن الموزع المعتمد لأكثر من 18 شركة مصنعة عالمية للمعدات الفاخرة — كل واحدة منها مختارة لجودتها التي لا تساوم وابتكارها ومعايير خدمتها.",
  "partners.cta.text": "لست متأكداً أي علامة تناسب احتياجاتك؟",
  "partners.cta.link": "تحدث مع متخصصينا.",
  "partners.cat.1": "الجيلاتو والآيس كريم",
  "partners.cat.2": "المخبوزات الاحترافية",
  "partners.cat.3": "أنظمة القهوة",
  "partners.cat.4": "التبريد",
  "partners.cat.5": "تجهيز الطعام",
  "partners.cat.6": "سير عمل المطبخ",

  // Contact
  "contact.eyebrow": "تواصل معنا",
  "contact.title.1": "لنبنِ معاً",
  "contact.title.2": "مطبخك المثالي",
  "contact.intro": "سواء كنت تفتتح مطعماً جديداً، أو توسع تجهيز فندقك، أو تطور استوديو الحلويات لديك — فريقنا جاهز للاستشارة والتصميم والتوريد.",
  "contact.label.address": "العنوان",
  "contact.address": "أوتوستراد المزة، مجمع 2/6\nدمشق، سوريا",
  "contact.label.phone": "الهاتف",
  "contact.label.email": "البريد الإلكتروني",
  "contact.gm.label": "المدير العام",
  "contact.gm.name": "د. أحمد وصيل منجد",
  "form.name": "الاسم الكامل *",
  "form.name.ph": "محمد أحمد",
  "form.company": "الشركة",
  "form.company.ph": "اسم المطعم / الفندق",
  "form.email": "البريد الإلكتروني *",
  "form.email.ph": "you@company.com",
  "form.phone": "الهاتف",
  "form.phone.ph": "+963 ...",
  "form.message": "الرسالة *",
  "form.message.ph": "أخبرنا عن مشروعك — نوع المنشأة، الحجم، احتياجاتك من المعدات، الجدول الزمني...",
  "form.submit": "أرسل الرسالة",
  "form.submit.loading": "جارٍ الإرسال...",
  "form.disclaimer": "عادةً نرد خلال 24 ساعة في أيام العمل.",
  "form.success.title": "تم استلام رسالتك",
  "form.success.text": "شكراً لتواصلك معنا. سيرد عليك أحد أعضاء فريقنا خلال يوم عمل واحد.",

  // Footer
  "footer.tagline": "موزع معدات HoReCa الاحترافية الفاخرة في الشرق الأوسط. تميز في التصميم والتوريد والدعم.",
  "footer.contact.title": "معلومات التواصل",
  "footer.links.title": "روابط سريعة",
  "footer.gm": "المدير العام:",
  "footer.copyright": "© {year} شركة سانتك للتجارة (STC). جميع الحقوق محفوظة.",
  "footer.shg": "جزء من مجموعة Syrian House",
};

const dictionaries: Record<Lang, Dict> = { en, ar };

interface I18nContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
  dir: "ltr" | "rtl";
}

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "santech-lang";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored === "en" || stored === "ar") return stored;
    }
    return "en";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, l);
    }
  };

  const dir: "ltr" | "rtl" = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const t = (key: string, vars?: Record<string, string | number>): string => {
    let value = dictionaries[lang][key] ?? dictionaries.en[key] ?? key;
    if (vars) {
      Object.entries(vars).forEach(([k, v]) => {
        value = value.replace(`{${k}}`, String(v));
      });
    }
    return value;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t, dir }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
