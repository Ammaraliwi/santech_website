import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useI18n } from "@/lib/i18n";
import { settings } from "@/lib/settings";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { t, dir } = useI18n();
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-28 bg-secondary/20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div className="space-y-10">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 border-b border-accent pb-1">
                {t("contact.eyebrow")}
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                {t("contact.title.1")}{" "}
                <span className="text-primary italic">{t("contact.title.2")}</span>
              </h2>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                {t("contact.intro")}
              </p>
            </motion.div>

            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-6"
            >
              <div className="flex items-start gap-4 group" data-testid="info-address">
                <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">{t("contact.label.address")}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                    {t("contact.address")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4" data-testid="info-phone">
                <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">{t("contact.label.phone")}</p>
                  {settings.contact.phones.map((phone, i) => (
                    <a
                      key={i}
                      href={`tel:${phone.link}`}
                      className="block text-muted-foreground text-sm hover:text-accent transition-colors"
                      data-testid={`link-phone-${i}`}
                      dir="ltr"
                    >
                      {phone.display}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-4" data-testid="info-email">
                <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">{t("contact.label.email")}</p>
                  {settings.contact.emails.map((email, i) => (
                    <a
                      key={i}
                      href={`mailto:${email.address}`}
                      className="block text-muted-foreground text-sm hover:text-accent transition-colors"
                      data-testid={`link-email-${i}`}
                      dir="ltr"
                    >
                      {email.address}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* GM Card */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="p-6 bg-primary text-primary-foreground rounded-sm"
              data-testid="card-gm"
            >
              <p className="text-xs text-primary-foreground/60 uppercase tracking-widest mb-2">
                {t("contact.gm.label")}
              </p>
              <p className="font-serif font-semibold text-lg">
                {t("contact.gm.name")}
              </p>
              <a
                href={`mailto:${settings.contact.gm_email}`}
                className="text-accent text-sm hover:text-white transition-colors"
                data-testid="link-gm-email"
                dir="ltr"
              >
                {settings.contact.gm_email}
              </a>
            </motion.div>

            {/* Embedded Map */}
            <motion.div
              custom={2.5}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="relative border border-border rounded-sm overflow-hidden bg-card"
              data-testid="card-map"
            >
              <div className="flex items-center justify-between px-5 py-3 bg-secondary/50 border-b border-border">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-xs font-semibold tracking-[0.15em] uppercase text-foreground">
                    {t("map.label")}
                  </span>
                </div>
                <a
                  href={settings.contact.maps_share_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-accent hover:underline underline-offset-4"
                  data-testid="link-directions"
                >
                  {t("map.directions")} {dir === "rtl" ? "←" : "→"}
                </a>
              </div>
              <iframe
                src={settings.contact.maps_embed_url}
                className="w-full h-64 border-0 grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Santech Trading Co. Location"
                data-testid="iframe-map"
              />
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-card border border-border rounded-sm" data-testid="success-message">
                <CheckCircle className="w-16 h-16 text-accent mb-6" />
                <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                  {t("form.success.title")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("form.success.text")}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card border border-border rounded-sm p-8 md:p-10 space-y-6"
                data-testid="form-contact"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                      {t("form.name")}
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder={t("form.name.ph")}
                      className="rounded-sm"
                      data-testid="input-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                      {t("form.company")}
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder={t("form.company.ph")}
                      className="rounded-sm"
                      data-testid="input-company"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                      {t("form.email")}
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder={t("form.email.ph")}
                      className="rounded-sm"
                      data-testid="input-email"
                      dir="ltr"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                      {t("form.phone")}
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder={t("form.phone.ph")}
                      className="rounded-sm"
                      data-testid="input-phone"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                    {t("form.message")}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t("form.message.ph")}
                    rows={5}
                    className="rounded-sm resize-none"
                    data-testid="input-message"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold tracking-wide rounded-sm"
                  data-testid="button-submit"
                >
                  {loading ? (
                    t("form.submit.loading")
                  ) : (
                    <>
                      {t("form.submit")}
                      <Send className={`w-4 h-4 ${dir === "rtl" ? "mr-2 rotate-180" : "ml-2"}`} />
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  {t("form.disclaimer")}
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
