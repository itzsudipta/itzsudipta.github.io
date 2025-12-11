import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Twitter, Mail, ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';
import { personalInfo, socialLinks } from '../../data/mock';

const iconMap = {
  Github,
  Linkedin,
  Twitter,
  Mail
};

const TypewriterText = ({ texts, className }) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-16 md:pt-20 pb-6 md:pb-8">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-background">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,245,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-4 md:py-6 lg:py-8">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          {/* Terminal-style greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
              className="mb-4 sm:mb-6"
          >
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-card/50 border border-primary/20 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs sm:text-sm font-mono text-primary whitespace-nowrap">Available for opportunities</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-3 sm:mb-4"
          >
              <span className="font-mono text-primary text-sm sm:text-base md:text-lg">{'> '}</span>
              <span className="font-mono text-muted-foreground text-sm sm:text-base md:text-lg">Hello, I'm</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6"
          >
            <span className="text-foreground">{personalInfo.name.split(' ')[0]} </span>
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-pink-400 bg-clip-text text-transparent">
              {personalInfo.name.split(' ')[1]}
            </span>
          </motion.h1>

          {/* Dynamic Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 sm:mb-8 h-8 sm:h-10"
          >
            <TypewriterText
                texts={['ML & Web Enthu', 'Backend Explorer', 'Student @ NIT Kolkata']}
              className="font-medium"
            />
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mb-8 sm:mb-10 leading-relaxed"
          >
              Architecting the convergence of Mathematical Theory and Backend Engineering. I transform experimental ML models into production-grade, scalable web systems. My focus: efficient algorithms, optimized data pipelines, and low-latency APIs.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-12 w-full sm:w-auto"
          >
            <Button
              onClick={scrollToProjects}
              size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 px-6 sm:px-8 w-full sm:w-auto text-sm sm:text-base"
            >
              View My Work
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
              <a
                href="/assets/documents/Sudipta_Sarkar_CV.pdf"
                download="Sudipta_Sarkar_CV.pdf"
                className="inline-flex"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-border hover:border-primary/50 hover:bg-primary/10 text-foreground px-6 sm:px-8 w-full sm:w-auto text-sm sm:text-base"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-3 flex-wrap"
          >
            {socialLinks.map((link, index) => {
              const Icon = iconMap[link.icon];
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-xl bg-card/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

          {/* Right Side - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center order-1 lg:order-2"
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-cyan-500 rounded-full blur-2xl opacity-75 group-hover:opacity-100 animate-pulse" />

              {/* Outer Ring */}
              <div className="relative w-40 xs:w-48 sm:w-64 md:w-80 lg:w-96 h-40 xs:h-48 sm:h-64 md:h-80 lg:h-96 rounded-full bg-gradient-to-br from-cyan-500 via-pink-500 to-purple-500 p-1">
                {/* Middle Ring */}
                <div className="w-full h-full rounded-full bg-slate-900 p-2">
                  {/* Inner Ring */}
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-900 p-3 border border-cyan-500/30">
                    {/* Profile Image Container */}
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-cyan-500/20 shadow-2xl shadow-cyan-500/50">
                      <img
                        src="/assets/images/132774307.webp"
                        alt={personalInfo.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Particles */}
              <div className="absolute top-0 right-0 w-4 h-4 bg-cyan-400 rounded-full animate-ping" />
              <div className="absolute bottom-10 left-0 w-3 h-3 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
              <div className="absolute top-20 right-10 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground cursor-pointer"
            onClick={() => {
              const element = document.getElementById('about');
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
