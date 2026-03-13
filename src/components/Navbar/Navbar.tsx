"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Zap } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-bg-primary/50 border-b border-border-subtle"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 font-bold text-xl tracking-tighter"
        >
          <div className="w-8 h-8 rounded-lg bg-palette-1 flex items-center justify-center text-palette-5">
            <Zap size={18} fill="currentColor" />
          </div>
          <span className="text-palette-2">Alexi</span>
        </motion.div>

        <div className="hidden md:flex gap-10 items-center">
          {["Projects", "Skills", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-text-primary/70 hover:text-palette-2 transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-palette-2 transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex gap-4 items-center">
          <Github size={20} className="text-text-primary/50 hover:text-palette-2 cursor-pointer transition-colors" />
          <Linkedin size={20} className="text-text-primary/50 hover:text-palette-2 cursor-pointer transition-colors" />
          <div className="h-4 w-px bg-border-subtle mx-2" />
          <button className="bg-palette-1 hover:bg-palette-1/80 text-palette-5 px-4 py-1.5 rounded-full text-sm font-bold transition-all flex items-center gap-2">
            <Mail size={14} /> Resume
          </button>
        </div>
      </div>
    </motion.nav>
  );
}


