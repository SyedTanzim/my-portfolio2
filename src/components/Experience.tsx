import { motion } from 'framer-motion'
import { experience } from '@/data/resume'
import { Badge } from '@/components/ui/badge'
import { FiMapPin, FiCalendar } from 'react-icons/fi'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Work history
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="mt-12 space-y-10">
          {experience.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative border-l border-border pl-8"
            >
              {/* Timeline dot */}
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary" />

              {/* Role + Company */}
              <h3 className="text-lg font-semibold">{job.role}</h3>
              <p className="mt-0.5 font-medium text-muted-foreground">{job.company}</p>

              {/* Meta — dates and location */}
              <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <FiCalendar size={13} />
                  {job.startDate} — {job.current ? 'Present' : job.endDate}
                </span>
                <span className="flex items-center gap-1.5">
                  <FiMapPin size={13} />
                  {job.location}
                </span>
              </div>

              {/* Highlights */}
              <ul className="mt-4 space-y-2">
                {job.highlights.map((point, j) => (
                  <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                {job.techStack.map((tech) => (
                  <Badge key={tech} variant="outline">{tech}</Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
