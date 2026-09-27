import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { name, tagline, socialLinks } from '@/data/resume'

// Icon map — matches the icon string in resume.ts to an actual component
const iconMap: Record<string, React.ReactNode> = {
  FiGithub:   <FiGithub size={20} />,
  FiLinkedin: <FiLinkedin size={20} />,
  FiMail:     <FiMail size={20} />,
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[90vh] flex-col items-center justify-center px-6 text-center bg-sketchbook-grid"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl space-y-6"
      >
        {/* Greeting */}
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Hello, I&apos;m
        </p>

        {/* Name */}
        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          {name}
        </h1>

        {/* Tagline */}
        <p className="text-xl text-muted-foreground md:text-2xl">
          {tagline}
        </p>

        {/* Description */}
        <p className="mx-auto max-w-xl text-base text-muted-foreground">
          I build full-stack web applications with clean architecture and a focus on
          developer experience — from FastAPI backends to React frontends.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#projects"
            className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-md border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-accent"
          >
            Get in Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-5 pt-2">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label={link.label}
            >
              {iconMap[link.icon]}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
