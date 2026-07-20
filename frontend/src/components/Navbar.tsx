import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Terminal } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 text-text-primary">
              <div className="p-1.5 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center glow-purple">
                <Terminal className="h-5 w-5 text-primary" />
              </div>
              <span className="font-sans font-bold tracking-tight text-lg">
                Cortex<span className="text-primary">Pilot</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
              Features
            </a>
            <a href="#demo" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
              Demo
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer" 
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1.5"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
            <Link to="/login" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
              Login
            </Link>
            <Link 
              to="/login" 
              className="px-4 py-2 text-sm font-semibold text-text-primary bg-primary hover:bg-primary/90 rounded-lg shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.02]"
            >
              Start Reviewing
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-zinc-800/50 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-panel border-t border-zinc-800/80 px-4 pt-2 pb-4 space-y-2">
          <a
            href="#features"
            onClick={toggleMenu}
            className="block px-3 py-2 rounded-lg text-base font-medium text-text-secondary hover:text-text-primary hover:bg-zinc-800/40 transition-colors"
          >
            Features
          </a>
          <a
            href="#demo"
            onClick={toggleMenu}
            className="block px-3 py-2 rounded-lg text-base font-medium text-text-secondary hover:text-text-primary hover:bg-zinc-800/40 transition-colors"
          >
            Demo
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            onClick={toggleMenu}
            className="px-3 py-2 rounded-lg text-base font-medium text-text-secondary hover:text-text-primary hover:bg-zinc-800/40 transition-colors flex items-center gap-2"
          >
            <svg className="h-4 w-4 text-text-secondary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            GitHub
          </a>
          <Link
            to="/login"
            onClick={toggleMenu}
            className="block px-3 py-2 rounded-lg text-base font-medium text-text-secondary hover:text-text-primary hover:bg-zinc-800/40 transition-colors"
          >
            Login
          </Link>
          <Link
            to="/login"
            onClick={toggleMenu}
            className="block text-center px-3 py-2.5 rounded-lg text-base font-semibold text-text-primary bg-primary hover:bg-primary/95 transition-all shadow-md shadow-primary/10"
          >
            Start Reviewing
          </Link>
        </div>
      )}
    </nav>
  )
}
