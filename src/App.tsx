import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  Mic, 
  Camera, 
  Video, 
  Share2, 
  Layout, 
  Film, 
  Plus, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight,
  Menu,
  X,
  Play,
  Star
} from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Clients', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-brand-purple rounded-lg flex items-center justify-center rotate-12 glow-purple">
            <Film className="text-white w-6 h-6 -rotate-12" />
          </div>
          <span className="font-display text-2xl font-bold tracking-tighter uppercase whitespace-nowrap">
            Sarcoma<span className="text-brand-purple">.</span>
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 glass px-8 py-3 rounded-full">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium hover:text-brand-purple transition-colors uppercase tracking-widest"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:block bg-brand-purple text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-brand-purple-glow transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:scale-105 active:scale-95"
        >
          LET'S TALK
        </motion.button>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-dark mt-4 mx-6 rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium hover:text-brand-purple"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-brand-purple w-full py-3 rounded-xl font-bold">
                LET'S TALK
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image Dummy */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black z-10" />
        <div className="absolute inset-0 bg-gradient-radial from-brand-purple/10 via-transparent to-transparent z-10 opacity-50" />
        <motion.div style={{ y }} className="w-full h-full">
           <img 
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop" 
            alt="Cinematic production" 
            className="w-full h-full object-cover grayscale brightness-50"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      <motion.div 
        style={{ opacity }}
        className="relative z-20 text-center max-w-5xl px-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1 rounded-full glass text-xs font-bold tracking-[0.3em] uppercase text-brand-purple-glow mb-4">
            Next Generation Creative Agency
          </span>
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-tight mb-8">
            WE CAPTURE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-purple-glow to-purple-400 text-glow">
              THE FUTURE
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            sarcoma is a premium media production studio crafting cinematic experiences, 
            digital landscapes, and iconic brands through relentless creativity.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="group relative bg-brand-purple text-white px-10 py-5 rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105">
            <span className="relative z-10 flex items-center gap-2">
              DISCOVER OUR WORK <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-brand-purple opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <button className="flex items-center gap-3 text-lg font-medium hover:text-brand-purple transition-colors group">
            <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-all group-hover:bg-brand-purple/20">
              <Play className="fill-current w-5 h-5" />
            </div>
            WATCH REEL
          </button>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-24 h-24 glass rounded-3xl -rotate-12 hidden lg:block"
      />
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-10 w-32 h-32 glass rounded-full hidden lg:block opacity-30"
      />

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-purple to-transparent" />
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Podcast & Broadcast",
      desc: "Premium acoustically treated studios with professional sound engineering and 4K multi-cam setups.",
      icon: <Mic className="w-8 h-8" />,
      tag: "Audio Visual"
    },
    {
      title: "Photo & Video",
      desc: "Cinematic storytelling through fashion shoots, commercial photography, and high-end video production.",
      icon: <Camera className="w-8 h-8" />,
      tag: "Production"
    },
    {
      title: "Event Coverage",
      desc: "From massive concerts to exclusive weddings, we capture the raw energy and emotion of every moment.",
      icon: <Video className="w-8 h-8" />,
      tag: "Live"
    },
    {
      title: "Social Marketing",
      desc: "Strategic brand growth, influencer campaigns, and data-driven advertising to dominate digital space.",
      icon: <Share2 className="w-8 h-8" />,
      tag: "Digital"
    },
    {
      title: "Design & Identity",
      desc: "Visionary branding, motion graphics, and creative assets that define your market presence.",
      icon: <Layout className="w-8 h-8" />,
      tag: "Creative"
    },
    {
      title: "Post-Production",
      desc: "Precision editing, high-end color grading, and visual effects to polish your vision to perfection.",
      icon: <Film className="w-8 h-8" />,
      tag: "Studio"
    },
  ];

  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/10 blur-[120px] rounded-full -z-10" />
      
      <div className="text-center mb-20">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-brand-purple font-bold tracking-[0.2em] uppercase text-sm"
        >
          What We Do
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-display font-bold mt-4"
        >
          Limitless Creative <span className="text-gray-500 italic">Solutions.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative p-8 rounded-3xl glass-dark hover:bg-white/5 transition-all duration-500 overflow-hidden"
          >
            {/* Glow Effect on Hover */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-purple/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="mb-8 p-4 w-fit rounded-2xl glass group-hover:bg-brand-purple/20 group-hover:text-brand-purple transition-all duration-500">
              {s.icon}
            </div>
            
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-purple mb-4 block">
              {s.tag}
            </span>
            <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-brand-purple transition-colors">
              {s.title}
            </h3>
            <p className="text-gray-400 leading-relaxed font-light">
              {s.desc}
            </p>
            
            <div className="mt-8 flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 cursor-pointer text-brand-purple">
              EXPLORE <Plus className="w-4 h-4" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Portfolio = () => {
  const items = [
    { 
      title: "Neon City", 
      type: "Cinematography", 
      img: "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2156&auto=format&fit=crop",
      size: "large"
    },
    { 
      title: "Vogue Edit", 
      type: "Fashion Film", 
      img: "https://images.unsplash.com/photo-1537832816519-689ad1630181?q=80&w=2070&auto=format&fit=crop",
      size: "small"
    },
    { 
      title: "Sound Labs", 
      type: "Podcast Setup", 
      img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2070&auto=format&fit=crop",
      size: "small"
    },
    { 
      title: "Brand Pulse", 
      type: "Logo Animation", 
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
      size: "medium"
    },
    { 
      title: "Cyberpunk Event", 
      type: "Live Broadcast", 
      img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop",
      size: "large"
    },
  ];

  return (
    <section id="portfolio" className="py-24 px-6 max-w-7xl mx-auto">
       <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <span className="text-brand-purple font-bold tracking-[0.2em] uppercase text-sm">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">Selected Works</h2>
        </div>
        <button className="text-sm font-bold tracking-widest uppercase pb-1 border-b-2 border-brand-purple hover:text-brand-purple transition-colors">
          View All Projects
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className={`group relative overflow-hidden rounded-3xl bg-zinc-900 ${
              item.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''
            }`}
          >
            <img 
              src={item.img} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-50"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-x-0 bottom-0 p-8 translate-y-4 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
              <span className="text-xs font-bold text-brand-purple uppercase tracking-widest mb-2 block">{item.type}</span>
              <h4 className="text-3xl font-display font-bold">{item.title}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Alexander Draven",
      role: "CEO of TechPulse",
      content: "Sarcoma transformed our brand identity into something futuristic. Their cinematic approach is unmatched in the industry.",
      avatar: "https://i.pravatar.cc/150?u=1"
    },
    {
      name: "Sofia Laurent",
      role: "Fashion Director",
      content: "The level of detail in their post-production is insane. They don't just edit; they compose visual poetry.",
      avatar: "https://i.pravatar.cc/150?u=2"
    },
    {
      name: "Marcus Thorne",
      role: "Global Artist",
      content: "From stage lighting to massive event coverage, they captured the energy of our tour perfectly. True professionals.",
      avatar: "https://i.pravatar.cc/150?u=3"
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-purple/5 blur-[150px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-brand-purple font-bold tracking-[0.2em] uppercase text-sm">Testimonials</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-4 leading-tight">
            Loved by <br />
            Creative <span className="text-brand-purple italic">Pioneers.</span>
          </h2>
          <p className="text-gray-400 mt-8 text-lg max-w-md font-light leading-relaxed">
            We collaborate with visionaries across industries to create digital legacies that last.
          </p>
          <div className="flex gap-4 mt-8">
            <div className="flex text-brand-purple">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <span className="font-bold">5.0 Rating</span>
          </div>
        </div>

        <div className="space-y-6">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="glass p-8 rounded-3xl relative"
            >
              <p className="text-lg italic text-gray-300 mb-6 font-light">"{r.content}"</p>
              <div className="flex items-center gap-4">
                <img src={r.avatar} alt={r.name} className="w-12 h-12 rounded-full border-2 border-brand-purple" referrerPolicy="no-referrer" />
                <div>
                  <h5 className="font-bold">{r.name}</h5>
                  <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">{r.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="glass-dark rounded-[3rem] overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="p-12 md:p-20 bg-gradient-to-br from-brand-purple to-purple-900">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Ready to evolve <br /> your brand?</h2>
          <p className="text-purple-100/70 text-lg mb-12 font-light">
            Contact us for an exclusive consultation and let's craft something legendary together.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-medium">contact@sarcoma.dev</span>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                <Phone className="w-5 h-5" />
              </div>
              <span className="font-medium">+1 (555) 000-1234</span>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="font-medium">Studio Zero, New York</span>
            </div>
          </div>

          <div className="mt-12 flex gap-4">
            <button className="w-12 h-12 rounded-full glass border-white/20 flex items-center justify-center hover:scale-110 active:scale-95 transition-all">
              <Instagram className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-full glass border-white/20 flex items-center justify-center hover:scale-110 active:scale-95 transition-all">
              <Twitter className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-full glass border-white/20 flex items-center justify-center hover:scale-110 active:scale-95 transition-all">
              <Linkedin className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-12 md:p-20">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-purple focus:outline-none transition-all placeholder:text-gray-700" placeholder="John Wick" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-purple focus:outline-none transition-all placeholder:text-gray-700" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Service Type</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-purple focus:outline-none transition-all appearance-none cursor-pointer">
                  <option className="bg-black text-white">Content Production</option>
                  <option className="bg-black text-white">Digital Marketing</option>
                  <option className="bg-black text-white">Branding & Design</option>
                  <option className="bg-black text-white">Other Creative</option>
                </select>
            </div>
            <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-purple focus:outline-none transition-all resize-none placeholder:text-gray-700" placeholder="Tell us about your vision..." />
            </div>
            <button className="w-full bg-brand-purple py-5 rounded-2xl font-bold text-lg hover:bg-brand-purple-glow transition-all shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:scale-[1.02] active:scale-[0.98]">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-purple rounded-lg flex items-center justify-center rotate-12">
            <Film className="text-white w-5 h-5 -rotate-12" />
          </div>
          <span className="font-display text-xl font-bold tracking-tighter uppercase">
            Sarcoma<span className="text-brand-purple">.</span>
          </span>
        </div>

        <p className="text-gray-500 text-sm font-light">
          © 2026 Sarcoma Productions. All rights reserved.
        </p>

        <div className="flex gap-8 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
          <a href="#" className="hover:text-brand-purple transition-colors">Privacy</a>
          <a href="#" className="hover:text-brand-purple transition-colors">Terms</a>
          <a href="#" className="hover:text-brand-purple transition-colors">Imprint</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      
      {/* Visual Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />
      
      <Portfolio />
      
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-purple/5 blur-[120px] rounded-full -z-10" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, rotate: -5 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              className="relative z-10 rounded-3xl overflow-hidden glass p-2"
            >
              <img 
                src="https://images.unsplash.com/photo-1579165466511-7342080f1d51?q=80&w=2070&auto=format&fit=crop" 
                alt="Production Studio" 
                className="rounded-2xl w-full h-[500px] object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-purple/20 blur-[80px] rounded-full" />
            <div className="absolute -bottom-6 -left-6 z-20 glass p-8 rounded-2xl max-w-[200px]">
              <span className="text-4xl font-display font-bold text-brand-purple">12+</span>
              <p className="text-xs font-bold uppercase tracking-widest mt-2 text-gray-400">Years of Creative Excellence</p>
            </div>
          </div>
          
          <div>
            <span className="text-brand-purple font-bold tracking-[0.2em] uppercase text-sm">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 leading-tight">
              Crafting Immortality <br /> Through <span className="text-brand-purple italic">Digital Art.</span>
            </h2>
            <p className="text-gray-400 mt-8 text-lg font-light leading-relaxed">
              We started with a single camera and a grand vision: to redefine how media is consumed. 
              Today, Sarcoma is a global collective of directors, designers, and strategists 
              building brands for the digital renaissance.
            </p>
            <div className="mt-12 space-y-6">
              {[
                "AI-Driven Creative Workflow",
                "World-Class Production Facilities",
                "Dedicated post-production masters"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-purple/20 flex items-center justify-center">
                    <Plus className="w-3 h-3 text-brand-purple" />
                  </div>
                  <span className="font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <Contact />
      <Footer />
      
      {/* Global Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-50 bg-black">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-purple/5 blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-purple/5 blur-[120px] rounded-full opacity-30" />
      </div>
    </div>
  );
}
