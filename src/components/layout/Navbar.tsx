import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import omSymbol from "@/assets/om-symbol.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Deity", path: "/deity" },
  { name: "Puja Timings", path: "/puja-timings" },
  { name: "Festivals", path: "/festivals" },
  { name: "Gallery", path: "/gallery" },
  { name: "Donate", path: "/donate" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={omSymbol}
              alt="Om"
              className="w-10 h-10 om-pulse group-hover:scale-110 transition-transform duration-300"
            />
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold text-primary">
                Sri Ganesha Temple
              </span>
              <span className="text-xs text-muted-foreground font-body">
                श्री गणेश मंदिर
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-display tracking-wide transition-all duration-300 rounded-md hover:bg-primary/10 ${
                  location.pathname === link.path
                    ? "text-primary font-semibold"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Donate Button (Desktop) */}
          <div className="hidden lg:block">
            <Button variant="divine" size="lg" asChild>
              <Link to="/donate">Donate Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-card rounded-lg shadow-elegant p-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-md font-display text-sm transition-all duration-300 ${
                  location.pathname === link.path
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-foreground/80 hover:bg-primary/5 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Button variant="divine" className="w-full" asChild>
                <Link to="/donate">Donate Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
