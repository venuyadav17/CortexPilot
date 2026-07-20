import { motion } from 'framer-motion'
import { ArrowRight, Code, ShieldCheck, Zap, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  } as any

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  } as any

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden grid-bg">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] max-w-[600px] rounded-full bg-primary/10 blur-[120px] animate-glow-1 -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] max-w-[500px] rounded-full bg-secondary/10 blur-[100px] animate-glow-2 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div 
            className="lg:col-span-7 flex flex-col space-y-8 text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Tag / Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 self-start px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
              <Sparkles className="h-3 w-3 text-secondary animate-pulse" />
              <span>CortexPilot AI Platform v1.0</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-text-primary">
              AI-Powered <br />
              <span className="text-gradient">Code Review System</span>
            </motion.h1>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-lg text-text-secondary max-w-xl leading-relaxed">
              Automate code quality, security vulnerability assessments, and performance benchmarks using advanced LLM pipelines. Review code instantly.
            </motion.p>

            {/* Highlights bullet list */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 text-sm text-text-secondary">
                <div className="p-1 rounded bg-accent/15 border border-accent/20">
                  <ShieldCheck className="h-4 w-4 text-accent" />
                </div>
                <span>Automated Security Analysis</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-text-secondary">
                <div className="p-1 rounded bg-secondary/15 border border-secondary/20">
                  <Zap className="h-4 w-4 text-secondary" />
                </div>
                <span>Instant Review and Suggestions</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-text-secondary">
                <div className="p-1 rounded bg-primary/15 border border-primary/20">
                  <Code className="h-4 w-4 text-primary" />
                </div>
                <span>Interactive Monaco Editor</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-text-secondary">
                <div className="p-1 rounded bg-warning/15 border border-warning/20">
                  <Sparkles className="h-4 w-4 text-warning" />
                </div>
                <span>RAG-Backed Explanations</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/login"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-text-primary bg-primary hover:bg-primary/90 rounded-xl shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98] group"
              >
                Start Reviewing
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a 
                href="#demo"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-text-secondary hover:text-text-primary bg-zinc-900 hover:bg-zinc-800/80 rounded-xl border border-zinc-800 transition-colors"
              >
                View Live Demo
              </a>
            </motion.div>
          </motion.div>

          {/* Right Graphical Column (Simulated Code Review Panel) */}
          <motion.div 
            className="lg:col-span-5 relative w-full flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Visual Editor mockup */}
            <div className="w-full glass-panel rounded-2xl border border-zinc-800 shadow-2xl shadow-purple-500/5 overflow-hidden">
              {/* Mockup Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/80 border-b border-zinc-800/80">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-danger/80" />
                  <div className="w-3 h-3 rounded-full bg-warning/80" />
                  <div className="w-3 h-3 rounded-full bg-accent/80" />
                </div>
                <div className="text-xs font-mono text-text-secondary font-medium">review_service.py</div>
                <div className="w-4" /> {/* Spacer */}
              </div>

              {/* Mockup Code Content */}
              <div className="p-5 font-mono text-xs text-left overflow-x-auto space-y-2 select-none leading-relaxed bg-zinc-950/70">
                <div><span className="text-secondary">def</span> <span className="text-primary font-bold">analyze_code</span>(code_str: str):</div>
                <div className="pl-4 text-text-secondary"><span className="text-secondary">if</span> not code_str:</div>
                <div className="pl-8 text-danger bg-danger/10 border-l-2 border-danger py-0.5 pr-2 flex justify-between">
                  <span>return {`{"error": "Empty input"}`}</span>
                  <span className="text-[10px] font-sans font-bold bg-danger/25 px-1.5 rounded flex items-center">BUG DETECTED</span>
                </div>
                <div className="pl-4 text-text-secondary">suggestions = []</div>
                <div className="pl-4 text-text-secondary"># Perform vulnerability scan</div>
                <div className="pl-4 text-text-secondary">vulns = scanner.scan(code_str)</div>
                <div className="pl-4 text-accent bg-accent/10 border-l-2 border-accent py-0.5 pr-2 flex justify-between">
                  <span>score = calculate_score(vulns)</span>
                  <span className="text-[10px] font-sans font-bold bg-accent/25 px-1.5 rounded flex items-center">OPTIMIZED</span>
                </div>
                <div className="pl-4 text-text-secondary"><span className="text-secondary">return</span> {`{"score": score, "suggestions": suggestions}`}</div>
              </div>

              {/* Review Result Overlay Card */}
              <motion.div 
                className="absolute -bottom-6 -left-6 md:-left-12 glass-panel p-4 rounded-xl shadow-2xl border border-zinc-700/50 max-w-[280px]"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="flex items-center space-x-3 mb-2.5">
                  <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center">
                    <Sparkles className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold text-text-secondary uppercase tracking-wider">CortexPilot Score</div>
                    <div className="text-lg font-bold text-text-primary">94 / 100</div>
                  </div>
                </div>
                <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                  <motion.div 
                    className="bg-accent h-full"
                    initial={{ width: 0 }}
                    animate={{ width: '94%' }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                  />
                </div>
                <p className="text-[10px] text-text-secondary mt-2">
                  Excellent codebase modularity. 1 minor issue resolved in security config.
                </p>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  )
}
