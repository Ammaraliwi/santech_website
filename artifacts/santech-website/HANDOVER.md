# 🏢 Santech Trading Co. — Website Technical Handover Document
### وثيقة تسليم البنية التحتية التقنية لموقع شركة سانتك للتجارة

**Version:** 1.0  
**Date:** April 2026  
**Live Site:** https://santech-website.pages.dev  
**Repository:** https://github.com/Ammaraliwi/santech_website

---

## 📐 1. High-Level Architecture | البنية المعمارية العامة

```
┌─────────────────────────────────────────────────────────────────┐
│                         END VISITORS                            │
│                       (الزوار النهائيون)                          │
└──────────────────────────────┬──────────────────────────────────┘
                               │ HTTPS
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                    CLOUDFLARE PAGES (CDN)                       │
│            santech-website.pages.dev  ←  Live Hosting           │
│         • Global CDN  • Free SSL  • DDoS Protection             │
└──────────────────────────────┬──────────────────────────────────┘
                               │ Auto-deploy on push
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                       GITHUB REPOSITORY                         │
│              Ammaraliwi/santech_website (main branch)           │
│        • Source code  • Content (JSON)  • Image uploads         │
└────────────────┬───────────────────────────┬────────────────────┘
                 │                           │
                 │ Read content              │ Commit changes
                 ▼                           │
┌──────────────────────────────┐  ┌──────────────────────────────┐
│   NETLIFY IDENTITY + GIT     │  │   ADMIN PANEL (Decap CMS)    │
│         GATEWAY              │◄─┤    /admin/ on website        │
│   (Authentication Service)   │  │   (Content Editor UI)        │
│  sensational-halva-03159a    │  │                              │
└──────────────────────────────┘  └──────────────────────────────┘
                 ▲
                 │ Login (email + password)
                 │
         ┌───────┴────────┐
         │  CONTENT TEAM  │
         │  (محرر المحتوى) │
         └────────────────┘
```

---

## 🧱 2. Technology Stack | المكدس التقني

| Layer | Technology | Purpose | Cost |
|---|---|---|---|
| **Frontend Framework** | React 18 + TypeScript | UI library + type safety | Free (open source) |
| **Build Tool** | Vite 5 | Fast dev server + optimized production build | Free |
| **Styling** | Tailwind CSS + shadcn/ui | Utility-first CSS + component library | Free |
| **Animation** | Framer Motion | Smooth scroll/entrance animations | Free |
| **Internationalization** | Custom i18n (en.json / ar.json) | Bilingual EN/AR with RTL support | Free |
| **Icons** | Lucide React | Modern icon set | Free |
| **Hosting / CDN** | Cloudflare Pages | Static site hosting + global CDN | **Free** (unlimited bandwidth) |
| **Source Control** | GitHub | Version control + auto-deploy trigger | Free (public repo) |
| **CMS** | Decap CMS (open source) | Browser-based content editor at `/admin/` | Free (self-hosted) |
| **Authentication** | Netlify Identity + Git Gateway | Login for content editors | **Free** tier (up to 5 users) |
| **Domain (current)** | `*.pages.dev` (Cloudflare) | Free subdomain | Free |
| **Domain (optional)** | Custom (e.g. `santech-srl.com`) | To be added by Cloudflare DNS | Annual domain cost only |

> ✅ **Total monthly cost: $0** (with free domain). With custom domain: ≈ $10–15/year.

---

## 🗂️ 3. Repository Structure | هيكل المستودع

```
santech_website/
├── artifacts/santech-website/
│   ├── public/
│   │   ├── admin/
│   │   │   ├── index.html          ← CMS entry page (loads Decap)
│   │   │   └── config.yml          ← CMS field definitions (auto-generated)
│   │   ├── brand/
│   │   │   └── santech-logo.png    ← Default logo
│   │   └── images/
│   │       ├── hero-bg.png         ← Hero background
│   │       ├── about-bg.png        ← About section background
│   │       ├── showroom-storefront.png
│   │       └── uploads/            ← CMS-uploaded images go here
│   │
│   ├── src/
│   │   ├── components/             ← React UI components
│   │   │   ├── layout/             (Navbar, Footer)
│   │   │   ├── sections/           (Hero, About, Services, Contact, …)
│   │   │   └── ui/                 (Buttons, Inputs — shadcn/ui)
│   │   ├── content/
│   │   │   ├── en.json             ← All English text (281 keys)
│   │   │   ├── ar.json             ← All Arabic text (281 keys)
│   │   │   └── settings.json       ← Logo, contacts, images, map
│   │   └── lib/
│   │       ├── i18n.tsx            ← Translation system
│   │       └── settings.ts         ← Settings type/loader
│   │
│   ├── index.html                  ← App entry + Netlify Identity widget
│   ├── package.json
│   ├── vite.config.ts
│   └── tailwind.config.ts
│
└── README.md
```

---

## 🔄 4. Content Update Flow | آلية تحديث المحتوى

```
┌──────────────────┐    ┌─────────────────┐    ┌──────────────────┐
│  Editor logs in  │───►│  Edits content  │───►│   Clicks "Save"  │
│  at /admin/      │    │  in CMS forms   │    │                  │
└──────────────────┘    └─────────────────┘    └────────┬─────────┘
                                                        │
                                                        ▼
                                          ┌──────────────────────────┐
                                          │  Decap CMS commits       │
                                          │  changes to GitHub       │
                                          │  via Netlify Git Gateway │
                                          └────────┬─────────────────┘
                                                   │
                                                   ▼
                                          ┌──────────────────────────┐
                                          │  Cloudflare Pages        │
                                          │  detects new commit      │
                                          │  and rebuilds site       │
                                          │  (~2-3 minutes)          │
                                          └────────┬─────────────────┘
                                                   │
                                                   ▼
                                          ┌──────────────────────────┐
                                          │  Live site updated 🎉     │
                                          └──────────────────────────┘
```

**No technical knowledge required.** Editors only see form fields and image-upload buttons.

---

## 🔐 5. Access Credentials Checklist | قائمة الصلاحيات للتسليم

| Service | URL | Account Owner | Access Type |
|---|---|---|---|
| **GitHub** | github.com/Ammaraliwi/santech_website | Ammaraliwi | Repository owner |
| **Cloudflare Pages** | dash.cloudflare.com | Client account | Build & deploy |
| **Netlify Identity** | app.netlify.com/projects/sensational-halva-03159a | Client account | Identity admin |
| **CMS Login** | https://santech-website.pages.dev/admin/ | amar-209@hotmail.com | Content editor |

### 📋 Handover Checklist
- [ ] Transfer GitHub repository ownership (or add client as admin)
- [ ] Transfer Cloudflare Pages project to client account
- [ ] Transfer Netlify project to client account  
- [ ] Provide CMS login credentials to content team
- [ ] Document any custom domain DNS settings
- [ ] Schedule a 30-min CMS training session for editors

---

## ✏️ 6. What Editors Can Edit (No Code Needed)

The CMS at `/admin/` exposes **3 collections**:

### ⚙️ Site Settings
- 🎨 **Brand:** Logo image (upload from device), alt text
- 📞 **Contact:** Phone numbers (add/remove), emails (add/remove), GM email, WhatsApp number, Google Maps link, embedded map URL
- 🖼️ **Images:** Hero background, About background, Showroom photo, Social-share image (Open Graph)

### 🇬🇧 English Site Content
281 editable text strings, organized into 22 collapsible sections (Hero, About, Services, Industries, Process, Projects, Testimonials, Leadership, Certifications, Catalog, Showroom, Contact, Footer, etc.)

### 🇸🇾 المحتوى العربي
Mirror of English collection — every English string has its Arabic counterpart.

---

## 🛠️ 7. Developer Workflow | سير عمل المطور

### Local Development
```bash
git clone https://github.com/Ammaraliwi/santech_website.git
cd santech_website
pnpm install
pnpm --filter @workspace/santech-website run dev
# Site runs at http://localhost:5173
```

### Production Deploy (automatic)
Every push to `main` triggers Cloudflare Pages to:
1. Run `pnpm install`
2. Run `pnpm --filter @workspace/santech-website run build`
3. Deploy `dist/` folder to global CDN

### Adding a New Editable Field
1. Add the field to `src/content/settings.json` (or `en.json` / `ar.json`)
2. Re-generate `public/admin/config.yml` (script in repo)
3. Reference the field in the relevant React component
4. Commit & push — CMS updates automatically

---

## 🌍 8. Performance & SEO

| Metric | Implementation |
|---|---|
| **Hosting** | Cloudflare global CDN (300+ edge locations) |
| **SSL/HTTPS** | Auto-provisioned by Cloudflare |
| **Compression** | Brotli + Gzip (automatic) |
| **Caching** | Static assets cached at edge |
| **Bundle Size** | Code-split per route, lazy-loaded sections |
| **Lighthouse Target** | 90+ Performance, 100 Accessibility |
| **Languages** | EN/AR with `lang` + `dir` HTML attributes |
| **Meta Tags** | Title, description, OG image (editable in `index.html`) |
| **Mobile** | Fully responsive (Tailwind breakpoints) |

---

## 🆘 9. Support & Maintenance | الدعم والصيانة

### Common Tasks
| Task | Owner | Frequency |
|---|---|---|
| Update site text/images | Content Team (via CMS) | As needed |
| Add new content sections | Developer | On request |
| Update brand identity | Content Team (via CMS Settings) | Rare |
| Security updates (npm packages) | Developer | Quarterly |
| Backup verification | Developer | Monthly (auto via Git) |

### Backup Strategy
- ✅ **Code & Content:** Every change is a Git commit — full history preserved forever in GitHub
- ✅ **Images:** Stored in Git LFS-friendly `public/images/uploads/` folder
- ✅ **Database:** None required (static site)
- ✅ **Restore Time:** Any previous version can be restored in <5 minutes via `git revert`

---

## 📞 10. Key Contacts

| Role | Name | Email |
|---|---|---|
| Project Owner | Dr. A. Wasil | dr.a.wasil@santech-srl.com |
| Main Office | — | info@santech-srl.com |
| Sales | — | sales@santech-srl.com |
| Technical Lead | (To be assigned) | — |

---

## 📜 11. License & Ownership

- **Source Code:** Property of Santech Trading Co.
- **Third-Party Libraries:** All MIT/Apache licensed (free for commercial use)
- **Images:** Property of Santech Trading Co. (uploaded via CMS)
- **CMS Software:** Decap CMS (MIT licensed)

---

**End of Handover Document**  
*Prepared for Santech Trading Co. — Damascus, Syria*
