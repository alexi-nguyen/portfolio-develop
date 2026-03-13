export interface Project {
  title: string;
  tech: string[];
  description: string;
  color: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Task Manager API",
    tech: ["NestJS", "PostgreSQL", "Redis"],
    description: "High-concurrency backend service with optimized query performance and real-time task tracking.",
    color: "var(--green-palette-1)",
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com"
  },
  {
    title: "Ecommerce Platform",
    tech: ["Next.js", "Tailwind", "Stripe"],
    description: "Premium shopping experience with lightning-fast transitions, SEO optimization, and secure checkout.",
    color: "var(--green-palette-2)",
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com"
  },
];
