import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import { Code2, Palette, Database, Globe, Smartphone, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "React Development",
      description: "Build modern, performant web applications with React. Component-based architecture, state management, and seamless user experiences.",
      features: [
        "Single Page Applications",
        "Component Libraries",
        "State Management (Redux, Context)",
        "Responsive Design",
      ],
      gradient: "gradient-primary",
    },
    {
      icon: Globe,
      title: "Angular Development",
      description: "Enterprise-grade applications with Angular. TypeScript-first development with powerful tooling and scalability.",
      features: [
        "Enterprise Solutions",
        "TypeScript Expertise",
        "RxJS & Observables",
        "Angular Material UI",
      ],
      gradient: "gradient-warm",
    },
    {
      icon: Database,
      title: "Laravel Backend",
      description: "Robust PHP backends with Laravel. RESTful APIs, authentication, database management, and server-side logic.",
      features: [
        "RESTful API Development",
        "Database Design & Optimization",
        "Authentication & Authorization",
        "Payment Integration",
      ],
      gradient: "gradient-primary",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love. From wireframes to high-fidelity designs and prototypes.",
      features: [
        "User Research & Testing",
        "Wireframing & Prototyping",
        "Design Systems",
        "Accessibility Focus",
      ],
      gradient: "gradient-warm",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Pixel-perfect across all devices. Mobile-first approach ensuring your app looks amazing everywhere.",
      features: [
        "Mobile-First Development",
        "Cross-Browser Compatibility",
        "Progressive Web Apps",
        "Touch-Optimized Interfaces",
      ],
      gradient: "gradient-primary",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast applications that keep users engaged. Code splitting, lazy loading, and optimization best practices.",
      features: [
        "Performance Audits",
        "Code Optimization",
        "SEO Best Practices",
        "Loading Speed Optimization",
      ],
      gradient: "gradient-warm",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We start by understanding your vision, goals, and requirements through detailed discussions.",
    },
    {
      step: "02",
      title: "Design",
      description: "Creating wireframes and high-fidelity designs that bring your vision to life.",
    },
    {
      step: "03",
      title: "Development",
      description: "Building your solution with clean code, best practices, and regular updates.",
    },
    {
      step: "04",
      title: "Delivery",
      description: "Thorough testing, deployment, and ongoing support to ensure success.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl space-y-6">
          <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight">
            Our <span className=" bg-clip-text text-green-700">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Full-stack development expertise combining React/Angular frontend magic with Laravel backend power. We deliver complete digital solutions.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-border hover:shadow-elevated transition-smooth hover:-translate-y-2 group"
              >
                <div className={`w-16 h-16 ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-bounce`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Our <span className="text-green-700 bg-clip-text text-green-700">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to bringing your project from concept to reality
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-display font-bold text-primary/10 mb-4">{item.step}</div>
                <h3 className="text-2xl font-display font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                {index < process.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-4 w-8 h-8 text-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Our <span className="text-green-500 bg-clip-text ">Tech Stack</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Modern technologies and frameworks we use to build exceptional solutions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {["React", "Angular", "Laravel", "TypeScript", "Tailwind CSS", "MySQL", "Git", "REST APIs"].map((tech, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-soft transition-smooth hover:-translate-y-1"
              >
                <div className="text-lg font-display font-semibold">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="gradient-hero p-12 text-center text-white border-0">
            <h2 className="text-4xl font-display font-bold mb-4">
              Let's Discuss Your Project
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Ready to get started? Let's have a conversation about your needs and how we can help.
            </p>
            <NavLink to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Button>
            </NavLink>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
