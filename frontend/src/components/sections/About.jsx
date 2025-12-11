import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Brain, Wrench, MapPin, GraduationCap, Sparkles } from 'lucide-react';
import { personalInfo, skills } from '../../data/mock';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';

const skillCategories = [
  { key: 'frontend', title: 'Frontend', icon: Code2, color: 'cyan' },
  { key: 'backend', title: 'Backend', icon: Database, color: 'green' },
  { key: 'ml', title: 'Machine Learning', icon: Brain, color: 'pink' },
  { key: 'tools', title: 'Tools & Platforms', icon: Wrench, color: 'purple' }
];

const About = () => {
  return (
    <section id="about" className="relative py-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Who I <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Am</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curious mind passionate about understanding the mathematics that powers intelligent systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-4 bg-card/30 border-border/50 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Education</p>
                    <p className="text-sm font-medium text-foreground">NIT Kolkata</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 bg-card/30 border-border/50 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-sm font-medium text-foreground">Kolkata, India</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Bio */}
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {personalInfo.bio}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey into tech started with a fascination for how machines can learn patterns from data. 
                Today, I combine my love for mathematics with practical coding skills to build applications 
                that solve real-world problems.
              </p>
            </div>

            {/* Code Snippet */}
            <Card className="p-4 bg-background/80 border-border/50 font-mono text-xs sm:text-sm overflow-x-auto">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-muted-foreground text-xs">about_me.py</span>
              </div>
              <pre className="text-foreground whitespace-pre overflow-x-auto">
                <code>
{`class Developer:
    def __init__(self):
        self.name = "Sudipta Sarkar"
        self.role = "ML Enthusiast"
        self.interests = [
            "Neural Networks",
            "Backend Systems",
            "Mathematics"
        ]
        self.coffee_consumed = float('inf')`}
                </code>
              </pre>
            </Card>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
              >
                <Card className="p-5 bg-card/30 border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      category.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-400' :
                      category.color === 'green' ? 'bg-green-500/10 text-green-400' :
                      category.color === 'pink' ? 'bg-pink-500/10 text-pink-400' :
                      'bg-purple-500/10 text-purple-400'
                    }`}>
                      <category.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-foreground">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills[category.key].map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.05 * index }}
                      >
                        <Badge
                          variant="secondary"
                          className={`cursor-default transition-all duration-300 ${
                            category.color === 'cyan' ? 'hover:bg-cyan-500/20 hover:text-cyan-300' :
                            category.color === 'green' ? 'hover:bg-green-500/20 hover:text-green-300' :
                            category.color === 'pink' ? 'hover:bg-pink-500/20 hover:text-pink-300' :
                            'hover:bg-purple-500/20 hover:text-purple-300'
                          }`}
                        >
                          {skill.name}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
