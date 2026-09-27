import { navLinks, name } from '@/data/resume'
import { FiSun, FiMoon, FiGithub } from 'react-icons/fi'


// Props type — defines what this component expects from its parent
interface NavbarProps {
    isDark: boolean
    onToggle: () => void
}

export default function Navbar({ isDark, onToggle }: NavbarProps) {
    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                {/* Logo / Name */}
                <a href="#hero" className="text-lg font-semibold tracking-tight">
                    {name}
                </a>
                {/* Nav Links */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                {/* Right side — GitHub + Theme toggle */}
                <div className="flex items-center gap-3">
                    <a
                        href="https://github.com/SyedTanzim"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <FiGithub size={20} />
                    </a>
                    <button
                        onClick={onToggle}
                        className="rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                        aria-label="Toggle theme"
                    >
                        {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
                    </button>
                </div>
            </nav>
        </header>
    )
}