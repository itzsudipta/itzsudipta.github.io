import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Terminal, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

const NotFound = () => {
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
          <div className="bg-slate-900/80 border border-slate-700/50 rounded-lg p-6 font-mono">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-slate-500 text-sm">terminal</span>
            </div>
            <div className="text-left space-y-2">
              <p className="text-slate-400">
                <span className="text-cyan-400">$</span> cd /page-not-found
              </p>
              <p className="text-red-400">
                Error: Directory not found
              </p>
              <p className="text-slate-400">
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
          Oops! Page Not Found
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground mb-8 max-w-md mx-auto"
        >
          The page you're looking for doesn't exist or has been moved to another dimension.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/">
            <Button className="bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-slate-900 font-semibold shadow-lg shadow-cyan-500/25">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Button>
          </Link>
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="border-slate-700 hover:border-cyan-500/50 hover:bg-cyan-500/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
