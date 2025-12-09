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
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
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

  // Mock content for the blog post
  const mockContent = `
## Introduction

Machine learning has revolutionized the way we approach complex problems, from image recognition to natural language processing. In this article, we'll dive deep into the mathematical foundations that make neural networks tick.

## The Building Blocks

At its core, a neural network is a function approximator. Given enough neurons and layers, it can theoretically approximate any continuous function. This is known as the **Universal Approximation Theorem**.

### Forward Propagation

The forward pass computes the output of the network for a given input. For a single layer:

\`\`\`python
def forward(x, W, b):
    return np.dot(W, x) + b
\`\`\`

### Activation Functions

Activation functions introduce non-linearity into the network. Popular choices include:

- **ReLU**: \`f(x) = max(0, x)\`
- **Sigmoid**: \`f(x) = 1 / (1 + e^(-x))\`
- **Tanh**: \`f(x) = (e^x - e^(-x)) / (e^x + e^(-x))\`

## Backpropagation: The Magic Behind Learning

Backpropagation is the algorithm that allows neural networks to learn from their mistakes. It computes gradients efficiently using the chain rule of calculus.

### The Chain Rule

For a composition of functions, the derivative is the product of individual derivatives:

\`\`\`
dL/dW = dL/dy * dy/dz * dz/dW
\`\`\`

## Conclusion

Understanding the mathematics behind neural networks isn't just academic—it's essential for debugging models, designing architectures, and pushing the boundaries of what's possible in machine learning.
  `;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <div className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-background to-background" />
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
                  className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
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
            {/* Render mock content as styled paragraphs */}
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">{post.excerpt}</p>
              
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Introduction</h2>
              <p>
                Machine learning has revolutionized the way we approach complex problems, from image recognition 
                to natural language processing. In this article, we'll dive deep into the mathematical foundations 
                that make neural networks tick.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The Building Blocks</h2>
              <p>
                At its core, a neural network is a function approximator. Given enough neurons and layers, 
                it can theoretically approximate any continuous function. This is known as the 
                <span className="text-cyan-400"> Universal Approximation Theorem</span>.
              </p>

              {/* Code Block */}
              <Card className="p-4 bg-slate-900/80 border-slate-700/50 font-mono text-sm overflow-x-auto my-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-slate-500 text-xs">forward_pass.py</span>
                </div>
                <pre className="text-slate-300">
                  <code>{`def forward(x, W, b):
    """Compute forward pass for a single layer"""
    z = np.dot(W, x) + b
    a = activation(z)
    return a`}</code>
                </pre>
              </Card>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Key Takeaways</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Neural networks are universal function approximators</li>
                <li>Backpropagation enables efficient gradient computation</li>
                <li>Activation functions introduce non-linearity</li>
                <li>Understanding math helps debug and improve models</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Conclusion</h2>
              <p>
                Understanding the mathematics behind neural networks isn't just academic—it's essential for 
                debugging models, designing architectures, and pushing the boundaries of what's possible in 
                machine learning.
              </p>
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
                    <Card className="p-6 bg-slate-800/30 border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 group h-full">
                      <h4 className="font-bold text-foreground group-hover:text-cyan-400 transition-colors mb-2 line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {relatedPost.excerpt}
                      </p>
                      <span className="text-cyan-400 text-sm flex items-center gap-1">
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
