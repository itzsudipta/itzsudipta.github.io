import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Blog from '../components/sections/Blog';
import BackToTop from '../components/ui/BackToTop';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <Blog showAll={true} />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default BlogPage;
