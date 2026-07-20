import { Terminal, Mail, ShieldAlert } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Logo Column */}
          <div className="md:col-span-2 flex flex-col space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-text-primary self-start">
              <div className="p-1.5 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center glow-purple">
                <Terminal className="h-5 w-5 text-primary" />
              </div>
              <span className="font-sans font-bold tracking-tight text-lg">
                Cortex<span className="text-primary">Pilot</span>
              </span>
            </Link>
            <p className="text-sm text-text-secondary max-w-sm">
              Automated secure source code analysis pipelines powered by generative intelligence models. Made by developers, for developers.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-xs font-semibold text-text-primary uppercase tracking-wider">Product</h4>
            <a href="#features" className="text-xs text-text-secondary hover:text-text-primary transition-colors">Features</a>
            <a href="#demo" className="text-xs text-text-secondary hover:text-text-primary transition-colors">Demo</a>
            <Link to="/login" className="text-xs text-text-secondary hover:text-text-primary transition-colors">Workspace</Link>
          </div>

          {/* Legal / Security Column */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-xs font-semibold text-text-primary uppercase tracking-wider">Security & Privacy</h4>
            <a href="#" className="text-xs text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1.5">
              <ShieldAlert className="h-3 w-3 text-warning" />
              Code Sandbox Isolation
            </a>
            <span className="text-xs text-text-secondary">AES-256 Code Encryption</span>
          </div>

        </div>

        {/* Bottom copyright banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-zinc-900 pt-8 text-xs text-text-secondary">
          <p>© {new Date().getFullYear()} CortexPilot. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-text-primary transition-colors flex items-center gap-1.5">
              <svg className="h-4.5 w-4.5 text-text-secondary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub Repository
            </a>
            <a href="mailto:support@cortex-pilot.dev" className="hover:text-text-primary transition-colors flex items-center gap-1.5">
              <Mail className="h-4.5 w-4.5" />
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
