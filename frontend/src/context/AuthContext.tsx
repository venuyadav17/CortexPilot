import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react'

interface AuthUser {
  email: string
}

interface AuthContextValue {
  user: AuthUser | null
  token: string | null
  login: (token: string, email: string) => void
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(
    () => localStorage.getItem('cortex_token')
  )
  const [user, setUser] = useState<AuthUser | null>(() => {
    const stored = localStorage.getItem('cortex_user')
    return stored ? (JSON.parse(stored) as AuthUser) : null
  })

  useEffect(() => {
    if (token) {
      localStorage.setItem('cortex_token', token)
    } else {
      localStorage.removeItem('cortex_token')
    }
  }, [token])

  useEffect(() => {
    if (user) {
      localStorage.setItem('cortex_user', JSON.stringify(user))
    } else {
      localStorage.removeItem('cortex_user')
    }
  }, [user])

  const login = (newToken: string, email: string) => {
    setToken(newToken)
    setUser({ email })
  }

  const logout = () => {
    setToken(null)
    setUser(null)
    localStorage.removeItem('cortex_token')
    localStorage.removeItem('cortex_user')
  }

  return (
    <AuthContext.Provider
      value={{ user, token, login, logout, isAuthenticated: !!token }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>')
  return ctx
}
