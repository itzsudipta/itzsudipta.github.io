import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, Share2, Twitter, Linkedin, Link2, ArrowRight } from 'lucide-react';
import { blogPosts } from '../../data/mock';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 text-center px-4">
          {/* Terminal-style 404 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-8"
          >
            <div className="bg-card/50 border border-border/50 rounded-lg p-6 font-mono backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-muted-foreground text-sm">terminal</span>
              </div>
              <div className="text-left space-y-2">
                <p className="text-muted-foreground">
                  <span className="text-cyan-400">$</span> cd /blog/{slug}
                </p>
                <p className="text-red-400">
                  Error: Blog post not found
                </p>
                <p className="text-muted-foreground">
                  <span className="text-cyan-400">$</span> echo $STATUS_CODE
                </p>
                <p className="text-7xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                  404
                </p>
              </div>
            </div>
          </motion.div>

          {/* Message */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl font-bold text-foreground mb-4"
          >
            Oops! Blog Post Not Found
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground mb-8 max-w-md mx-auto"
          >
            The blog post you're looking for doesn't exist or has been moved.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/blog">
              <Button className="bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-primary-foreground font-semibold shadow-lg shadow-cyan-500/25">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
            <Link to="/">
              <Button
                variant="outline"
                className="border-border hover:border-primary/50 hover:bg-primary/10"
              >
                Go Home
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Get related posts (same tags, different post)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 2);

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = post.title;
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        break;
      default:
        break;
    }
  };

  // Render markdown-style content
  const renderContent = (content) => {
    if (!content) return null;

    const lines = content.split('\n');
    const elements = [];
    let codeBlock = '';
    let inCodeBlock = false;
    let listItems = [];
    let inList = false;

    lines.forEach((line, index) => {
      // Code blocks
      if (line.trim().startsWith('```')) {
        if (inCodeBlock) {
          elements.push(
            <Card key={`code-${index}`} className="p-4 bg-slate-900/50 border-slate-700 font-mono text-sm overflow-x-auto my-6">
              <pre className="text-green-400">
                <code>{codeBlock}</code>
              </pre>
            </Card>
          );
          codeBlock = '';
          inCodeBlock = false;
        } else {
          inCodeBlock = true;
        }
        return;
      }

      if (inCodeBlock) {
        codeBlock += line + '\n';
        return;
      }

      // Close list if needed
      if (inList && !line.trim().startsWith('-') && !line.trim().startsWith('|')) {
        elements.push(
          <ul key={`list-${index}`} className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
            {listItems.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        );
        listItems = [];
        inList = false;
      }

      // Headers
      if (line.startsWith('# ')) {
        elements.push(<h1 key={index} className="text-4xl font-bold text-foreground mt-8 mb-4">{line.substring(2)}</h1>);
      } else if (line.startsWith('## ')) {
        elements.push(<h2 key={index} className="text-3xl font-bold text-foreground mt-8 mb-4">{line.substring(3)}</h2>);
      } else if (line.startsWith('### ')) {
        elements.push(<h3 key={index} className="text-2xl font-bold text-foreground mt-6 mb-3">{line.substring(4)}</h3>);
      }
      // Lists
      else if (line.trim().startsWith('- ')) {
        inList = true;
        listItems.push(line.substring(line.indexOf('-') + 1).trim());
      }
      // Tables
      else if (line.trim().startsWith('|')) {
        // Simple table rendering - could be enhanced
        elements.push(<div key={index} className="my-4 text-muted-foreground font-mono text-sm">{line}</div>);
      }
      // Blockquotes
      else if (line.trim().startsWith('>')) {
        elements.push(
          <blockquote key={index} className="border-l-4 border-primary pl-4 my-4 italic text-muted-foreground">
            {line.substring(line.indexOf('>') + 1).trim()}
          </blockquote>
        );
      }
      // Horizontal rules
      else if (line.trim() === '---') {
        elements.push(<hr key={index} className="border-slate-700 my-8" />);
      }
      // Regular paragraphs
      else if (line.trim()) {
        // Handle inline code, bold, italic
        let processedLine = line
          .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-bold">$1</strong>')
          .replace(/\*(.*?)\*/g, '<em>$1</em>')
          .replace(/`(.*?)`/g, '<code class="bg-slate-800 px-2 py-1 rounded text-cyan-400 text-sm">$1</code>');

        elements.push(
          <p key={index} className="my-4 text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: processedLine }} />
        );
      }
    });

    // Close any remaining list
    if (inList && listItems.length > 0) {
      elements.push(
        <ul key="list-end" className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
          {listItems.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      );
    }

    return elements;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <div className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/blog">
                <Button variant="ghost" className="mb-8 -ml-2 text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Button>
              </Link>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  className="bg-primary/10 text-primary border border-primary/20"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
            >
              {post.title}
            </motion.h1>

            {/* Meta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-6 text-muted-foreground"
            >
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            {/* Render actual blog content */}
            <div className="space-y-2">
              {post.content && renderContent(post.content)}
            </div>
          </motion.div>

          {/* Share Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="border-t border-slate-800 pt-8 mt-12"
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <span className="text-muted-foreground flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Share this article
              </span>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleShare('twitter')}
                  className="border-slate-700 hover:border-cyan-500/50 hover:bg-cyan-500/10"
                >
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleShare('linkedin')}
                  className="border-slate-700 hover:border-cyan-500/50 hover:bg-cyan-500/10"
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleShare('copy')}
                  className="border-slate-700 hover:border-cyan-500/50 hover:bg-cyan-500/10"
                >
                  <Link2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-16"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`}>
                    <Card className="p-6 bg-card/30 border-border/50 hover:border-primary/30 transition-all duration-300 group h-full">
                      <h4 className="font-bold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {relatedPost.excerpt}
                      </p>
                      <span className="text-primary text-sm flex items-center gap-1">
                        Read more
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Card>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
