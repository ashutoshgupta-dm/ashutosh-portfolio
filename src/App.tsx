/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ExternalLink, 
  Linkedin, 
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Check, 
  CheckCircle,
  ChevronRight, 
  ChevronUp, 
  Download, 
  Megaphone, 
  TrendingUp, 
  Palette, 
  Globe, 
  Percent, 
  Video, 
  ArrowUpRight, 
  Sparkles, 
  BookOpen
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILL_CATEGORIES, EXPERIENCES, PROJECTS, SERVICES, EDUCATION_LIST } from './data';
import { SkillCategory } from './types';
// @ts-ignore
import ashutoshProfile from './assets/images/ashutosh_profile_correct.jpg';

// Helper component to map string icon names to Lucide react components
const IconComponent = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case 'Megaphone': return <Megaphone className={className} />;
    case 'TrendingUp': return <TrendingUp className={className} />;
    case 'Palette': return <Palette className={className} />;
    case 'Globe': return <Globe className={className} />;
    case 'Percent': return <Percent className={className} />;
    case 'Video': return <Video className={className} />;
    case 'Briefcase': return <Briefcase className={className} />;
    case 'GraduationCap': return <GraduationCap className={className} />;
    case 'BookOpen': return <BookOpen className={className} />;
    default: return <Megaphone className={className} />;
  }
};

export default function App() {
  // Navigation & UI States
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // List of sections for scroll-spy tracking
  const sections = ['home', 'about', 'skills', 'experience', 'projects', 'services', 'education', 'contact'];

  // Scroll tracking to update Active Navigation link and show Back-To-Top button
  useEffect(() => {
    const handleScroll = () => {
      // Back to top visibility
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Section indicator highlight logic
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Read-only project data
  const projectsList = PROJECTS;

  // Read-only profile photo
  const profileImage = ashutoshProfile;

  // List of all projects directly
  const filteredProjects = projectsList;

  // Smooth scroll handler
  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 110; // Offset for sticky navigation bar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Form input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Validation & mailto trigger
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasErrors = false;
    const errors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      errors.name = 'Please provide your name.';
      hasErrors = true;
    }

    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.';
      hasErrors = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
      hasErrors = true;
    }

    if (!formData.message.trim()) {
      errors.message = 'Please write a message so I can understand your project.';
      hasErrors = true;
    }

    if (hasErrors) {
      setFormErrors(errors);
      return;
    }

    // Success flow - trigger client's email client
    setFormSubmitted(true);
    
    const emailSubject = `Inquiry from Portfolio - ${formData.name} (${formData.company || 'Direct Contact'})`;
    const emailBody = `Hello Ashutosh,\n\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'Not specified'}\n\nMessage:\n${formData.message}\n\n--\nSent via Portfolio Website`;
    
    // Set timeout to let user see success banner before opening mail client
    setTimeout(() => {
      window.location.href = `mailto:ratangup386@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    }, 1200);
  };

  return (
    <div className="min-h-screen selection:bg-primary-blue/30 selection:text-secondary-cyan relative bg-primary-bg overflow-x-hidden">
      
      {/* Background radial glow spots */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary-blue/10 blur-[150px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-secondary-cyan/5 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[15%] left-[10%] w-[500px] h-[500px] rounded-full bg-primary-blue/5 blur-[140px] pointer-events-none" />

      {/* Abstract Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* STICKY NAVIGATION BAR */}
      <nav className="fixed top-0 left-0 w-full z-40 glass-nav h-20 transition-all duration-300">
        <div className="max-w-6xl mx-auto h-full px-6 flex items-center justify-between">
          
          {/* Logo Brand */}
          <button 
            id="nav-logo"
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 group text-left focus:outline-none"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center font-heading font-extrabold text-xl text-primary-bg shadow-lg group-hover:scale-105 transition-transform">
              AG
            </div>
            <div>
              <span className="block font-heading font-bold text-main-white leading-none tracking-tight">Ashutosh Gupta</span>
              <span className="block text-[11px] font-sans text-secondary-cyan tracking-wider font-medium mt-0.5 uppercase">Digital Marketing</span>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {sections.map((sec) => (
              <button
                key={sec}
                onClick={() => handleNavClick(sec)}
                className={`relative font-sans text-sm font-medium tracking-wide capitalize hover:text-secondary-cyan transition-colors py-1 cursor-pointer focus:outline-none ${
                  activeSection === sec ? 'text-secondary-cyan font-semibold' : 'text-secondary-text'
                }`}
              >
                {sec}
                {activeSection === sec && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-primary rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Let's Talk CTA button */}
          <div className="hidden lg:block">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-5 py-2.5 rounded-lg font-sans text-sm font-semibold border border-primary-blue/30 bg-primary-blue/10 text-secondary-cyan hover:bg-gradient-primary hover:text-primary-bg hover:border-transparent transition-all duration-300 cursor-pointer shadow-sm hover:shadow-primary-blue/20"
            >
              Let’s Talk
            </button>
          </div>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-main-white hover:text-secondary-cyan focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </nav>

      {/* MOBILE DRAWER NAVIGATION */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 w-full z-30 bg-[#07111F]/95 backdrop-blur-xl border-b border-white/5 py-8 px-6 lg:hidden flex flex-col space-y-4"
          >
            {sections.map((sec) => (
              <button
                key={sec}
                onClick={() => handleNavClick(sec)}
                className={`w-full text-left py-3 border-b border-white/5 font-sans text-base font-semibold tracking-wide capitalize flex justify-between items-center ${
                  activeSection === sec ? 'text-secondary-cyan' : 'text-secondary-text'
                }`}
              >
                <span>{sec}</span>
                <ChevronRight size={16} className={activeSection === sec ? 'text-secondary-cyan' : 'text-secondary-text/50'} />
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="mt-4 w-full py-3.5 rounded-lg font-sans text-center font-bold bg-gradient-primary text-primary-bg shadow-md"
            >
              Let's Talk
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <header id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Intro Text Column */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          
          {/* Availability Badge */}
          <div className="inline-flex">
            <span className="inline-flex items-center space-x-2 bg-primary-blue/10 border border-primary-blue/30 text-secondary-cyan rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-secondary-cyan animate-pulse" />
              <span>Open to Digital Marketing Opportunities</span>
            </span>
          </div>

          {/* Main Hero Header */}
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-main-white leading-[1.1] tracking-tight">
            I create digital experiences that help brands{' '}
            <span className="text-gradient">look better</span>,{' '}
            <span className="text-gradient">rank better</span>, and communicate clearly.
          </h1>

          {/* Supporting Statement */}
          <p className="font-sans text-base sm:text-lg text-secondary-text leading-relaxed max-w-xl">
            Hi, I’m <strong className="text-main-white font-semibold">Ashutosh Gupta</strong>. I combine creative social poster design, SEO optimization, responsive WordPress management, Meta Ads campaign support, and short-form video editing to grow your digital footprint.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => handleNavClick('projects')}
              className="px-6 py-3.5 rounded-lg bg-gradient-primary text-primary-bg font-sans font-bold text-sm tracking-wide shadow-lg hover:shadow-primary-blue/20 hover:scale-[1.01] active:scale-95 transition-all cursor-pointer flex items-center space-x-2"
            >
              <span>View My Work</span>
              <ChevronRight size={16} />
            </button>
            
            {/* Resume Download (Instructing user how to point to real file) */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              className="px-6 py-3.5 rounded-lg border border-white/10 hover:border-secondary-cyan/30 bg-white/5 hover:bg-white/10 text-main-white font-sans font-semibold text-sm tracking-wide transition-all cursor-pointer flex items-center space-x-2"
              title="Click to request Ashutosh's resume"
            >
              <Download size={16} className="text-secondary-cyan" />
              <span>Request Resume</span>
            </a>
          </div>

          {/* Quick Info & Social Row */}
          <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-mono text-secondary-text">
            <a 
              href="mailto:ratangup386@gmail.com" 
              className="flex items-center space-x-2 hover:text-secondary-cyan transition-colors"
            >
              <Mail size={14} className="text-primary-blue" />
              <span>ratangup386@gmail.com</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/ashutosh-gupta-92072a3b5/" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center space-x-2 hover:text-secondary-cyan transition-colors"
            >
              <Linkedin size={14} className="text-primary-blue" />
              <span>linkedin.com/in/ashutosh-gupta-92072a3b5</span>
            </a>
          </div>

        </div>

        {/* Right Card / Visual Placeholder Column */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          
          {/* Card Border glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue/20 to-secondary-cyan/10 blur-2xl rounded-2xl" />

          {/* Profile Card Mockup */}
          <div className="relative w-full max-w-sm glass-panel rounded-2xl p-8 border border-white/10 shadow-2xl overflow-hidden flex flex-col items-center text-center">
            
            {/* Abstract geometric mesh */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary-blue/10 rounded-full blur-xl pointer-events-none" />

            {/* PROFILE IMAGE CARD */}
            <div className="relative w-32 h-32 mb-6 select-none">
              <div className="w-32 h-32 rounded-full shadow-xl ring-4 ring-white/5 relative overflow-hidden">
                <img
                  src={profileImage}
                  alt="Ashutosh Gupta"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Profile Info */}
            <h2 className="font-heading font-bold text-xl text-main-white leading-tight">Ashutosh Gupta</h2>
            <p className="font-sans text-xs text-secondary-cyan tracking-wider font-semibold uppercase mt-1">Digital Marketing Executive</p>
            <p className="font-sans text-xs text-secondary-text mt-3 flex items-center space-x-1 justify-center">
              <MapPin size={12} className="text-primary-blue" />
              <span>New Delhi, India</span>
            </p>

            {/* Stats row inside card */}
            <div className="grid grid-cols-3 gap-2 w-full mt-8 pt-6 border-t border-white/5 font-sans">
              <div className="text-left">
                <span className="block font-heading font-extrabold text-lg text-secondary-cyan leading-none">1 Year</span>
                <span className="block text-[9px] text-secondary-text mt-1 leading-tight">Agency Exp.</span>
              </div>
              <div className="text-center">
                <span className="block font-heading font-extrabold text-lg text-secondary-cyan leading-none">5+ Brands</span>
                <span className="block text-[9px] text-secondary-text mt-1 leading-tight">Live Campaigns</span>
              </div>
              <div className="text-right">
                <span className="block font-heading font-extrabold text-lg text-secondary-cyan leading-none">Multi</span>
                <span className="block text-[9px] text-secondary-text mt-1 leading-tight">Channel Skill</span>
              </div>
            </div>

          </div>

          {/* FLOATING SKILL LABELS (Surrounding card on Desktop) */}
          <div className="hidden sm:block absolute top-[5%] left-[2%] bg-[#112438]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/5 shadow-md">
            <span className="font-sans text-xs font-bold text-main-white flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-cyan" />
              <span>SEO</span>
            </span>
          </div>

          <div className="hidden sm:block absolute top-[25%] right-[-5%] bg-[#112438]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/5 shadow-md">
            <span className="font-sans text-xs font-bold text-main-white flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-blue" />
              <span>Canva</span>
            </span>
          </div>

          <div className="hidden sm:block absolute bottom-[35%] left-[-10%] bg-[#112438]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/5 shadow-md">
            <span className="font-sans text-xs font-bold text-main-white flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-cyan" />
              <span>WordPress</span>
            </span>
          </div>

          <div className="hidden sm:block absolute bottom-[10%] right-[10%] bg-[#112438]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/5 shadow-md">
            <span className="font-sans text-xs font-bold text-main-white flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-blue" />
              <span>Meta Ads</span>
            </span>
          </div>

          <div className="hidden sm:block absolute top-[-5%] right-[20%] bg-[#112438]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/5 shadow-md">
            <span className="font-sans text-xs font-bold text-main-white flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-cyan" />
              <span>Video Editing</span>
            </span>
          </div>

        </div>

      </header>

      {/* TOOLS AND SKILLS STRIP */}
      <section className="border-y border-white/5 bg-[#0D1B2A]/40 py-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-2 text-secondary-cyan font-semibold text-xs tracking-wider uppercase font-sans whitespace-nowrap">
            <Sparkles size={14} />
            <span>PRIMARY TOOLSTACK & ECOSYSTEM</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-heading font-extrabold text-[#A8B3C5]/80">
            <span className="hover:text-main-white transition-colors">CANVA GRAPHICS</span>
            <span className="text-primary-blue/30 hidden sm:inline">•</span>
            <span className="hover:text-main-white transition-colors">WORDPRESS & ELEMENTOR</span>
            <span className="text-primary-blue/30 hidden sm:inline">•</span>
            <span className="hover:text-main-white transition-colors">GOOGLE SEARCH CONSOLE</span>
            <span className="text-primary-blue/30 hidden sm:inline">•</span>
            <span className="hover:text-main-white transition-colors">META ADS SUITE</span>
            <span className="text-primary-blue/30 hidden sm:inline">•</span>
            <span className="hover:text-main-white transition-colors">CAPCUT & FILMORA</span>
          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section id="about" className="py-20 max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-14 text-left">
          <span className="text-xs font-mono text-secondary-cyan tracking-wider font-semibold uppercase">01 / DISCOVER</span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-main-white">About My Marketing Journey</h2>
          <div className="w-12 h-[2px] bg-gradient-primary mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main text bio Column */}
          <div className="lg:col-span-7 space-y-6 text-secondary-text font-sans text-base leading-relaxed">
            <p>
              I am an energetic and results-driven <strong className="text-main-white font-semibold">Digital Marketing Executive</strong> based in New Delhi, India. Over the last 1 year working at <strong className="text-main-white font-semibold">Online Bano Agency</strong>, I have gained hands-on expertise managing and growing commercial social media channels, optimizing website landing pages for natural search traffic, and designing professional graphics that represent brands properly.
            </p>
            <p>
              Rather than sticking to a single marketing pillar, I have embraced a multi-skill hybrid approach. I understand that digital success requires a combination of visually striking design templates, clear writing styles, clean WordPress backend updating, structured SEO checklists, and high-quality short video sequences.
            </p>
            <p>
              My goal is simple: to help businesses build clean, modern, and trustworthy online systems that are easy to discover and visually captivating to read. Whether implementing structured keywords, arranging campaign deliverables, or drafting compelling ad copy, I keep performance standards and client guidelines front and center.
            </p>

            {/* Meta information tags */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
              <div className="space-y-1">
                <span className="block text-xs font-mono text-secondary-cyan uppercase">Based in</span>
                <span className="block text-sm font-semibold text-main-white">New Delhi, India</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xs font-mono text-secondary-cyan uppercase">Languages spoken</span>
                <span className="block text-sm font-semibold text-main-white">English and Hindi</span>
              </div>
            </div>

          </div>

          {/* Value cards Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Value Card 1 */}
            <div className="bg-[#112438]/40 border border-white/5 rounded-xl p-5 hover:border-primary-blue/30 transition-all shadow-sm">
              <div className="flex items-start space-x-3">
                <div className="p-2.5 rounded-lg bg-primary-blue/10 text-secondary-cyan mt-1">
                  <Palette size={18} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-main-white">Creative Execution</h3>
                  <p className="font-sans text-xs text-secondary-text mt-1.5 leading-relaxed">
                    Designs clean, balanced, and product-focused social media creatives, flyers, and short-form assets that align with target brand guidelines.
                  </p>
                </div>
              </div>
            </div>

            {/* Value Card 2 */}
            <div className="bg-[#112438]/40 border border-white/5 rounded-xl p-5 hover:border-primary-blue/30 transition-all shadow-sm">
              <div className="flex items-start space-x-3">
                <div className="p-2.5 rounded-lg bg-primary-blue/10 text-secondary-cyan mt-1">
                  <TrendingUp size={18} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-main-white">SEO & Search Mindset</h3>
                  <p className="font-sans text-xs text-secondary-text mt-1.5 leading-relaxed">
                    Updates page layouts and copy targeting keyword search intents, structured page metadata, and technical site performance.
                  </p>
                </div>
              </div>
            </div>

            {/* Value Card 3 */}
            <div className="bg-[#112438]/40 border border-white/5 rounded-xl p-5 hover:border-primary-blue/30 transition-all shadow-sm">
              <div className="flex items-start space-x-3">
                <div className="p-2.5 rounded-lg bg-primary-blue/10 text-secondary-cyan mt-1">
                  <CheckCircle size={18} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-main-white">Reliable Agency Delivery</h3>
                  <p className="font-sans text-xs text-secondary-text mt-1.5 leading-relaxed">
                    Translates agency briefings and feedback into finalized edits, remaining communicative, responsive, and punctual.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* SKILLS AND CAPABILITIES SECTION */}
      <section id="skills" className="py-20 bg-[#0D1B2A]/20 relative">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="flex flex-col space-y-2 mb-14 text-left">
            <span className="text-xs font-mono text-secondary-cyan tracking-wider font-semibold uppercase">02 / EXPERTISE</span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-main-white">Skills & Capabilities</h2>
            <div className="w-12 h-[2px] bg-gradient-primary mt-2" />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((category) => (
              <div 
                key={category.id} 
                className="bg-[#112438]/60 border border-white/5 rounded-2xl p-6 hover:border-primary-blue/20 hover:bg-[#112438]/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary-blue/10 text-secondary-cyan flex items-center justify-center">
                      <IconComponent name={category.iconName} className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-base text-main-white">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <ul className="space-y-3 font-sans">
                    {category.items.map((skill, idx) => (
                      <li key={idx} className="flex items-center space-x-2.5 text-sm text-secondary-text">
                        <Check size={14} className="text-secondary-cyan flex-shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 text-[10px] font-mono text-secondary-cyan tracking-wider uppercase">
                  Industry Practice Approved
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WORK EXPERIENCE SECTION */}
      <section id="experience" className="py-20 max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-14 text-left">
          <span className="text-xs font-mono text-secondary-cyan tracking-wider font-semibold uppercase">03 / TRACK RECORD</span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-main-white">Work Experience</h2>
          <div className="w-12 h-[2px] bg-gradient-primary mt-2" />
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-primary-blue/20 pl-6 sm:pl-8 ml-4 space-y-12">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline dot */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-primary-bg border-4 border-primary-blue flex items-center justify-center group-hover:border-secondary-cyan transition-colors" />

              {/* Card Container */}
              <div className="bg-[#112438]/40 border border-white/5 hover:border-primary-blue/20 p-6 sm:p-8 rounded-2xl transition-all duration-300 shadow-sm">
                
                {/* Job Title and Details */}
                <div className="mb-4 text-left">
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-main-white leading-tight">
                    {exp.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-secondary-cyan font-medium mt-1">
                    <span>{exp.company}</span>
                    <span className="text-white/20">•</span>
                    <span className="text-xs text-secondary-text">{exp.location}</span>
                  </div>
                </div>

                <p className="font-sans text-sm text-secondary-text leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Bullets List */}
                <div className="space-y-3.5 mb-8">
                  <h4 className="font-heading font-bold text-xs text-main-white tracking-wider uppercase">Key Actions & Responsibilities:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 font-sans text-sm text-secondary-text">
                    {exp.bulletPoints.map((pt, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5">
                        <Check size={14} className="text-secondary-cyan mt-1 flex-shrink-0" />
                        <span className="leading-normal">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools Used Row */}
                <div className="border-t border-white/5 pt-5 flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[10px] text-secondary-cyan uppercase tracking-wider mr-2">Tools applied:</span>
                  {exp.toolsUsed.map((tool) => (
                    <span key={tool} className="bg-white/5 hover:bg-white/10 text-main-white font-sans text-xs px-3 py-1 rounded-md border border-white/5 transition-colors">
                      {tool}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </section>

      {/* SELECTED PROJECTS SECTION */}
      <section id="projects" className="py-20 bg-[#0D1B2A]/20 relative">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="mb-12">
            <div className="flex flex-col space-y-2 text-left">
              <span className="text-xs font-mono text-secondary-cyan tracking-wider font-semibold uppercase">04 / CREATIVE SHOWCASE</span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-main-white">Selected Projects</h2>
              <div className="w-12 h-[2px] bg-gradient-primary mt-2" />
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              return (
                <div 
                  key={project.id} 
                  className="group bg-[#112438]/50 border border-white/5 hover:border-primary-blue/30 rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 relative"
                >
                  {/* Thumbnail Image Container */}
                  <div className="relative aspect-video overflow-hidden bg-primary-bg select-none">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                    
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col justify-between flex-grow text-left">
                    <div className="space-y-4">
                      {/* 1. Client/Brand Name & Social Media Links */}
                      <div className="flex items-center justify-between gap-3 border-b border-white/5 pb-2.5">
                        <h3 className="font-heading font-bold text-lg text-main-white leading-tight group-hover:text-secondary-cyan transition-colors">
                          {project.title}
                        </h3>
                        {project.socialLinks && project.socialLinks.length > 0 && (
                          <div className="flex items-center gap-1.5 flex-shrink-0">
                            {project.socialLinks.map((link, idx) => {
                              let IconComponent = Globe;
                              if (link.platform === 'linkedin') IconComponent = Linkedin;
                              else if (link.platform === 'instagram') IconComponent = Instagram;
                              else if (link.platform === 'youtube') IconComponent = Youtube;
                              else if (link.platform === 'facebook') IconComponent = Facebook;
                              else if (link.platform === 'twitter') IconComponent = Twitter;

                              return (
                                <a
                                  key={idx}
                                  href={link.url.startsWith('http') ? link.url : `https://${link.url}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-1.5 rounded-md bg-[#112438]/50 hover:bg-[#112438]/80 text-[#3a86c8] hover:text-secondary-cyan border border-white/5 hover:border-secondary-cyan/30 transition-all cursor-pointer"
                                  title={`${link.platform.toUpperCase()} Link`}
                                >
                                  <IconComponent size={13} />
                                </a>
                              );
                            })}
                          </div>
                        )}
                      </div>

                      {/* 2. My Work */}
                      <div className="space-y-1.5">
                        <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-secondary-cyan/80">My Work</h4>
                        {project.myWorkPoints && project.myWorkPoints.length > 0 ? (
                          <ul className="space-y-1.5 font-sans text-xs text-secondary-text leading-relaxed">
                            {project.myWorkPoints.map((point, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <Check size={12} className="text-secondary-cyan mt-0.5 flex-shrink-0" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-xs text-secondary-text/40 italic">No work description points provided.</p>
                        )}
                      </div>

                      {/* 3. About the Client */}
                      <div className="space-y-1">
                        <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-secondary-cyan/80">About the Client</h4>
                        <p className="font-sans text-xs text-secondary-text leading-relaxed whitespace-pre-line">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 pt-5 border-t border-white/5">
                      {/* Website button */}
                      <div className="flex flex-col gap-2">
                        {project.websiteUrl ? (
                          <a
                            href={project.websiteUrl.startsWith('http') ? project.websiteUrl : `https://${project.websiteUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-2.5 rounded-lg bg-gradient-primary text-primary-bg hover:shadow-[0_0_15px_rgba(0,180,216,0.3)] font-sans font-extrabold text-xs tracking-wide transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                          >
                            <span>Website</span>
                            <ExternalLink size={13} />
                          </a>
                        ) : (
                          <button
                            disabled
                            className="w-full py-2.5 rounded-lg border border-white/5 bg-white/5 text-secondary-text/30 font-sans font-semibold text-xs tracking-wide cursor-not-allowed flex items-center justify-center space-x-1.5"
                          >
                            <span>Website Not Added</span>
                            <ExternalLink size={13} className="opacity-30" />
                          </button>
                        )}

                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Role-based Disclaimer Note */}
          <div className="mt-12 text-center max-w-xl mx-auto">
            <p className="font-sans text-xs text-secondary-text italic bg-white/5 rounded-xl py-3 px-6 border border-white/5">
              “Selected work is shown as role-based case summaries. Detailed client creatives and assets can be shared securely during an interview where permitted.”
            </p>
          </div>

        </div>
      </section>





      {/* SERVICES SECTION */}
      <section id="services" className="py-20 max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-14 text-left">
          <span className="text-xs font-mono text-secondary-cyan tracking-wider font-semibold uppercase">05 / HOW I HELP</span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-main-white">Professional Services Offered</h2>
          <div className="w-12 h-[2px] bg-gradient-primary mt-2" />
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv) => (
            <div 
              key={srv.id} 
              className="bg-[#112438]/40 border border-white/5 rounded-2xl p-6 hover:border-primary-blue/30 transition-all duration-300"
            >
              {/* Header Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary-blue/10 text-secondary-cyan flex items-center justify-center mb-6">
                <IconComponent name={srv.iconName} className="w-6 h-6" />
              </div>

              <h3 className="font-heading font-extrabold text-lg text-main-white mb-2 leading-tight">
                {srv.title}
              </h3>
              
              <p className="font-sans text-sm text-secondary-text leading-relaxed mb-6">
                {srv.description}
              </p>

              {/* Bullets sub-list */}
              <div className="space-y-2 pt-4 border-t border-white/5">
                {srv.bullets.map((b, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs font-sans text-secondary-text">
                    <Check size={12} className="text-secondary-cyan flex-shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* EDUCATION AND TRAINING SECTION */}
      <section id="education" className="py-20 bg-[#0D1B2A]/20 relative">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="flex flex-col space-y-2 mb-14 text-left">
            <span className="text-xs font-mono text-secondary-cyan tracking-wider font-semibold uppercase">06 / QUALIFICATIONS</span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-main-white">Education & Training</h2>
            <div className="w-12 h-[2px] bg-gradient-primary mt-2" />
          </div>

          {/* Grid list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION_LIST.map((edu) => (
              <div 
                key={edu.id} 
                className="bg-[#112438]/40 border border-white/5 rounded-2xl p-6 hover:border-primary-blue/20 transition-all duration-300 flex items-start space-x-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-blue/10 text-secondary-cyan flex items-center justify-center mt-1 flex-shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="space-y-2 font-sans">
                  <span className="inline-block bg-white/5 text-[10px] font-mono font-semibold px-2.5 py-1 rounded text-secondary-cyan">
                    {edu.period || 'Professional Focus'}
                  </span>
                  <h3 className="font-heading font-extrabold text-base text-main-white leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-xs font-semibold text-secondary-text">
                    {edu.institution}
                  </p>
                  {edu.details && (
                    <p className="text-xs text-secondary-text/80 leading-relaxed pt-2">
                      {edu.details}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 max-w-6xl mx-auto px-6 relative">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-14 text-left">
          <span className="text-xs font-mono text-secondary-cyan tracking-wider font-semibold uppercase">07 / GET IN TOUCH</span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-main-white">Have a role, project, or idea in mind?</h2>
          <div className="w-12 h-[2px] bg-gradient-primary mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Details block */}
          <div className="lg:col-span-5 space-y-8">
            <p className="font-sans text-base text-secondary-text leading-relaxed">
              I’m active, responsive, and always open to discussing full-time opportunities, long-term retainers, startup project marketing assistance, or agency freelance coordination. Reach out directly and let’s grow your brand.
            </p>

            {/* Quick Contact rows */}
            <div className="space-y-4 font-sans">
              
              <div className="flex items-center space-x-4 p-4 bg-[#112438]/30 rounded-xl border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-primary-blue/10 text-secondary-cyan flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-secondary-text uppercase">Send an Email</span>
                  <a href="mailto:ratangup386@gmail.com" className="block text-sm font-bold text-main-white hover:text-secondary-cyan transition-colors">
                    ratangup386@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-[#112438]/30 rounded-xl border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-primary-blue/10 text-secondary-cyan flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-secondary-text uppercase">Call or WhatsApp</span>
                  <a href="tel:+919667867633" className="block text-sm font-bold text-main-white hover:text-secondary-cyan transition-colors">
                    +91 96678 67633
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-[#112438]/30 rounded-xl border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-primary-blue/10 text-secondary-cyan flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-secondary-text uppercase">Office Location</span>
                  <span className="block text-sm font-bold text-main-white">
                    New Delhi, India
                  </span>
                </div>
              </div>

            </div>

            {/* Social channels card */}
            <div className="bg-[#112438]/50 border border-white/5 p-6 rounded-2xl flex flex-col justify-center items-center text-center space-y-4">
              <span className="text-xs font-mono text-secondary-text uppercase tracking-wider">Active Professional Profile</span>
              <a 
                href="https://www.linkedin.com/in/ashutosh-gupta-92072a3b5/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-[#0077B5]/10 border border-[#0077B5]/30 hover:bg-[#0077B5]/20 text-[#0077B5] font-sans font-bold text-sm tracking-wide transition-all"
              >
                <Linkedin size={16} />
                <span>Connect on LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Form column */}
          <div className="lg:col-span-7">
            
            <div className="bg-[#112438]/40 border border-white/5 p-6 sm:p-8 rounded-2xl">
              
              <h3 className="font-heading font-extrabold text-lg text-main-white mb-6">
                Send a Direct Message
              </h3>

              {formSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-primary-blue/10 border border-primary-blue/30 p-6 rounded-xl text-center space-y-3"
                >
                  <CheckCircle size={40} className="text-secondary-cyan mx-auto" />
                  <h4 className="font-heading font-bold text-main-white">Message Validated Successfully!</h4>
                  <p className="font-sans text-xs text-secondary-text leading-relaxed">
                    Opening your default email application (mailto:). Please confirm and send the email. I look forward to connecting!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 font-sans text-sm">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Name input */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-xs font-semibold text-secondary-text uppercase">Full Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Ashutosh Gupta" 
                        className={`w-full px-4 py-3 rounded-lg bg-primary-bg border ${
                          formErrors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-secondary-cyan'
                        } text-main-white placeholder-white/20 focus:outline-none transition-colors`}
                      />
                      {formErrors.name && (
                        <span className="block text-[11px] text-red-400 font-semibold mt-1">{formErrors.name}</span>
                      )}
                    </div>

                    {/* Email input */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-semibold text-secondary-text uppercase">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="yourname@gmail.com" 
                        className={`w-full px-4 py-3 rounded-lg bg-primary-bg border ${
                          formErrors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-secondary-cyan'
                        } text-main-white placeholder-white/20 focus:outline-none transition-colors`}
                      />
                      {formErrors.email && (
                        <span className="block text-[11px] text-red-400 font-semibold mt-1">{formErrors.email}</span>
                      )}
                    </div>

                  </div>

                  {/* Company input */}
                  <div className="space-y-1.5">
                    <label htmlFor="company" className="block text-xs font-semibold text-secondary-text uppercase font-sans">Company / Organization</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company" 
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Agency, Brand or Freelance Client" 
                      className="w-full px-4 py-3 rounded-lg bg-primary-bg border border-white/10 focus:border-secondary-cyan text-main-white placeholder-white/20 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Message input */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-semibold text-secondary-text uppercase font-sans">Your Message *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5} 
                      placeholder="Tell me about your marketing objectives, active openings, or brand ideas..." 
                      className={`w-full px-4 py-3 rounded-lg bg-primary-bg border ${
                        formErrors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-secondary-cyan'
                      } text-main-white placeholder-white/20 focus:outline-none transition-colors resize-none`}
                    />
                    {formErrors.message && (
                      <span className="block text-[11px] text-red-400 font-semibold mt-1">{formErrors.message}</span>
                    )}
                  </div>

                  {/* Form instructions note for future backend hookups */}
                  <div className="text-[10px] text-secondary-text/60 italic pb-2">
                    * Form handles client-side input validation first, then invokes mailto trigger. (To connect an API gateway, update the script.js or React app context).
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-lg bg-gradient-primary text-primary-bg font-sans font-extrabold text-sm tracking-wider uppercase shadow-lg hover:shadow-primary-blue/20 hover:scale-[1.01] active:scale-95 transition-all cursor-pointer"
                  >
                    Send Message
                  </button>

                </form>
              )}

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-[#050B14] border-t border-white/5 py-12 text-secondary-text font-sans text-sm relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center font-heading font-extrabold text-sm text-primary-bg">
              AG
            </div>
            <div>
              <span className="block text-main-white font-bold leading-tight">Ashutosh Gupta</span>
              <span className="block text-[10px] text-secondary-cyan tracking-wide font-medium">Digital Marketing Executive</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium">
            <button onClick={() => handleNavClick('home')} className="hover:text-secondary-cyan transition-colors cursor-pointer">Home</button>
            <button onClick={() => handleNavClick('about')} className="hover:text-secondary-cyan transition-colors cursor-pointer">About</button>
            <button onClick={() => handleNavClick('skills')} className="hover:text-secondary-cyan transition-colors cursor-pointer">Skills</button>
            <button onClick={() => handleNavClick('experience')} className="hover:text-secondary-cyan transition-colors cursor-pointer">Experience</button>
            <button onClick={() => handleNavClick('projects')} className="hover:text-secondary-cyan transition-colors cursor-pointer">Projects</button>
            <button onClick={() => handleNavClick('contact')} className="hover:text-secondary-cyan transition-colors cursor-pointer">Contact</button>
          </div>

          <div className="text-center md:text-right text-xs text-secondary-text/60">
            <p>© 2026 Ashutosh Gupta. All Rights Reserved.</p>
            <p className="mt-1">Designed for Professional Agency Placement.</p>
          </div>

        </div>
      </footer>

      {/* FLOATING BACK TO TOP BUTTON */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-primary text-primary-bg shadow-lg z-50 cursor-pointer focus:outline-none hover:scale-105 active:scale-95 transition-all"
            aria-label="Back to top"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>


    </div>
  );
}
