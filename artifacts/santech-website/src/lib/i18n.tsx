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
  "nav.menu.open": "Open menu",
  "nav.menu.close": "Close menu",
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

  // Syria / Roots
  "syria.eyebrow": "Proudly Syrian",
  "syria.title.1": "Rooted in",
  "syria.title.2": "Damascus,",
  "syria.title.3": "Built for All of Syria",
  "syria.intro": "From the heart of the world's oldest continuously inhabited capital, we serve the entire Syrian Republic. Damascus is more than our address — it is our heritage and our promise. We believe in Syria's hospitality renaissance, and we equip the kitchens powering it.",
  "syria.hq.label": "Headquarters",
  "syria.hq.city": "Damascus",
  "syria.hq.address": "Mazzeh Autostrada, Damascus, Syria",
  "syria.coverage.title": "Nationwide Coverage",
  "syria.coverage.desc": "Delivery, installation, and after-sales support across all 14 Syrian governorates.",
  "syria.cities.aleppo": "Aleppo",
  "syria.cities.homs": "Homs",
  "syria.cities.latakia": "Latakia",
  "syria.cities.tartus": "Tartus",
  "syria.cities.hama": "Hama",
  "syria.cities.daraa": "Daraa",
  "syria.cities.deirezzor": "Deir ez-Zor",
  "syria.cities.suwayda": "As-Suwayda",
  "syria.cities.raqqa": "Ar-Raqqa",
  "syria.cities.idlib": "Idlib",
  "syria.cities.hasakah": "Al-Hasakah",
  "syria.cities.qamishli": "Qamishli",
  "syria.cities.quneitra": "Quneitra",
  "syria.heritage.label": "Heritage",
  "syria.heritage.title": "8,000 Years of Hospitality",
  "syria.heritage.desc": "Damascus has welcomed travelers and traders since the dawn of civilization. We carry that legacy forward in every modern kitchen we deliver.",
  "syria.landmarks.umayyad": "Umayyad Mosque",
  "syria.landmarks.citadel": "Damascus Citadel",
  "syria.landmarks.palmyra": "Palmyra",
  "syria.landmarks.krak": "Krak des Chevaliers",
  "syria.landmarks.aleppo": "Aleppo Citadel",
  "syria.landmarks.label": "Inspired by",

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

  // Industries
  "industries.eyebrow": "Industries We Serve",
  "industries.title.1": "Tailored Solutions for",
  "industries.title.2": "Every Food Service Sector",
  "industries.intro": "Whatever your operation, we have equipped one like it. From boutique cafés to industrial central kitchens, our solutions scale to your ambition.",
  "industries.1.title": "Hotels & Resorts",
  "industries.1.desc": "Full kitchen brigades, banquet halls, room service operations, and all-day dining venues for 3 to 5-star properties.",
  "industries.2.title": "Restaurants",
  "industries.2.desc": "Fine dining, casual concepts, fast-casual chains, and ghost kitchens — engineered for speed, consistency, and chef performance.",
  "industries.3.title": "Cafés & Coffee Shops",
  "industries.3.desc": "Specialty espresso bars, third-wave roasters, and café concepts equipped with world-class brewing systems.",
  "industries.4.title": "Cloud Kitchens",
  "industries.4.desc": "High-output delivery-only operations with optimized workflows for multi-brand, high-velocity production.",
  "industries.5.title": "Catering Companies",
  "industries.5.desc": "Central production kitchens, banquet equipment, and mobile catering setups for events of any scale.",
  "industries.6.title": "Bakeries & Patisseries",
  "industries.6.desc": "Artisan bakeries, pastry studios, gelato labs, and chocolate workshops with precision Italian equipment.",
  "industries.7.title": "Hospitals & Healthcare",
  "industries.7.desc": "High-volume institutional kitchens meeting strict hygiene, dietary, and food safety standards.",
  "industries.8.title": "Schools & Universities",
  "industries.8.desc": "Cafeterias, dormitory dining, and educational catering operations designed for high-throughput service.",

  // Process
  "process.eyebrow": "Our Process",
  "process.title.1": "From Concept to",
  "process.title.2": "Commissioning",
  "process.intro": "A proven six-step methodology that turns your vision into a fully operational, professional kitchen — on time, on budget, on standard.",
  "process.1.title": "Consultation",
  "process.1.desc": "We listen. We assess your concept, menu, volume, space, and budget — then identify the path that maximizes your return.",
  "process.2.title": "AutoCAD Design",
  "process.2.desc": "Our engineers produce precision drawings — equipment placement, utility lines, ventilation, and workflow optimized to the centimeter.",
  "process.3.title": "Procurement",
  "process.3.desc": "We source directly from 18+ certified manufacturers in Europe and beyond. Logistics, customs, and delivery handled end-to-end.",
  "process.4.title": "Installation",
  "process.4.desc": "Our trained technicians install, connect, and integrate every piece — coordinating with contractors, plumbers, and electricians.",
  "process.5.title": "Training",
  "process.5.desc": "We don't leave until your team is confident. Operational training, manufacturer certifications, and ongoing knowledge transfer.",
  "process.6.title": "Service & Support",
  "process.6.desc": "Genuine spare parts in stock, scheduled maintenance, 24/7 emergency response — your kitchen runs flawlessly for years.",

  // Projects
  "projects.eyebrow": "Selected Projects",
  "projects.title.1": "Kitchens We've",
  "projects.title.2": "Brought to Life",
  "projects.intro": "A glimpse into the variety of food service operations we have designed, supplied, and commissioned across Syria and the region.",
  "projects.scale": "Scale",
  "projects.scope": "Scope",
  "projects.location": "Location",
  "projects.year": "Year",
  "projects.1.type": "Five-Star Hotel",
  "projects.1.title": "Banquet & Main Production Kitchen",
  "projects.1.location": "Damascus",
  "projects.1.year": "2024",
  "projects.1.scale": "1,200 m²",
  "projects.1.scope": "Full design, supply & installation — 80+ pieces of professional equipment serving 3 outlets and a 600-guest banquet hall.",
  "projects.2.type": "Cloud Kitchen Network",
  "projects.2.title": "Multi-Brand Production Hub",
  "projects.2.location": "Aleppo",
  "projects.2.year": "2024",
  "projects.2.scale": "450 m²",
  "projects.2.scope": "High-velocity production line for 6 delivery brands, optimized for 800+ orders per day with zero cross-contamination.",
  "projects.3.type": "Patisserie & Gelato",
  "projects.3.title": "Premium Pastry & Gelato Studio",
  "projects.3.location": "Latakia",
  "projects.3.year": "2023",
  "projects.3.scale": "180 m²",
  "projects.3.scope": "Carpigiani gelato production line, full pastry lab, and retail display — boutique concept built around Italian craftsmanship.",
  "projects.4.type": "Restaurant Chain",
  "projects.4.title": "Central Production Kitchen",
  "projects.4.location": "Homs",
  "projects.4.year": "2023",
  "projects.4.scale": "650 m²",
  "projects.4.scope": "Centralized prep facility serving 12 outlets — from butchery and cold prep to high-volume cooking and packaging.",

  // Testimonials
  "testimonials.eyebrow": "Client Voices",
  "testimonials.title.1": "What Operators",
  "testimonials.title.2": "Say About Us",
  "testimonials.intro": "Don't take our word for it. Hear from the chefs, owners, and operators who trust Santech with the heart of their business.",
  "testimonials.1.quote": "Santech delivered a turnkey kitchen that exceeded our expectations. From the AutoCAD drawings to the final commissioning, every detail was handled with European-level professionalism.",
  "testimonials.1.name": "Hotel General Manager",
  "testimonials.1.role": "Five-Star Property, Damascus",
  "testimonials.2.quote": "We compared four suppliers. Santech was the only one who actually visited our space, understood our menu, and proposed a layout that improved our throughput by 35%. They earned our business.",
  "testimonials.2.name": "Operations Director",
  "testimonials.2.role": "Cloud Kitchen Network",
  "testimonials.3.quote": "Their after-sales service is what keeps us coming back. Spare parts arrive fast, technicians know the equipment inside out, and downtime is virtually zero. A true long-term partner.",
  "testimonials.3.name": "Executive Chef",
  "testimonials.3.role": "Restaurant Group, Aleppo",

  // Leadership
  "leadership.eyebrow": "Our Leadership",
  "leadership.title.1": "The People",
  "leadership.title.2": "Behind Santech",
  "leadership.intro": "Decades of food service expertise, engineering rigor, and unwavering commitment to client success — that's the team you partner with.",
  "leadership.1.name": "Dr. Ahmed Wasil Mongid",
  "leadership.1.role": "General Manager",
  "leadership.1.bio": "Leading Santech's vision in Syria with three decades of regional food service expertise.",
  "leadership.2.role": "Sales & Business Development Director",
  "leadership.2.bio": "Building lasting partnerships with hotels, restaurants, and catering operators across the Middle East.",
  "leadership.3.role": "Technical & Engineering Director",
  "leadership.3.bio": "Overseeing installation, commissioning, and after-sales operations with manufacturer-certified expertise.",
  "leadership.4.role": "Design Studio Lead",
  "leadership.4.bio": "Heading our in-house AutoCAD team that engineers every kitchen to its optimal flow and performance.",

  // Certifications
  "certifications.eyebrow": "Standards & Authorizations",
  "certifications.title.1": "Certified Excellence,",
  "certifications.title.2": "Verifiable Quality",
  "certifications.intro": "Every brand we represent meets internationally recognized standards. Every project is executed to the same uncompromising benchmarks.",
  "certifications.1.name": "CE Marking",
  "certifications.1.desc": "European safety & performance",
  "certifications.2.name": "ISO 9001",
  "certifications.2.desc": "Quality management systems",
  "certifications.3.name": "NSF International",
  "certifications.3.desc": "Public health & food safety",
  "certifications.4.name": "HACCP Compliant",
  "certifications.4.desc": "Hazard analysis & critical control",
  "certifications.5.name": "ETL Listed",
  "certifications.5.desc": "Electrical & mechanical safety",
  "certifications.6.name": "Authorized Distributor",
  "certifications.6.desc": "Direct manufacturer partnerships",

  // Catalog CTA
  "catalog.eyebrow": "Resources",
  "catalog.title": "Download Our Complete Catalog",
  "catalog.desc": "Browse our full range of premium HoReCa equipment, brand portfolios, and project case studies — all in one comprehensive PDF.",
  "catalog.button": "Download Catalog (PDF)",
  "catalog.note": "Free download · Updated quarterly · 18+ brands",

  // Showroom
  "showroom.eyebrow": "Visit Our Showroom",
  "showroom.title.1": "Step Into Our",
  "showroom.title.2": "Damascus Showroom",
  "showroom.description":
    "Experience our curated selection of premium HoReCa equipment first-hand. Our team of specialists is ready to walk you through live demonstrations, kitchen layouts, and tailored solutions for your project.",
  "showroom.location": "Mazzeh, Damascus",
  "showroom.hours": "Sat–Thu · 9:00 AM – 6:00 PM",
  "showroom.cta.directions": "Get Directions",
  "showroom.cta.contact": "Schedule a Visit",
  "showroom.live": "Open Now",
  "showroom.card.title": "Modern Showroom & Headquarters",
  "showroom.card.desc":
    "Our flagship space features working displays from 18+ international brands across all professional kitchen categories.",
  "showroom.card.area": "Showroom",
  "showroom.card.brands": "Brands",
  "showroom.imageAlt": "Santech Trading Co. storefront in Damascus at night, illuminated signage",

  // Floating CTA
  "fab.whatsapp": "Chat on WhatsApp",
  "fab.quote": "Get a Quote",
  "fab.open": "Open quick actions",
  "fab.close": "Close quick actions",

  // Map
  "map.label": "Find Us",
  "map.directions": "Get Directions",
};

const ar: Dict = {
  // Nav
  "nav.home": "الرئيسية",
  "nav.about": "من نحن",
  "nav.services": "خدماتنا",
  "nav.partners": "شركاؤنا",
  "nav.contact": "تواصل معنا",
  "nav.cta": "اطلب عرض سعر",
  "nav.menu.open": "افتح القائمة",
  "nav.menu.close": "أغلق القائمة",
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

  // Syria / Roots
  "syria.eyebrow": "بفخر سوري",
  "syria.title.1": "متجذرون في",
  "syria.title.2": "دمشق،",
  "syria.title.3": "نخدم سوريا بأكملها",
  "syria.intro": "من قلب أقدم عاصمة مأهولة في العالم، نخدم الجمهورية العربية السورية بكاملها. دمشق ليست مجرد عنوان لنا — بل هي إرثنا ووعدنا. نؤمن بنهضة الضيافة في سوريا، ونجهّز المطابخ التي تقودها.",
  "syria.hq.label": "المقر الرئيسي",
  "syria.hq.city": "دمشق",
  "syria.hq.address": "أوتوستراد المزة، دمشق، سوريا",
  "syria.coverage.title": "تغطية وطنية شاملة",
  "syria.coverage.desc": "توصيل وتركيب وخدمات ما بعد البيع في جميع المحافظات السورية الأربعة عشر.",
  "syria.cities.aleppo": "حلب",
  "syria.cities.homs": "حمص",
  "syria.cities.latakia": "اللاذقية",
  "syria.cities.tartus": "طرطوس",
  "syria.cities.hama": "حماة",
  "syria.cities.daraa": "درعا",
  "syria.cities.deirezzor": "دير الزور",
  "syria.cities.suwayda": "السويداء",
  "syria.cities.raqqa": "الرقة",
  "syria.cities.idlib": "إدلب",
  "syria.cities.hasakah": "الحسكة",
  "syria.cities.qamishli": "القامشلي",
  "syria.cities.quneitra": "القنيطرة",
  "syria.heritage.label": "الإرث",
  "syria.heritage.title": "ثمانية آلاف عام من الضيافة",
  "syria.heritage.desc": "دمشق ترحّب بالمسافرين والتجار منذ فجر الحضارة. نحمل هذا الإرث في كل مطبخ حديث نقدّمه.",
  "syria.landmarks.umayyad": "الجامع الأموي",
  "syria.landmarks.citadel": "قلعة دمشق",
  "syria.landmarks.palmyra": "تدمر",
  "syria.landmarks.krak": "قلعة الحصن",
  "syria.landmarks.aleppo": "قلعة حلب",
  "syria.landmarks.label": "بإلهام من",

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

  // Industries
  "industries.eyebrow": "القطاعات التي نخدمها",
  "industries.title.1": "حلول مفصلة لكل",
  "industries.title.2": "قطاعات خدمات الطعام",
  "industries.intro": "أياً كانت طبيعة عملك، فقد جهّزنا مثله. من المقاهي البوتيكية إلى المطابخ المركزية الصناعية، حلولنا تتسع لطموحك.",
  "industries.1.title": "الفنادق والمنتجعات",
  "industries.1.desc": "مطابخ متكاملة، قاعات حفلات، خدمات الغرف، ومطاعم على مدار اليوم لفنادق 3 إلى 5 نجوم.",
  "industries.2.title": "المطاعم",
  "industries.2.desc": "المطاعم الفاخرة، السلاسل السريعة، والمطابخ الافتراضية — مصممة للسرعة والاتساق وأداء الشيف.",
  "industries.3.title": "المقاهي والكافيهات",
  "industries.3.desc": "بارات الإسبريسو المتخصصة، محمصات القهوة، ومفاهيم المقاهي المجهزة بأنظمة تخمير عالمية.",
  "industries.4.title": "المطابخ السحابية",
  "industries.4.desc": "عمليات إنتاج للتوصيل فقط بإنتاجية عالية وسير عمل محسّن لعدة علامات تجارية بسرعة كبيرة.",
  "industries.5.title": "شركات التموين",
  "industries.5.desc": "مطابخ إنتاج مركزية، معدات حفلات، وتجهيزات تموين متنقلة لفعاليات بأي حجم.",
  "industries.6.title": "المخابز ومحلات الحلويات",
  "industries.6.desc": "مخابز حرفية، استوديوهات حلويات، مختبرات جيلاتو، وورش شوكولاتة بمعدات إيطالية دقيقة.",
  "industries.7.title": "المستشفيات والقطاع الصحي",
  "industries.7.desc": "مطابخ مؤسسية بحجم كبير تلبي معايير صارمة للنظافة والحمية وسلامة الغذاء.",
  "industries.8.title": "المدارس والجامعات",
  "industries.8.desc": "مقاصف، مطاعم سكن طلابي، وعمليات تموين تعليمية مصممة لخدمة عالية الإنتاجية.",

  // Process
  "process.eyebrow": "منهجية عملنا",
  "process.title.1": "من الفكرة إلى",
  "process.title.2": "التشغيل الكامل",
  "process.intro": "منهجية مجرّبة من ست خطوات تحول رؤيتك إلى مطبخ احترافي يعمل بكامل طاقته — في الوقت المحدد، ضمن الميزانية، وبأعلى المعايير.",
  "process.1.title": "الاستشارة",
  "process.1.desc": "نستمع. نقيّم مفهومك ومنيوك وحجم العمل والمساحة والميزانية — ثم نحدد المسار الذي يحقق أعلى عائد.",
  "process.2.title": "تصميم AutoCAD",
  "process.2.desc": "مهندسونا يعدّون رسومات دقيقة — توضع المعدات وخطوط الخدمات والتهوية وسير العمل بدقة السنتيمتر.",
  "process.3.title": "التوريد",
  "process.3.desc": "نوفر مباشرة من 18+ مصنّعاً معتمداً في أوروبا وغيرها. اللوجستيات والجمارك والشحن من البداية للنهاية.",
  "process.4.title": "التركيب",
  "process.4.desc": "فنيونا المدربون يركّبون ويوصلون كل قطعة — بالتنسيق مع المقاولين والسبّاكين والكهربائيين.",
  "process.5.title": "التدريب",
  "process.5.desc": "لا نغادر حتى يكون فريقك واثقاً. تدريب تشغيلي، شهادات من المصنّعين، ونقل مستمر للمعرفة.",
  "process.6.title": "الخدمة والدعم",
  "process.6.desc": "قطع غيار أصلية في المخزن، صيانة دورية، استجابة طوارئ على مدار الساعة — مطبخك يعمل بسلاسة لسنوات.",

  // Projects
  "projects.eyebrow": "مشاريع مختارة",
  "projects.title.1": "مطابخ",
  "projects.title.2": "أبدعنا في تنفيذها",
  "projects.intro": "لمحة عن تنوع مشاريع خدمات الطعام التي صمّمناها وجهّزناها وشغّلناها في سوريا والمنطقة.",
  "projects.scale": "المساحة",
  "projects.scope": "النطاق",
  "projects.location": "الموقع",
  "projects.year": "السنة",
  "projects.1.type": "فندق خمس نجوم",
  "projects.1.title": "مطبخ إنتاج رئيسي وقاعات حفلات",
  "projects.1.location": "دمشق",
  "projects.1.year": "2024",
  "projects.1.scale": "1,200 م²",
  "projects.1.scope": "تصميم وتوريد وتركيب كامل — أكثر من 80 قطعة معدات احترافية تخدم 3 مطاعم وقاعة حفلات لـ600 ضيف.",
  "projects.2.type": "شبكة مطابخ سحابية",
  "projects.2.title": "مركز إنتاج متعدد العلامات",
  "projects.2.location": "حلب",
  "projects.2.year": "2024",
  "projects.2.scale": "450 م²",
  "projects.2.scope": "خط إنتاج عالي السرعة لـ6 علامات توصيل، محسّن لأكثر من 800 طلب يومياً بدون أي تلوث متبادل.",
  "projects.3.type": "محل حلويات وجيلاتو",
  "projects.3.title": "استوديو حلويات وجيلاتو فاخر",
  "projects.3.location": "اللاذقية",
  "projects.3.year": "2023",
  "projects.3.scale": "180 م²",
  "projects.3.scope": "خط إنتاج جيلاتو من Carpigiani، مختبر حلويات كامل، وعرض بيع — مفهوم بوتيكي بحرفية إيطالية.",
  "projects.4.type": "سلسلة مطاعم",
  "projects.4.title": "مطبخ إنتاج مركزي",
  "projects.4.location": "حمص",
  "projects.4.year": "2023",
  "projects.4.scale": "650 م²",
  "projects.4.scope": "منشأة تحضير مركزية تخدم 12 فرعاً — من قسم اللحوم والتحضير البارد إلى الطهي والتعبئة.",

  // Testimonials
  "testimonials.eyebrow": "آراء عملائنا",
  "testimonials.title.1": "ماذا يقول",
  "testimonials.title.2": "المشغّلون عنّا",
  "testimonials.intro": "لا تأخذ كلامنا فحسب. استمع إلى الطهاة وأصحاب المنشآت والمشغّلين الذين يأتمنون سانتك على قلب أعمالهم.",
  "testimonials.1.quote": "قدّمت سانتك مطبخاً جاهزاً تجاوز توقعاتنا. من رسومات AutoCAD إلى التشغيل النهائي، كل تفصيل عُولج باحترافية أوروبية.",
  "testimonials.1.name": "المدير العام لفندق",
  "testimonials.1.role": "فندق خمس نجوم، دمشق",
  "testimonials.2.quote": "قارنّا بين أربعة موردين. سانتك كانت الوحيدة التي زارت الموقع فعلاً، وفهمت منيونا، واقترحت تصميماً رفع إنتاجيتنا 35%. كسبوا ثقتنا.",
  "testimonials.2.name": "مدير العمليات",
  "testimonials.2.role": "شبكة مطابخ سحابية",
  "testimonials.3.quote": "خدمة ما بعد البيع هي ما يجعلنا نعود إليهم. قطع الغيار تصل بسرعة، الفنيون يعرفون المعدات تماماً، وتوقف العمل شبه معدوم. شريك حقيقي طويل الأمد.",
  "testimonials.3.name": "الشيف التنفيذي",
  "testimonials.3.role": "مجموعة مطاعم، حلب",

  // Leadership
  "leadership.eyebrow": "قيادتنا",
  "leadership.title.1": "الأشخاص",
  "leadership.title.2": "خلف سانتك",
  "leadership.intro": "عقود من الخبرة في خدمات الطعام، صرامة هندسية، والتزام لا يلين بنجاح العميل — هذا هو الفريق الذي تعمل معه.",
  "leadership.1.name": "د. أحمد وصيل منجد",
  "leadership.1.role": "المدير العام",
  "leadership.1.bio": "يقود رؤية سانتك في سوريا بثلاثة عقود من الخبرة الإقليمية في خدمات الطعام.",
  "leadership.2.role": "مدير المبيعات وتطوير الأعمال",
  "leadership.2.bio": "يبني شراكات دائمة مع الفنادق والمطاعم وشركات التموين في الشرق الأوسط.",
  "leadership.3.role": "المدير الفني والهندسي",
  "leadership.3.bio": "يشرف على التركيب والتشغيل وعمليات ما بعد البيع بخبرة معتمدة من المصنّعين.",
  "leadership.4.role": "رئيس استوديو التصميم",
  "leadership.4.bio": "يقود فريق AutoCAD الداخلي الذي يهندس كل مطبخ لتدفق وأداء مثاليين.",

  // Certifications
  "certifications.eyebrow": "المعايير والاعتمادات",
  "certifications.title.1": "تميز معتمد،",
  "certifications.title.2": "جودة قابلة للتحقق",
  "certifications.intro": "كل علامة تجارية نمثلها تلتزم بمعايير معترف بها دولياً. كل مشروع نُنفّذه يلتزم بنفس المرجعيات الصارمة.",
  "certifications.1.name": "علامة CE",
  "certifications.1.desc": "السلامة والأداء الأوروبي",
  "certifications.2.name": "ISO 9001",
  "certifications.2.desc": "أنظمة إدارة الجودة",
  "certifications.3.name": "NSF International",
  "certifications.3.desc": "الصحة العامة وسلامة الغذاء",
  "certifications.4.name": "متوافق مع HACCP",
  "certifications.4.desc": "تحليل المخاطر ونقاط التحكم",
  "certifications.5.name": "معتمد من ETL",
  "certifications.5.desc": "السلامة الكهربائية والميكانيكية",
  "certifications.6.name": "موزع معتمد",
  "certifications.6.desc": "شراكات مباشرة مع المصنّعين",

  // Catalog CTA
  "catalog.eyebrow": "موارد",
  "catalog.title": "حمّل كتالوجنا الكامل",
  "catalog.desc": "تصفّح مجموعتنا الكاملة من معدات HoReCa الفاخرة، ومحافظ العلامات التجارية، ودراسات الحالات — كلها في ملف PDF شامل.",
  "catalog.button": "حمّل الكتالوج (PDF)",
  "catalog.note": "تحميل مجاني · يُحدّث ربع سنوياً · أكثر من 18 علامة",

  // Showroom
  "showroom.eyebrow": "زورونا في المعرض",
  "showroom.title.1": "ادخلوا إلى",
  "showroom.title.2": "معرضنا في دمشق",
  "showroom.description":
    "تعرّفوا على مجموعتنا المختارة من معدات HoReCa الفاخرة عن قرب. فريقنا من المختصين جاهز لاصطحابكم في جولة تفاعلية مع عروض حية وتصاميم مطابخ وحلول مخصصة لمشروعكم.",
  "showroom.location": "المزة، دمشق",
  "showroom.hours": "السبت–الخميس · 9:00 ص – 6:00 م",
  "showroom.cta.directions": "احصل على الاتجاهات",
  "showroom.cta.contact": "احجز زيارة",
  "showroom.live": "مفتوح الآن",
  "showroom.card.title": "معرض ومقر رئيسي عصري",
  "showroom.card.desc":
    "يضمّ مقرّنا الرئيسي عروضاً حيّة لأكثر من 18 علامة عالمية تغطي جميع فئات مطابخ الاحتراف.",
  "showroom.card.area": "مساحة المعرض",
  "showroom.card.brands": "علامة تجارية",
  "showroom.imageAlt": "واجهة شركة سانتك للتجارة في دمشق ليلاً مع لافتة مضاءة",

  // Floating CTA
  "fab.whatsapp": "تواصل عبر واتساب",
  "fab.quote": "اطلب عرض سعر",
  "fab.open": "افتح الإجراءات السريعة",
  "fab.close": "أغلق الإجراءات السريعة",

  // Map
  "map.label": "موقعنا",
  "map.directions": "احصل على الاتجاهات",
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
