"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-[2.5rem] bg-bg-secondary border border-border-subtle p-8 md:p-12 min-h-[400px] flex flex-col transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]"
    >
      {/* Background Accent */}
      <div
        className="absolute top-0 right-0 w-64 h-64 blur-3xl rounded-full transition-opacity group-hover:opacity-60 opacity-20"
        style={{ backgroundColor: project.color }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex gap-4 mb-6 flex-wrap">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] font-black uppercase tracking-widest text-palette-2/80 bg-palette-2/5 px-3 py-1 rounded-full border border-palette-2/20"
            >
              {t}
            </span>
          ))}
        </div>

        <h3 className="text-4xl font-black text-text-primary mb-6 group-hover:text-palette-2 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-text-primary/60 font-medium text-lg leading-relaxed mb-12">
          {project.description}
        </p>

        <div className="mt-auto flex items-center gap-6">
          <a
            href={project.githubUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-text-primary hover:text-palette-2 transition-colors"
          >
            <Github size={18} /> Source
          </a>
          <a
            href={project.liveUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-text-primary hover:text-palette-2 transition-colors"
          >
            <ExternalLink size={18} /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}
