"use client";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-palette-1/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-palette-2/5 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-palette-1/10 border border-palette-1/20 text-palette-2 text-xs font-bold uppercase tracking-widest mb-8">
          <Rocket size={12} /> Fullstack Excellence
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
          CRAFTING <br />
          <span className="text-gradient">DIGITAL</span> <br />
          EXPERIENCES
        </h1>

        <p className="max-w-xl mx-auto text-lg md:text-xl text-text-primary/60 font-medium mb-12">
          Specializing in <span className="text-text-primary underline decoration-palette-2 underline-offset-4">Next.js</span> & <span className="text-text-primary underline decoration-palette-1 underline-offset-4">NestJS</span> for high-performance applications.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group px-8 py-4 bg-palette-2 text-bg-primary font-bold rounded-2xl flex items-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(164,195,162,0.4)]"
          >
            View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-bg-secondary text-text-primary font-bold rounded-2xl border border-border-subtle flex items-center gap-2 hover:bg-bg-secondary/80 transition-all"
          >
            <Code2 size={18} /> Let&apos;s Talk
          </motion.button>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-primary/20"
      >
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-current rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}


