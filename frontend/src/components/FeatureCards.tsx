import { motion } from 'framer-motion'
import { ShieldAlert, Cpu, BarChart3, Clock, Download, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const features = [
  {
    icon: ShieldAlert,
    title: 'Static Analysis',
    description: 'Scans source files for syntax irregularities, code smells, and security violations using standardized AST engines.',
    color: 'text-danger',
    bg: 'bg-danger/10 border-danger/20',
  },
  {
    icon: Cpu,
    title: 'AI-Powered Review',
    description: 'Employs state-of-the-art LLMs to examine context, logic, logic flaws, readability improvements, and refactoring potential.',
    color: 'text-primary',
    bg: 'bg-primary/10 border-primary/20',
  },
  {
    icon: BarChart3,
    title: 'Executive Dashboard',
    description: 'Track key performance indicators, token consumption metrics, review counts, average scores, and audit progressions.',
    color: 'text-secondary',
    bg: 'bg-secondary/10 border-secondary/20',
  },
  {
    icon: Clock,
    title: 'Review History',
    description: 'Access previous scans, trace score trends over commits, compare reviews side-by-side, and re-run audits instantly.',
    color: 'text-accent',
    bg: 'bg-accent/10 border-accent/20',
  },
  {
    icon: Download,
    title: 'Export Center',
    description: 'Generate production-ready compliance reports and audit details in downloadable PDF or CSV formats for team sharing.',
    color: 'text-warning',
    bg: 'bg-warning/10 border-warning/20',
  },
]

export default function FeatureCards() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  } as any

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  } as any

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-zinc-950/40">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[30vw] rounded-full bg-purple-900/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
            Comprehensive Review Suite
          </h2>
          <p className="text-text-secondary">
            CortexPilot integrates security auditing, algorithmic analysis, and detailed dashboard telemetry into a single, unified developer workspace.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feat) => {
            const Icon = feat.icon
            return (
              <motion.div
                key={feat.title}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="glass-panel p-8 rounded-2xl border border-zinc-800/80 hover:border-zinc-700/80 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 flex flex-col text-left group"
              >
                <div className={`p-3 rounded-xl border self-start mb-6 ${feat.bg}`}>
                  <Icon className={`h-6 w-6 ${feat.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {feat.title}
                </h3>
                
                <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-grow">
                  {feat.description}
                </p>

                <Link 
                  to="/login"
                  className="inline-flex items-center text-xs font-semibold text-primary hover:text-secondary group-hover:gap-2 transition-all gap-1"
                >
                  Learn More
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
