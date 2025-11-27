import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { Menu, X, Heart } from "lucide-react";
import { useState, useEffect } from 'react';
import { FaEnvelope, FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaTiktok } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/contact", label: "Contact" },
  ];
  const navLinks2 = [

    { to: "/contact", label: "Contact", icon: <FaEnvelope /> }, // Email icon
    { to: "/instagram", label: "Instagram", icon: <FaInstagram /> }, // Instagram icon
  ];
  const navLinks3 = [
    { to: "/contact", icon: <FaEnvelope /> },        // Email
    { to: "/instagram", icon: <FaInstagram /> },    // Instagram
    { to: "/facebook", icon: <FaFacebookF /> },     // Facebook
    { to: "/linkedin", icon: <FaLinkedinIn /> },    // LinkedIn
    { to: "/youtube", icon: <FaYoutube /> },        // YouTube
    { to: "/tiktok", icon: <FaTiktok /> },          // TikTok
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50  item-center  border-border transition-colors duration-0 ${scrolled ? 'bg-black/40 backdrop-blur-md' : 'bg-black/15 backdrop-blur-sm'
      }`}>
      {/* first div */}

      {/* second div */}
      <div className={` container mx-auto px-4 w-[90%]  transition-colors duration-0 
        }`} >
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 gradient-primary rounded-2xl flex items-center justify-center transition-bounce group-hover:rotate-12">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="text-xl font-display font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              SarNixSoft
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-sm text-white text-xs flex items-center gap-2 relative group transition-smooth"
                activeClassName="text-foreground text-white"
              >

                {/* Label */}
                <span>{link.label}</span>

                {/* Underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </NavLink>

            ))}
            <NavLink to="/login">
              <Button variant="gradient" className=" text-xs" size="sm">
                Whatsapp
              </Button>
            </NavLink>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-muted transition-smooth"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="text-sm text-white text-xs flex items-center gap-2 relative group transition-smooth"
                  activeClassName="text-foreground text-sx bg-muted font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <NavLink to="/login">
                  <Button variant="outline" className="w-full text-xs">
                    Sign In
                  </Button>
                </NavLink>
                <NavLink to="/signup">
                  <Button variant="gradient" className="w-full text-xs">
                    Get Started
                  </Button>
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>

  );
};

export default Navbar;
