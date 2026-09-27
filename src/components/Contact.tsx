import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { email, socialLinks } from '@/data/resume'
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheckCircle } from 'react-icons/fi'
import { Card } from '@/components/ui/card'

const iconMap: Record<string, React.ReactNode> = {
  FiGithub: <FiGithub size={18} />,
  FiLinkedin: <FiLinkedin size={18} />,
  FiMail: <FiMail size={18} />,
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
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
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

        <div className="grid gap-12 md:grid-cols-2 md:items-start">

          {/* Left — heading + info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Let&apos;s talk
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
                Get in Touch
              </h2>
            </div>

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

          {/* Right — Form or Sent Success State */}
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="h-full"
            >
              <Card className="flex h-full min-h-[340px] flex-col items-center justify-center p-8 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <FiCheckCircle size={28} />
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight">Message Sent!</h3>
                  <p className="max-w-xs text-sm text-muted-foreground leading-relaxed">
                    Thank you for reaching out. I&apos;ve received your email and will get back to you shortly.
                  </p>
                </div>
              </Card>
            </motion.div>
          ) : (
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
                disabled={sending}
                className="flex items-center gap-2 rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                <FiSend size={15} />
                {sending ? 'Sending...' : 'Send Message'}
              </button>
            </motion.form>
          )}

        </div>
      </div>
    </section>
  )
}
