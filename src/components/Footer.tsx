import { name, socialLinks } from '@/data/resume'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const iconMap: Record<string, React.ReactNode> = {
    FiGithub: <FiGithub size={16} />,
    FiLinkedin: <FiLinkedin size={16} />,
    FiMail: <FiMail size={16} />,
}

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="border-t border-border py-8 px-6">
            <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">

                {/* Copyright */}
                <p className="text-sm text-muted-foreground">
                    © {year} {name}
                </p>

                {/* Social links */}
                <div className="flex items-center gap-4">
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

            </div>
        </footer>
    )
}
