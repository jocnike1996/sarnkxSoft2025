import { NavLink } from "./NavLink";
import { Heart, Github, Twitter, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/90 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 } // animate each column one by one
            }
          }}
        >
          {/* Brand */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 gradient-primary rounded-2xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="text-xl text-white font-display font-bold">SarNixSoft</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Two passionate developers crafting beautiful digital experiences with love and precision.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9  rounded-full bg-background hover:bg-primary hover:text-white transition-smooth flex items-center justify-center shadow-soft" aria-label="Github">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9  rounded-full bg-background hover:bg-primary hover:text-white transition-smooth flex items-center justify-center shadow-soft" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9  rounded-full bg-background hover:bg-primary hover:text-white transition-smooth flex items-center justify-center shadow-soft" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="font-display text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><NavLink to="/" className="text-muted-foreground hover:text-primary transition-smooth text-sm">Home</NavLink></li>
              <li><NavLink to="/services" className="text-muted-foreground hover:text-primary transition-smooth text-sm">Services</NavLink></li>
              <li><NavLink to="/portfolio" className="text-muted-foreground hover:text-primary transition-smooth text-sm">Portfolio</NavLink></li>
              <li><NavLink to="/contact" className="text-muted-foreground hover:text-primary transition-smooth text-sm">Contact</NavLink></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="font-display text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>React Development</li>
              <li>Angular Development</li>
              <li>Laravel Backend</li>
              <li>Full-Stack Solutions</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="font-display text-white font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a href="mailto:hello@devduo.studio" className="flex items-center gap-2 hover:text-primary transition-smooth">
                <Mail className="w-4 h-4" />
                hello@devduo.studio
              </a>
              <p className="leading-relaxed">
                Let's build something beautiful together. We're here to turn your ideas into reality.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>
            © {currentYear} SarNixSoft. Made with <Heart className="w-4 h-4 inline text-secondary fill-secondary" /> by two passionate developers.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
