import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t border-primary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center font-serif font-bold text-xl"
                style={{ background: "hsl(38 92% 50%)", color: "hsl(220 30% 15%)" }}
              >
                S
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif font-bold text-base tracking-wider text-white">SANTECH</span>
                <span className="text-xs tracking-widest font-medium text-primary-foreground/60">TRADING CO.</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 max-w-xs text-sm leading-relaxed">
              Premium HoReCa professional equipment distributor across the Middle East. Excellence in design, supply, and support.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-serif font-semibold tracking-wide text-white">Contact Info</h4>
            <div className="space-y-4 text-sm text-primary-foreground/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p>Mazzeh Autostrada, Damascus, Syria<br/>(2/6 Complex)</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+963116644888" className="hover:text-white transition-colors">+963 11 6644 888</a>
                  <a href="tel:+963988820109" className="hover:text-white transition-colors">+963 9888 20109</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <div className="flex flex-col">
                  <a href="mailto:info@santech-srl.com" className="hover:text-white transition-colors">info@santech-srl.com</a>
                  <a href="mailto:sales@santech-srl.com" className="hover:text-white transition-colors">sales@santech-srl.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-serif font-semibold tracking-wide text-white">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-primary-foreground/80">
              <a href="#hero" className="hover:text-accent transition-colors">Home</a>
              <a href="#about" className="hover:text-accent transition-colors">About Us</a>
              <a href="#services" className="hover:text-accent transition-colors">Services</a>
              <a href="#partners" className="hover:text-accent transition-colors">Partners</a>
              <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
            </div>
            
            <div className="pt-4 border-t border-primary-foreground/10 mt-6">
              <p className="text-xs text-primary-foreground/60 mb-1">General Manager:</p>
              <p className="text-sm">Dr. Ahmed Wasil Mongid</p>
              <a href="mailto:dr.a.wasil@santech-srl.com" className="text-xs text-accent hover:text-white transition-colors">dr.a.wasil@santech-srl.com</a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Santech Trading Co. (STC). All rights reserved.</p>
          <p>Part of Syrian House Group</p>
        </div>
      </div>
    </footer>
  );
}
