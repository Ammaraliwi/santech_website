import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

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
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                Let's Build Your{" "}
                <span className="text-primary italic">Perfect Kitchen</span>
              </h2>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                Whether you're opening a new restaurant, expanding your hotel
                catering, or upgrading your pastry studio — our team is ready
                to consult, design, and supply.
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
                  <p className="font-semibold text-foreground mb-1">Address</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Mazzeh Autostrada, 2/6 Complex
                    <br />
                    Damascus, Syria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4" data-testid="info-phone">
                <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Phone</p>
                  <a
                    href="tel:+963116644888"
                    className="block text-muted-foreground text-sm hover:text-accent transition-colors"
                    data-testid="link-phone-main"
                  >
                    +963 11 6644 888
                  </a>
                  <a
                    href="tel:+963988820109"
                    className="block text-muted-foreground text-sm hover:text-accent transition-colors"
                    data-testid="link-phone-mobile"
                  >
                    +963 9888 20109
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4" data-testid="info-email">
                <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Email</p>
                  <a
                    href="mailto:info@santech-srl.com"
                    className="block text-muted-foreground text-sm hover:text-accent transition-colors"
                    data-testid="link-email-info"
                  >
                    info@santech-srl.com
                  </a>
                  <a
                    href="mailto:sales@santech-srl.com"
                    className="block text-muted-foreground text-sm hover:text-accent transition-colors"
                    data-testid="link-email-sales"
                  >
                    sales@santech-srl.com
                  </a>
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
                General Manager
              </p>
              <p className="font-serif font-semibold text-lg">
                Dr. Ahmed Wasil Mongid
              </p>
              <a
                href="mailto:dr.a.wasil@santech-srl.com"
                className="text-accent text-sm hover:text-white transition-colors"
                data-testid="link-gm-email"
              >
                dr.a.wasil@santech-srl.com
              </a>
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
                  Message Received
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Thank you for reaching out. A member of our team will respond
                  within one business day.
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
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="rounded-sm"
                      data-testid="input-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                      Company
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Restaurant / Hotel Name"
                      className="rounded-sm"
                      data-testid="input-company"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="rounded-sm"
                      data-testid="input-email"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+963 ..."
                      className="rounded-sm"
                      data-testid="input-phone"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project — type of establishment, scale, specific equipment needs, timeline..."
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
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We typically respond within 24 hours on business days.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
