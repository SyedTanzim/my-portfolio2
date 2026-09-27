export interface Project {
  id: number
  title: string
  description: string
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
  imageUrl: string
  featured: boolean
}

export interface Skill {
  name: string
  icon: string
  category: 'language' | 'frontend' | 'backend' | 'database' | 'devops' | 'tools'
  proficiency: 'expert' | 'advanced' | 'intermediate'
}

export interface Experience {
  id: number
  company: string
  role: string
  type: 'full-time' | 'part-time' | 'freelance' | 'internship'
  startDate: string
  endDate: string
  current: boolean
  location: string
  highlights: string[]
  techStack: string[]
}

export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  label: string
  url: string
  icon: string
}