import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { ExternalLink, Code2, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Full-Stack",
      description: "Modern e-commerce solution with React frontend and Laravel backend. Features include real-time inventory, payment processing, and admin dashboard.",
      tech: ["React", "Laravel", "MySQL", "Stripe"],
      gradient: "gradient-primary",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "Healthcare Dashboard",
      category: "Angular + Laravel",
      description: "Enterprise healthcare management system with Angular frontend. Patient records, appointments, and secure data handling.",
      tech: ["Angular", "Laravel", "PostgreSQL", "Charts"],
      gradient: "gradient-warm",
      videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
    },
    {
      title: "Social Media App",
      category: "React Native",
      description: "Cross-platform social networking application with real-time messaging, media sharing, and user engagement features.",
      tech: ["React", "Laravel", "WebSocket", "AWS S3"],
      gradient: "gradient-primary",
      videoUrl: "https://www.youtube.com/embed/kJQP7kiw5Fk",
    },
    {
      title: "Project Management Tool",
      category: "SaaS Platform",
      description: "Collaborative project management platform with kanban boards, time tracking, and team communication features.",
      tech: ["React", "Laravel", "Redis", "REST API"],
      gradient: "gradient-warm",
      videoUrl: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    },
    {
      title: "Real Estate Portal",
      category: "Full-Stack",
      description: "Property listing platform with advanced search, virtual tours, and agent management system.",
      tech: ["Angular", "Laravel", "MySQL", "Google Maps"],
      gradient: "gradient-primary",
      videoUrl: "https://www.youtube.com/embed/ZZ5LpwO-An4",
    },
    {
      title: "Fitness Tracking App",
      category: "Progressive Web App",
      description: "PWA for fitness tracking with workout plans, nutrition logging, and progress visualization.",
      tech: ["React", "Laravel", "Chart.js", "PWA"],
      gradient: "gradient-warm",
      videoUrl: "https://www.youtube.com/embed/y6120QOlsfU",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl space-y-6">
          <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight">
            Our <span className="text-green-700 bg-clip-text">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Explore our showcase of successful projects. Each one built with passion, precision, and cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "30+", label: "Happy Clients" },
              { value: "100%", label: "Success Rate" },
              { value: "5 Years", label: "Combined Experience" },
            ].map((stat, index) => (
              <Card key={index} className="p-6 text-center bg-card border-border hover:shadow-soft transition-smooth">
                <div className="text-3xl font-display font-bold  bg-clip-text  mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group bg-card border-border overflow-hidden hover:shadow-elevated transition-smooth"
              >
                <div className="relative h-48 bg-black overflow-hidden">
                  <iframe
                    src={project.videoUrl}
                    title={project.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-display font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full group/btn">
                    View Details
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-smooth" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="gradient-hero p-12 text-center text-white border-0">
            <h2 className="text-4xl font-display font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let's create something amazing together. Get in touch and bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <NavLink to="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Start a Project
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </NavLink>
              <NavLink to="/services">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  View Services
                </Button>
              </NavLink>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
