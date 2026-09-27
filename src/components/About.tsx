import { motion } from 'framer-motion'
import { education } from '@/data/resume'
import { FiMapPin, FiCalendar, FiAward } from 'react-icons/fi'

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">

        {/* Section heading — we'll reuse this pattern every section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            About me
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Who I Am
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4 text-muted-foreground"
          >
            <p>
              I&apos;m a full-stack developer who enjoys building things that live on
              the internet — clean backends, responsive frontends, and everything
              in between.
            </p>
            <p>
              I work primarily with <strong className="text-foreground">Python / FastAPI</strong> on
              the backend and <strong className="text-foreground">React / TypeScript</strong> on the
              frontend, with PostgreSQL as my go-to database.
            </p>
            <p>
              I care about code quality, good architecture, and building software
              that&apos;s easy to maintain and scale.
            </p>
          </motion.div>

          {/* Education card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl border border-border bg-card p-6 space-y-4"
          >
            <h3 className="font-semibold text-foreground">Education</h3>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <FiAward className="mt-0.5 shrink-0 text-muted-foreground" />
                <span className="text-foreground font-medium">{education.degree}</span>
              </div>
              <div className="flex items-start gap-3">
                <FiMapPin className="mt-0.5 shrink-0 text-muted-foreground" />
                <span className="text-muted-foreground">{education.university}</span>
              </div>
              <div className="flex items-start gap-3">
                <FiCalendar className="mt-0.5 shrink-0 text-muted-foreground" />
                <span className="text-muted-foreground">Graduated {education.graduationYear}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-muted-foreground pl-6">CGPA: <strong className="text-foreground">{education.cgpa}</strong></span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
