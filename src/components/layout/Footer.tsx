import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, Heart } from "lucide-react";
import omSymbol from "@/assets/om-symbol.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Decorative top border */}
      <div className="h-1 gradient-divine" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Temple Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={omSymbol} alt="Om" className="w-12 h-12" />
              <div>
                <h3 className="font-display text-xl font-bold">Sri Ganesha Temple</h3>
                <p className="text-sm text-secondary-foreground/70">श्री गणेश मंदिर</p>
              </div>
            </div>
            <p className="text-secondary-foreground/80 font-body leading-relaxed">
              A sacred abode of Lord Ganesha, dedicated to spreading peace, prosperity,
              and spiritual enlightenment to all devotees.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-accent">
              Quick Links
            </h4>
            <ul className="space-y-3 font-body">
              {[
                { name: "About Temple", path: "/about" },
                { name: "Deity Information", path: "/deity" },
                { name: "Puja Timings", path: "/puja-timings" },
                { name: "Festivals & Events", path: "/festivals" },
                { name: "Photo Gallery", path: "/gallery" },
                { name: "Make a Donation", path: "/donate" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-secondary-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Temple Timings */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-accent">
              Temple Timings
            </h4>
            <ul className="space-y-3 font-body">
              <li className="flex items-center gap-3 text-secondary-foreground/80">
                <Clock size={18} className="text-accent" />
                <div>
                  <p className="font-semibold">Morning</p>
                  <p className="text-sm">6:00 AM - 12:00 PM</p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/80">
                <Clock size={18} className="text-accent" />
                <div>
                  <p className="font-semibold">Evening</p>
                  <p className="text-sm">4:00 PM - 9:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-accent">
              Contact Us
            </h4>
            <ul className="space-y-4 font-body">
              <li className="flex items-start gap-3 text-secondary-foreground/80">
                <MapPin size={18} className="text-accent mt-1 flex-shrink-0" />
                <p>123 Temple Street, Sacred City, State 12345, India</p>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/80">
                <Phone size={18} className="text-accent" />
                <a href="tel:+911234567890" className="hover:text-accent transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/80">
                <Mail size={18} className="text-accent" />
                <a
                  href="mailto:info@sriganeshatemple.org"
                  className="hover:text-accent transition-colors"
                >
                  info@sriganeshatemple.org
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary-foreground/60">
            <p className="font-body flex items-center gap-1">
              © {currentYear} Sri Ganesha Temple. Made with{" "}
              <Heart size={14} className="text-primary fill-primary" /> for devotees
            </p>
            <p className="font-body text-center">
              || श्री गणेशाय नमः || ॐ गं गणपतये नमः ||
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
