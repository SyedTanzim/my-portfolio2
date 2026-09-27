import '@/index.css'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'

function App() {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar isDark={isDark} onToggle={() => setIsDark(prev => !prev)} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          {/* Certifications */}
          {/* Contact */}
        </main>
        {/* Footer */}
      </div>
    </div>
  )
}

export default App
