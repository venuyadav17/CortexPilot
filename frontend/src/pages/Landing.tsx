import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeatureCards from '../components/FeatureCards'
import Footer from '../components/Footer'
import { Sparkles, AlertTriangle, ShieldCheck, Play, Code2 } from 'lucide-react'

// Demo Preset Snippets
const CODE_PRESETS = [
  {
    language: 'python',
    title: 'Python Auth Route',
    code: `def login_user(request):
    username = request.data.get("user")
    password = request.data.get("pass")
    
    # Query Database directly without parameterizing
    query = f"SELECT * FROM users WHERE u = '{username}' AND p = '{password}'"
    user = db.execute(query)
    
    if user:
        return {"status": "authenticated", "token": "JWT_SECRET_DUMMY_KEY"}
    return {"status": "unauthorized"}`,
    score: 34,
    issues: [
      { type: 'security', message: 'SQL Injection Vulnerability: User input formatted directly into raw SQL string.', severity: 'CRITICAL' },
      { type: 'security', message: 'Hardcoded Cryptographic Secret: DUMMY JWT token reference.', severity: 'HIGH' },
      { type: 'perf', message: 'Lack of connection pooling: database executed on request thread.', severity: 'MEDIUM' }
    ]
  },
  {
    language: 'javascript',
    title: 'NodeJS File Parser',
    code: `const fs = require('fs');

function parseUserConfig(filePath) {
  try {
    const rawData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(rawData);
    eval("global.config = " + data.configString);
    return data;
  } catch (err) {
    console.log(err);
  }
}`,
    score: 41,
    issues: [
      { type: 'security', message: 'Remote Code Execution: Use of unsafe eval() to parse configurations.', severity: 'CRITICAL' },
      { type: 'bug', message: 'Empty catch block: Exceptions are logged but swallowed, which will trigger silent failures.', severity: 'HIGH' },
      { type: 'bug', message: 'Synchronous I/O: blocking readFileSync utilized inside request pipeline.', severity: 'MEDIUM' }
    ]
  }
]

export default function Landing() {
  const [selectedIdx, setSelectedIdx] = useState(0)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [currentSnippet, setCurrentSnippet] = useState(CODE_PRESETS[0])

  const handleSnippetChange = (idx: number) => {
    setSelectedIdx(idx)
    setCurrentSnippet(CODE_PRESETS[idx])
    setShowResults(false)
    setIsAnalyzing(false)
  }

  const triggerAudit = () => {
    setIsAnalyzing(true)
    setShowResults(false)
    setTimeout(() => {
      setIsAnalyzing(false)
      setShowResults(true)
    }, 1800)
  }

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Feature Section */}
      <FeatureCards />

      {/* Live Demo Section */}
      <section id="demo" className="py-24 relative grid-bg border-t border-zinc-900 bg-zinc-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-semibold text-accent">
              <Play className="h-3 w-3 text-accent fill-accent" />
              <span>Interactive Simulator</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
              See CortexPilot in Action
            </h2>
            <p className="text-text-secondary">
              Select one of our preset templates below and trigger an instant security and quality review.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Snippet Selection & Code Editor Panel */}
            <div className="lg:col-span-7 flex flex-col glass-panel rounded-2xl border border-zinc-800 overflow-hidden min-h-[450px]">
              
              {/* Toolbar */}
              <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/60 border-b border-zinc-800">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-zinc-700" />
                    <div className="w-3 h-3 rounded-full bg-zinc-700" />
                    <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  </div>
                  <span className="text-xs text-text-secondary font-mono flex items-center gap-1">
                    <Code2 className="h-3.5 w-3.5" />
                    demo_sandbox.{currentSnippet.language === 'python' ? 'py' : 'js'}
                  </span>
                </div>
                <div className="flex space-x-2">
                  {CODE_PRESETS.map((preset, idx) => (
                    <button
                      key={preset.title}
                      onClick={() => handleSnippetChange(idx)}
                      className={`px-2.5 py-1 text-[10px] font-semibold rounded transition-colors ${
                        selectedIdx === idx 
                          ? 'bg-primary text-text-primary' 
                          : 'bg-zinc-800 text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      {preset.language.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Code Editor Body */}
              <div className="flex-grow p-6 font-mono text-sm text-left bg-zinc-950/80 overflow-y-auto leading-relaxed select-text">
                <pre className="text-zinc-300">
                  <code>{currentSnippet.code}</code>
                </pre>
              </div>

              {/* Action Banner */}
              <div className="p-4 bg-zinc-900/40 border-t border-zinc-800 flex items-center justify-between">
                <span className="text-xs text-text-secondary">Click right to trigger AI Audit engine</span>
                <button
                  onClick={triggerAudit}
                  disabled={isAnalyzing}
                  className="px-5 py-2.5 text-xs font-semibold text-text-primary bg-primary hover:bg-primary/95 rounded-lg shadow-md shadow-primary/20 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="w-3 h-3 border-2 border-text-primary border-t-transparent rounded-full animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Play className="h-3 w-3 fill-text-primary" />
                      Run AI Audit
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Results Panel */}
            <div className="lg:col-span-5 flex flex-col justify-between items-stretch">
              
              <AnimatePresence mode="wait">
                {!isAnalyzing && !showResults && (
                  <motion.div 
                    key="idle"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex-grow glass-panel rounded-2xl border border-zinc-800 p-8 flex flex-col items-center justify-center text-center space-y-4 min-h-[450px]"
                  >
                    <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
                      <Sparkles className="h-6 w-6 text-zinc-500" />
                    </div>
                    <h3 className="text-lg font-bold text-text-primary">Analysis Pending</h3>
                    <p className="text-sm text-text-secondary max-w-xs">
                      Trigger the AI Audit compiler to visualize security flags and performance rankings.
                    </p>
                  </motion.div>
                )}

                {isAnalyzing && (
                  <motion.div 
                    key="analyzing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-grow glass-panel rounded-2xl border border-zinc-800 p-8 flex flex-col items-center justify-center text-center space-y-4 min-h-[450px]"
                  >
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
                      <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin" />
                    </div>
                    <h3 className="text-lg font-bold text-text-primary">Auditing Syntax...</h3>
                    <p className="text-sm text-text-secondary max-w-xs">
                      Parsing AST nodes, calling AI heuristics, and measuring rule compliance.
                    </p>
                  </motion.div>
                )}

                {showResults && !isAnalyzing && (
                  <motion.div 
                    key="results"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex-grow glass-panel rounded-2xl border border-zinc-800 p-6 space-y-6 text-left min-h-[450px] flex flex-col justify-between"
                  >
                    <div>
                      {/* Heading */}
                      <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80">
                        <div>
                          <h3 className="text-base font-bold text-text-primary">Analysis Findings</h3>
                          <span className="text-[10px] text-text-secondary uppercase tracking-wider font-mono">
                            CortexPilot v1.0 Result
                          </span>
                        </div>
                        
                        {/* Score Circular Indicator */}
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-text-secondary font-semibold">Score:</span>
                          <span className={`px-2 py-1 rounded text-sm font-bold ${
                            currentSnippet.score < 50 ? 'bg-danger/10 text-danger border border-danger/25' : 'bg-accent/10 text-accent border border-accent/25'
                          }`}>
                            {currentSnippet.score}/100
                          </span>
                        </div>
                      </div>

                      {/* Issue list */}
                      <div className="mt-4 space-y-3.5 max-h-[260px] overflow-y-auto pr-1">
                        {currentSnippet.issues.map((issue, idx) => (
                          <div key={idx} className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/60 flex items-start space-x-3 text-xs">
                            <div className="mt-0.5">
                              {issue.type === 'security' ? (
                                <AlertTriangle className="h-4 w-4 text-danger" />
                              ) : (
                                <AlertTriangle className="h-4 w-4 text-warning" />
                              )}
                            </div>
                            <div>
                              <div className="flex items-center space-x-2 mb-1">
                                <span className={`text-[9px] font-bold px-1.5 py-0.25 rounded ${
                                  issue.severity === 'CRITICAL' ? 'bg-danger/20 text-danger' : 
                                  issue.severity === 'HIGH' ? 'bg-orange-500/20 text-orange-500' : 'bg-warning/20 text-warning'
                                }`}>
                                  {issue.severity}
                                </span>
                                <span className="text-[10px] text-text-secondary font-mono capitalize">
                                  {issue.type}
                                </span>
                              </div>
                              <p className="text-text-primary leading-normal">{issue.message}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Review CTA link */}
                    <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-text-secondary">
                      <div className="flex items-center space-x-1">
                        <ShieldCheck className="h-4 w-4 text-accent" />
                        <span>Security verified sandbox</span>
                      </div>
                      <a href="/login" className="text-primary font-semibold hover:underline">
                        Review Workspace &gt;
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 relative bg-zinc-950 border-t border-zinc-900">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[30vw] rounded-full bg-primary/5 blur-[120px] -z-10" />
        
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
            Ready to secure your code repositories?
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Get automated audit checks, performance insights, and AI security reviews integrated directly into your workflow.
          </p>
          <div className="pt-4">
            <Link 
              to="/login"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-text-primary bg-primary hover:bg-primary/95 rounded-xl shadow-xl shadow-primary/25 transition-all hover:scale-[1.02]"
            >
              Get Started for Free
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
