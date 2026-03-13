"use client";
import { motion } from "framer-motion";
import { 
  Atom, 
  Code2, 
  Database, 
  Globe, 
  Layers, 
  Palette, 
  Box,
  Zap,
  Terminal
} from "lucide-react";


const skills = [
  { name: "Next.js", icon: Globe },
  { name: "React", icon: Atom },
  { name: "NestJS", icon: Layers },
  { name: "TypeScript", icon: Code2 },
  { name: "PostgreSQL", icon: Database },
  { name: "Docker", icon: Box },
  { name: "TailwindCSS", icon: Palette },
  { name: "Node.js", icon: Terminal },
  { name: "Redis", icon: Zap }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-text-primary tracking-tighter">
            MY <span className="text-palette-2">STRENGTHS</span>
          </h2>
          <p className="text-text-primary/50 font-medium mt-2">Tools I use to build robust applications.</p>
        </div>
        <div className="h-px grow bg-border-subtle mx-8 hidden md:block mb-4" />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-4 p-6 rounded-3xl bg-bg-secondary border border-border-subtle hover:border-palette-2/50 transition-colors group"
          >
            <div className="w-10 h-10 rounded-xl bg-palette-2/10 flex items-center justify-center text-palette-2 group-hover:bg-palette-2 group-hover:text-bg-primary transition-all">
              <skill.icon size={20} />
            </div>
            <span className="font-bold text-lg text-text-primary/80 group-hover:text-text-primary transition-colors">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}



