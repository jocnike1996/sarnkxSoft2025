import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Send, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl space-y-6">
          <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight">
            Get in <span className="text-green-700 bg-clip-text">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Have a project in mind? Let's discuss how we can help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">Let's Talk</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you have a question, a project idea, or just want to say hello, we'd love to hear from you. Fill out the form and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 bg-card border-border hover:shadow-soft transition-smooth">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold mb-2">Email Us</h3>
                      <a href="mailto:hello@devduo.studio" className="text-muted-foreground hover:text-primary transition-smooth">
                        hello@devduo.studio
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border hover:shadow-soft transition-smooth">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 gradient-warm rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold mb-2">Live Chat</h3>
                      <p className="text-muted-foreground">Available Monday - Friday, 9am - 6pm</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border hover:shadow-soft transition-smooth">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold mb-2">Call Us</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border hover:shadow-soft transition-smooth">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 gradient-warm rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold mb-2">Location</h3>
                      <p className="text-muted-foreground">Remote - Serving clients worldwide</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8 bg-card border-border shadow-elevated">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    required
                    className="h-12 rounded-2xl"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="h-12 rounded-2xl"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Project Inquiry"
                    required
                    className="h-12 rounded-2xl"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    required
                    className="min-h-[150px] rounded-2xl"
                  />
                </div>

                <Button type="submit" size="lg" variant="gradient" className="w-full">
                  Send Message
                  <Send className="w-5 h-5" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
