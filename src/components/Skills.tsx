import { motion } from 'framer-motion'
import { skills } from '@/data/resume'
import type { Skill } from '@/types'
import { Badge } from '@/components/ui/badge'

// All unique categories in the order we want them displayed
const CATEGORIES: Skill['category'][] = [
  'language', 'frontend', 'backend', 'database', 'devops', 'tools',
]

// Human-readable label for each category key
const CATEGORY_LABELS: Record<Skill['category'], string> = {
  language: 'Languages',
  frontend: 'Frontend',
  backend:  'Backend & APIs',
  database: 'Databases',
  devops:   'DevOps',
  tools:    'Tools',
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div className="max-w-xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            What I work with
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Skills
          </h2>
        </motion.div>

        {/* Skill groups */}
        <div className="mt-12 space-y-8 max-w-xl mx-auto">
          {CATEGORIES.map((category, i) => {
            // Filter the skills array to only this category
            const categorySkills = skills.filter((s) => s.category === category)
            if (categorySkills.length === 0) return null

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex flex-wrap items-start gap-3"
              >
                {/* Category label */}
                <span className="w-28 shrink-0 pt-1 text-sm font-medium text-muted-foreground">
                  {CATEGORY_LABELS[category]}
                </span>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <Badge key={skill.name} variant="secondary">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
