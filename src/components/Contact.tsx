import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { email, socialLinks } from '@/data/resume'
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'

const iconMap: Record<string, React.ReactNode> = {
  FiGithub:   <FiGithub size={18} />,
  FiLinkedin: <FiLinkedin size={18} />,
  FiMail:     <FiMail size={18} />,
}

export default function Contact() {
  // Three pieces of form state
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSending(true)
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',   // ← replace later
        'YOUR_TEMPLATE_ID',  // ← replace later
        { from_name: form.name, from_email: form.email, message: form.message },
        'YOUR_PUBLIC_KEY',   // ← replace later
      )
      setSent(true)
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      alert('Something went wrong. Please try emailing me directly.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="mx-auto max-w-4xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Let&apos;s talk
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Get in Touch
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-12 md:grid-cols-2">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground">
              I&apos;m open to full-time roles, internships, freelance projects, and interesting
              collaborations. Drop me a message and I&apos;ll get back to you.
            </p>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FiMail size={16} />
              <a href={`mailto:${email}`} className="hover:text-foreground transition-colors">
                {email}
              </a>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={link.label}
                >
                  {iconMap[link.icon]}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full resize-none rounded-md border border-border bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
            />

            <button
              type="submit"
              disabled={sending || sent}
              className="flex items-center gap-2 rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              <FiSend size={15} />
              {sent ? 'Message sent!' : sending ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  )
}
