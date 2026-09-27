import '@/index.css'
import { useState } from 'react'
import Navbar from '@/components/Navbar'

function App() {
  const [isDark, setIsDark] = useState(true)

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar isDark={isDark} onToggle={() => setIsDark(prev => !prev)} />
        <main>
          {/* Hero */}
          {/* About */}
          {/* Skills */}
          {/* Experience */}
          {/* Projects */}
          {/* Certifications */}
          {/* Contact */}
        </main>
        {/* Footer */}
      </div>
    </div>
  )
}

export default App
