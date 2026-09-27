import type { Skill, Experience, Project, Certificate, NavLink, SocialLink } from '@/types'

export const name = 'Syed Tanzim Wajih'
export const tagline = 'Full Stack Developer'
export const email = 'syedtanzimwajih@gmail.com'
export const phone = '+91-8279481609'

export const navLinks: NavLink[] = [
  { label: 'About',       href: '#about' },
  { label: 'Skills',      href: '#skills' },
  { label: 'Experience',  href: '#experience' },
  { label: 'Projects',    href: '#projects' },
  { label: 'Contact',     href: '#contact' },
]

export const socialLinks: SocialLink[] = [
  { label: 'GitHub',   url: 'https://github.com/SyedTanzim',               icon: 'FiGithub' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/syedtanzimwajih',      icon: 'FiLinkedin' },
  { label: 'Email',    url: 'mailto:syedtanzimwajih@gmail.com',             icon: 'FiMail' },
]