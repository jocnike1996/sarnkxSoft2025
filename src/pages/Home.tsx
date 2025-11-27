import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import { Code2, Palette, Zap, Heart, Users, Star, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import bg1 from '@/assets/anders-jilden-cYrMQA7a3Wc-unsplash.jpg';
import bg2 from '@/assets/garrett-parker-DlkF4-dbCOU-unsplash.jpg';
import bg3 from '@/assets/jonatan-pie-h8nxGssjQXs-unsplash.jpg';
import bg4 from '@/assets/luca-bravo-ii5JY_46xH0-unsplash.jpg';
const Home = () => {
  const features = [
    {
      icon: Code2,
      title: "Expert Development",
      description: "Mastery in React, Angular, and Laravel - delivering robust, scalable solutions.",
    },
    {
      icon: Palette,
      title: "Beautiful Design",
      description: "Pixel-perfect interfaces that users love, crafted with attention to every detail.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance and seamless user experiences that keep users engaged.",
    },
    {
      icon: Heart,
      title: "Built with Love",
      description: "Every line of code written with passion, care, and dedication to excellence.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "DevDuo transformed our vision into reality. Their attention to detail and passion is unmatched.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Founder, CloudScale",
      content: "Working with this team was a breeze. They truly understand both design and development.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, Innovate",
      content: "The best development partners we've had. Responsive, creative, and incredibly skilled.",
      rating: 5,
    },
  ];

  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "2", label: "Passionate Developers" },
    { value: "24/7", label: "Support" },
  ];
  const images = [bg1, bg2, bg3, bg4];

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navbar />

      {/* Hero Section */}

      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        // navigation
        autoplay={{
          delay: 300000,       // 3 seconds
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {images.map((imgUrl, idx) => (
          <SwiperSlide key={idx} className="relative">
            <img src={imgUrl} alt={`slide-${idx}`} className="w-full h-[607px] object-cover" />
            {/* Gradient overlay */}
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                background: "linear-gradient(to right, rgba(0,2,0,2) 0%, rgba(0,0,0,0) 100%)",
              }}
            ></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white space-y-2">
              <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 animate-fade-in">
                      <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                        <Heart className="w-4 h-4 fill-primary" />
                        Built with Passion & Precision
                      </div>
                      <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                        Beautiful Digital
                        <span className=" bg-clip-text text-green-700 block">
                          Experiences
                        </span>
                      </h1>
                      <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                        Two passionate developers united by a love for clean code and stunning design. We build full-stack solutions that users adore.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <NavLink to="/contact">
                          <Button size="lg" variant="gradient" className="group">
                            Start Your Project
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
                          </Button>
                        </NavLink>
                        <NavLink to="/portfolio">
                          <Button size="lg" variant="outline">
                            View Our Work
                          </Button>
                        </NavLink>
                      </div>
                      <div className="flex flex-wrap gap-8 pt-4">
                        {stats.map((stat, index) => (
                          <div key={index}>
                            <div className="text-3xl font-display font-bold text-green-700  bg-clip-text ">
                              {stat.value}
                            </div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </section>
            </div>


          </SwiperSlide>
        ))}
      </Swiper>




      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Why Choose <span className="text-green-700 bg-clip-text text-transparent">DevDuo</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with creative passion to deliver exceptional results
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-border hover:shadow-elevated transition-smooth hover:-translate-y-2 group"
              >
                <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-bounce">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <Users className="w-16 h-16 mx-auto text-primary" />
          <h2 className="text-3xl md:text-4xl font-display font-bold">Our Mission</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            To empower businesses with beautiful, functional digital solutions built on trust, creativity, and technical excellence. We believe great software comes from passionate developers who care deeply about their craft and their clients.
          </p>
          <div className="flex justify-center gap-3 pt-4">
            <div className="px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Honesty First
            </div>
            <div className="px-6 py-3 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
              Quality Driven
            </div>
            <div className="px-6 py-3 bg-accent/10 text-accent rounded-full text-sm font-medium">
              Client Focused
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Loved by <span className="text-green-700 bg-clip-text text-transparent">Our Clients</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - here's what our clients say
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-card border-border hover:shadow-soft transition-smooth">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-secondary fill-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{testimonial.content}</p>
                <div>
                  <div className="font-display font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="relative overflow-hidden gradient-hero p-12 md:p-16 text-center text-white border-0">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
            <div className="relative space-y-6 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-display font-bold">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Let's turn your vision into a beautiful reality. Get in touch and let's create magic together.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <NavLink to="/contact">
                  <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                    Get Started Now
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </NavLink>
                <NavLink to="/portfolio">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    View Portfolio
                  </Button>
                </NavLink>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
