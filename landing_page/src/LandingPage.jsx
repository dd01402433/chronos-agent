import React from 'react';
import { motion } from 'framer-motion';
const Glow = ({ color, position }) => <div className={`fixed w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 pointer-events-none z-[-1] ${position}`} style={{ backgroundColor: color }} />;
const BentoItem = ({ children, className = "", delay = 0 }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay }} className={`glass-card rounded-3xl p-8 ${className}`}>{children}</motion.div>
);
const LandingPage = () => {
  return (
    <div className="min-h-screen relative">
      <div className="mesh-bg" /><Glow color="oklch(75% 0.15 160)" position="top-[-10%] left-[-10%]" /><Glow color="oklch(65% 0.2 250)" position="bottom-[-10%] right-[-10%]" />
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto relative z-10">
        <div className="text-2xl font-black tracking-tighter uppercase">Chronos<span className="text-[var(--color-accent)]">.Agent</span></div>
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest opacity-60"><a href="#features" className="hover:text-[var(--color-accent)] transition-colors">Infrastructure</a><a href="#docs" className="hover:text-[var(--color-accent)] transition-colors">Documentation</a><a href="https://github.com" className="hover:text-[var(--color-accent)] transition-colors">Github</a></div>
        <button className="btn-outline text-xs uppercase font-bold px-5 py-2">Launch App</button>
      </nav>
      <section className="pt-32 pb-20 px-6 text-center max-w-5xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}><span className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-border)] text-[10px] uppercase tracking-widest mb-8 opacity-50 backdrop-blur-md">v1.0 Stable Release</span><h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.9] mb-8 text-gradient">TIME-MACHINE <br /> FOR <span className="text-[var(--color-accent)]">AGENTS</span></h1><p className="text-lg md:text-2xl text-[var(--color-text-secondary)] mb-12 max-w-2xl mx-auto leading-relaxed font-light">Stop wasting tokens on repeated failures. <span className="text-[var(--color-text-primary)] font-medium">Save state, rollback instantly,</span> and ensure deterministic execution for complex AI workflows.</p><div className="flex flex-col sm:flex-row gap-6 justify-center"><button className="btn-luxury text-lg">Get Started Free</button><button className="btn-outline text-lg">Read the Whitepaper</button></div></motion.div>
      </section>
      <section id="features" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
        <div className="mb-20 text-center"><h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">Engineering Core</h2><div className="h-1.5 w-20 bg-[var(--color-accent)] mx-auto rounded-full shadow-[0_0_15px_var(--color-accent)]"></div></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BentoItem className="md:col-span-2 md:row-span-2 flex flex-col justify-between" delay={0.1}><div><div className="text-[var(--color-accent)] font-mono text-sm mb-4">// State.Rollback()</div><h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">Non-linear Recovery</h3><p className="text-[var(--color-text-secondary)] text-lg leading-relaxed max-w-md">Bypass the expensive 'repeat from start' loop. Roll back to any previous stable state in milliseconds and retry only the failing segment.</p></div><div className="mt-12 p-6 bg-black/40 rounded-2xl border border-white/10 font-mono text-xs text-[var(--color-text-secondary)] leading-relaxed"><span className="text-[var(--color-accent)]"># Chronos state recovery</span><br/>state = chronos.load_snapshot(last_id)<br/>print(f"🚀 State restored to {state['progress']}%")<br/>retry_execution(state)</div></BentoItem>
          <BentoItem className="md:col-span-1" delay={0.2}><h3 className="text-2xl font-bold tracking-tighter mb-4">Atomic Checkpoints</h3><p className="text-[var(--color-text-secondary)] leading-relaxed">Decorate your functions to automatically persist state snapshots to SQLite. Zero boilerplate, maximum safety.</p></BentoItem>
          <BentoItem className="md:col-span-1" delay={0.3}><h3 className="text-2xl font-bold tracking-tighter mb-4">Token Optimization</h3><p className="text-[var(--color-text-secondary)] leading-relaxed">Drastically reduce LLM API costs by eliminating redundant execution of successful steps.</p></BentoItem>
          <BentoItem className="md:col-span-1" delay={0.4}><div className="flex flex-col h-full justify-center items-center text-center"><div className="text-5xl font-black text-[var(--color-accent)] mb-2">90%</div><div className="text-xs uppercase tracking-widest opacity-50">Token Reduction</div></div></BentoItem>
        </div>
      </section>
      <footer className="py-20 border-t border-[var(--color-border)] text-center relative z-10"><div className="text-sm font-bold uppercase tracking-widest opacity-30 mb-4">Chronos Agent Infrastructure</div><div className="text-xs opacity-20 uppercase tracking-widest">Built for Precision. Designed for Scale.</div></footer>
    </div>
  );
};
export default LandingPage;
