import React from 'react';
import { motion } from 'framer-motion';
import { FeatureCard } from './components/FeatureCard';

const LandingPage = () => {
  return (
    <div className="min-h-screen engineering-grid selection:bg-[var(--color-accent)] selection:text-[var(--color-bg)]">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="text-2xl font-black tracking-tighter uppercase">
          Chronos<span className="text-[var(--color-accent)]">.Agent</span>
        </div>
        <div className="flex gap-6 text-sm font-medium uppercase tracking-widest opacity-70">
          <a href="#features" className="hover:text-[var(--color-accent)] transition-colors">Features</a>
          <a href="#docs" className="hover:text-[var(--color-accent)] transition-colors">Docs</a>
          <a href="https://github.com" className="hover:text-[var(--color-accent)] transition-colors">Github</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-6 text-center max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 border border-[var(--color-border)] text-xs uppercase tracking-widest mb-6 opacity-60">
            Infrastructure for AI Agent Ops
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8">
            THE TIME-MACHINE <br />
            FOR <span className="text-[var(--color-accent)]">AGENTS</span>
          </h1>
          <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] mb-12 max-w-2xl mx-auto leading-relaxed">
            Stop wasting tokens on repeated failures. Save state, rollback instantly, and ensure deterministic execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-10 py-4">Start Now</button>
            <button className="px-10 py-4 border border-[var(--color-border)] hover:bg-[var(--color-surface)] transition-colors text-lg">
              View Documentation
            </button>
          </div>
        </motion.div>
      </section>

      {/* Interactive Visualizer Placeholder */}
      <section className="px-6 pb-32 max-w-5xl mx-auto">
        <div className="card-surface h-64 flex items-center justify-center text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
             {/* Grid SVG / Line Animation would go here */}
          </div>
          <p className="text-[var(--color-text-secondary)] font-mono uppercase tracking-widest opacity-50">
            [ Interactive Timeline Visualization: State Snapshot & Rollback Demo ]
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-black tracking-tighter uppercase mb-4">Core Engineering</h2>
          <div className="h-1 w-20 bg-[var(--color-accent)] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard 
            title="Atomic Checkpoints" 
            description="Decorate your functions to automatically persist state snapshots to SQLite. Zero boilerplate, maximum safety." 
          />
          <FeatureCard 
            title="Non-linear Recovery" 
            description="Roll back to any previous stable state in milliseconds. Bypass the expensive 'repeat from start' loop." 
          />
          <FeatureCard 
            title="Token Optimization" 
            description="Drastically reduce LLM API costs by eliminating redundant execution of successful steps." 
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[var(--color-border)] text-center opacity-40 text-xs uppercase tracking-widest">
        © 2026 Chronos Agent Infrastructure. Built for Precision.
      </footer>
    </div>
  );
};

export default LandingPage;
