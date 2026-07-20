import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Terminal, Eye, EyeOff, Loader2, AlertCircle, ArrowRight } from 'lucide-react'
import { authService } from '../services/authService'
import { useAuth } from '../context/AuthContext'

interface LoginForm {
  email: string
  password: string
}

export default function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [showPw, setShowPw] = useState(false)
  const [serverError, setServerError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>()

  const onSubmit = async (data: LoginForm) => {
    setServerError('')
    setIsLoading(true)
    try {
      const res = await authService.login(data)
      if ('access_token' in res) {
        // Decode email from payload (it's stored in sub claim)
        const payload = JSON.parse(atob(res.access_token.split('.')[1]))
        login(res.access_token, payload.sub as string)
        navigate('/dashboard')
      } else {
        // Backend returned { message: "Invalid email or password." }
        setServerError((res as unknown as { message: string }).message)
      }
    } catch {
      setServerError('Unable to connect to server. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden grid-bg">
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/3 w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[120px] animate-glow-1 -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] rounded-full bg-secondary/8 blur-[100px] animate-glow-2 -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="p-1.5 rounded-lg bg-primary/20 border border-primary/30">
            <Terminal className="h-5 w-5 text-primary" />
          </div>
          <span className="font-bold text-lg text-text-primary tracking-tight">
            Cortex<span className="text-primary">Pilot</span>
          </span>
        </Link>

        {/* Card */}
        <div className="glass-panel rounded-2xl border border-zinc-800 p-8 shadow-2xl shadow-primary/5">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-text-primary mb-1">Welcome back</h1>
            <p className="text-sm text-text-secondary">Sign in to your CortexPilot account</p>
          </div>

          {/* Server Error Banner */}
          {serverError && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2.5 bg-danger/10 border border-danger/25 text-danger rounded-lg px-4 py-3 mb-6 text-sm"
            >
              <AlertCircle className="h-4 w-4 shrink-0" />
              {serverError}
            </motion.div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">

            {/* Email */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider">
                Email address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className={`w-full bg-zinc-900/80 border rounded-lg px-4 py-3 text-sm text-text-primary placeholder-zinc-600 focus:outline-none focus:ring-2 transition-all ${
                  errors.email
                    ? 'border-danger/60 focus:ring-danger/30'
                    : 'border-zinc-800 focus:ring-primary/30 focus:border-primary/60'
                }`}
                {...register('email', {
                  required: 'Email is required.',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Enter a valid email address.',
                  },
                })}
              />
              {errors.email && (
                <p className="text-xs text-danger flex items-center gap-1 mt-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider">
                  Password
                </label>
                <a href="#" className="text-xs text-primary hover:text-secondary transition-colors">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPw ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className={`w-full bg-zinc-900/80 border rounded-lg px-4 py-3 pr-11 text-sm text-text-primary placeholder-zinc-600 focus:outline-none focus:ring-2 transition-all ${
                    errors.password
                      ? 'border-danger/60 focus:ring-danger/30'
                      : 'border-zinc-800 focus:ring-primary/30 focus:border-primary/60'
                  }`}
                  {...register('password', {
                    required: 'Password is required.',
                    minLength: { value: 6, message: 'Minimum 6 characters.' },
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPw((v) => !v)}
                  className="absolute inset-y-0 right-0 px-3.5 flex items-center text-zinc-500 hover:text-text-primary transition-colors"
                  aria-label={showPw ? 'Hide password' : 'Show password'}
                >
                  {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-xs text-danger flex items-center gap-1 mt-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              id="login-submit"
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-text-primary bg-primary hover:bg-primary/90 rounded-lg shadow-lg shadow-primary/20 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Signing in…
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-zinc-800" />
            <span className="text-xs text-zinc-600">or</span>
            <div className="flex-1 h-px bg-zinc-800" />
          </div>

          <p className="text-center text-sm text-text-secondary">
            Don't have an account?{' '}
            <Link to="/register" className="text-primary font-semibold hover:text-secondary transition-colors">
              Create one free
            </Link>
          </p>
        </div>

        <p className="text-center text-xs text-zinc-600 mt-6">
          By signing in you agree to our{' '}
          <a href="#" className="hover:text-text-secondary transition-colors">Terms of Service</a>
          {' '}and{' '}
          <a href="#" className="hover:text-text-secondary transition-colors">Privacy Policy</a>.
        </p>
      </motion.div>
    </div>
  )
}
