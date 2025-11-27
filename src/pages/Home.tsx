import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import { Code2, Palette, Zap, Heart, Users, Star, ArrowRight, CheckCircle2, LaptopIcon, CodeIcon, RocketIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import bg1 from '@/assets/anders-jilden-cYrMQA7a3Wc-unsplash.jpg';
import bg2 from '@/assets/garrett-parker-DlkF4-dbCOU-unsplash.jpg';
import bg3 from '@/assets/jonatan-pie-h8nxGssjQXs-unsplash.jpg';
import bg4 from '@/assets/luca-bravo-ii5JY_46xH0-unsplash.jpg';
import { motion } from "framer-motion";

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
  const plans = [
    {
      icon: LaptopIcon, // import from heroicons or your own icons
      title: "Basic Website",
      description: "A simple website with 3-5 pages, responsive design, and basic SEO setup.",
      price: "$199",
    },
    {
      icon: RocketIcon,
      title: "Business Website",
      description: "A medium-scale website with up to 10 pages, blog integration, and contact forms.",
      price: "$499",
    },
    {
      icon: CodeIcon,
      title: "Web Application",
      description: "Full-featured web application with backend, database, and admin panel.",
      price: "$999",
    },
    {
      icon: RocketIcon,
      title: "E-commerce",
      description: "Complete e-commerce solution with product catalog, payment integration, and dashboard.",
      price: "$1499",
    },
    {
      icon: LaptopIcon, // import from heroicons or your own icons
      title: "Basic Website",
      description: "A simple website with 3-5 pages, responsive design, and basic SEO setup.",
      price: "$199",
    },
    {
      icon: RocketIcon,
      title: "Business Website",
      description: "A medium-scale website with up to 10 pages, blog integration, and contact forms.",
      price: "$499",
    },
    {
      icon: CodeIcon,
      title: "Web Application",
      description: "Full-featured web application with backend, database, and admin panel.",
      price: "$999",
    },
    {
      icon: RocketIcon,
      title: "E-commerce",
      description: "Complete e-commerce solution with product catalog, payment integration, and dashboard.",
      price: "$1499",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navbar />

      {/* Hero Section */}

      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}

        autoplay={{
          delay: 300000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {images.map((imgUrl, idx) => (
          <SwiperSlide key={idx} className="relative">
            <img src={imgUrl} alt={`slide-${idx}`} className="w-full h-[607px] object-cover" />

            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                background: "linear-gradient(to right, rgba(0,2,0,2) 0%, rgba(0,0,0,0) 100%)",
              }}
            ></div>
            <motion.div variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.3, // children animate one by one
                  duration: 0.8,
                },
              },
            }}
              initial="hidden"
              animate="visible"
              className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white space-y-2">
              <motion.section className="pt-32 pb-20 px-4" transition={{ duration: 0.6, delay: 0.2 }} initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="container mx-auto">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 animate-fade-in">
                      <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                        <Heart className="w-4 h-4 fill-primary" />
                        Built with Passion & Precision
                      </div>
                      <motion.h1 initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }} className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                        Beautiful Digital
                        <span className=" bg-clip-text text-green-700 block">
                          Experiences
                        </span>
                      </motion.h1>
                      <motion.p initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }} className="text-sx text-muted-foreground leading-relaxed max-w-xl">
                        Passionate developers united by a love for clean code and stunning design. We build full-stack solutions that users adore.
                      </motion.p>
                      <motion.div initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }} className="flex flex-wrap gap-4">
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
                      </motion.div>
                      <motion.div initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }} className="flex flex-wrap gap-8 pt-4">
                        {stats.map((stat, index) => (
                          <div key={index}>
                            <div className="text-3xl font-display font-bold text-green-700  bg-clip-text ">
                              {stat.value}
                            </div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                          </div>
                        ))}
                      </motion.div>
                    </div>



                  </div>
                </div>
              </motion.section>
            </motion.div>


          </SwiperSlide>
        ))}
      </Swiper>




      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-display font-bold"
            >
              Why Choose <span className="text-green-700 bg-clip-text ">SarNixSoft</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sx text-muted-foreground max-w-2xl mx-auto"
            >
              We combine technical expertise with creative passion to deliver exceptional results
            </motion.p>
          </div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 bg-card border-border hover:shadow-elevated transition-smooth hover:-translate-y-2 group">
                  <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-bounce">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-sx font-display font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Our Plans Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          {/* Section Heading */}
          <motion.div
            className="text-center mb-16 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Choose the Right <span className="text-green-700 bg-clip-text">Plan</span>
            </h2>
            <p className="text-sx text-muted-foreground max-w-2xl mx-auto">
              Select a plan that fits your business needs. From small websites to full-scale web applications, we've got you covered.
            </p>
          </motion.div>

          {/* Swiper Plans */}
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {plans.map((plan, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="p-8 bg-card border-border hover:shadow-elevated transition-smooth hover:-translate-y-2 group">
                    <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-bounce">
                      <plan.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-sx font-display font-semibold mb-3">{plan.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{plan.description}</p>
                    <p className="text-lg font-bold">{plan.price}</p>
                    <button className="mt-4 px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition">
                      Choose Plan
                    </button>
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>



      {/* Mission Statement */}


      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        {images.map((imgUrl, idx) => (
          <SwiperSlide key={idx} className="relative">
            <img
              src={imgUrl}
              alt={`slide-${idx}`}
              className="w-full h-[529px] object-cover transition-transform duration-1000 ease-out hover:scale-105"
            />

            {/* Gradient overlay */}
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                background: "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
                transition: "all 1.5s ease-in-out",
              }}
            ></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white">
              <motion.section
                className="py-20 px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { staggerChildren: 0.2, duration: 0.8 },
                  },
                }}
              >
                <div className="container mx-auto max-w-4xl text-center space-y-8">
                  <motion.div
                    className="mx-auto flex justify-center"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <Users className="w-16 h-16 text-primary" />
                  </motion.div>

                  <motion.h2
                    className="text-3xl md:text-4xl font-display font-bold"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    Our Mission
                  </motion.h2>

                  <motion.p
                    className="text-sx text-white leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    To empower businesses with beautiful, functional digital solutions built on trust,
                    creativity, and technical excellence. We believe great software comes from passionate
                    developers who care deeply about their craft and their clients.
                  </motion.p>

                  <motion.div
                    className="flex justify-center gap-3 pt-4 flex-wrap"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    {["Honesty First", "Quality Driven", "Client Focused"].map((badge, i) => (
                      <motion.div
                        key={i}
                        className="px-6 py-3 bg-accent/20 text-accent rounded-full text-sm font-medium"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.9 + i * 0.2 }}
                      >
                        {badge}
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.section>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>


      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Loved by <span className="text-green-700 bg-clip-text ">Our Clients</span>
            </h2>
            <p className="text-sx text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - here's what our clients say
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2, // animate cards one by one
                },
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-8 bg-card border-border hover:shadow-soft transition-smooth">
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="relative overflow-hidden gradient-hero p-12 md:p-16 text-center text-white border-0">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

            <motion.div
              className="relative space-y-6 max-w-3xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } },
              }}
            >
              {/* Heading */}
              <motion.h2
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-display font-bold"
              >
                Ready to Build Something Amazing?
              </motion.h2>

              {/* Paragraph */}
              <motion.p
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-sx text-white/90 leading-relaxed"
              >
                Let's turn your vision into a beautiful reality. Get in touch and let's create magic together.
              </motion.p>

              {/* Buttons */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-4 pt-4"
              >
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
              </motion.div>
            </motion.div>
          </Card>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Home;
