import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code2, Sparkles } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Blog from '../components/sections/Blog';
import BackToTop from '../components/ui/BackToTop';

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Blog Content */}
      <main className="relative z-10 pt-20">
        <Blog showAll={true} />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default BlogPage;
