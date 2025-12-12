import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, Terminal, ArrowUpRight } from 'lucide-react';
import { personalInfo, socialLinks, navLinks } from '../../data/mock';

const iconMap = {
  Github,
  Linkedin,
  Twitter,
  Mail
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-primary/10">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 group mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-pink-500 flex items-center justify-center">
                <Terminal className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-base text-foreground">
                Sudipta<span className="text-primary">.</span>dev
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md mb-3 leading-relaxed text-sm">
              {personalInfo.shortBio} Based in {personalInfo.location}, building the future one line of code at a time.
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-8 h-8 rounded-lg bg-card/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-2 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group text-sm"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-2 text-sm uppercase tracking-wider">Get in Touch</h3>
            <ul className="space-y-1.5">
              <li>
                <a
                  href={`mailto:${personalInfo.email}?subject=Hello%20Sudipta%20-%20Let's%20Connect&body=Hi%20Sudipta,%0D%0A%0D%0AI%20found%20your%20portfolio%20at%20iamsudiptasarkar.me%20and%20would%20like%20to%20connect%20with%20you.%0D%0A%0D%0AName:%20%0D%0ACompany/Organization:%20%0D%0APurpose:%20%0D%0A%0D%0ALooking%20forward%20to%20hearing%20from%20you!%0D%0A%0D%0ABest%20regards`}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li className="text-muted-foreground text-sm">{personalInfo.location}</li>
              <li className="text-muted-foreground text-sm">{personalInfo.institution}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-4 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-muted-foreground text-xs sm:text-sm flex items-center gap-1">
              © {currentYear} {personalInfo.name}. Built with
              <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
              and lots of coffee.
            </p>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
