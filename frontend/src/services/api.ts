import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
})

// Attach JWT token automatically on every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('cortex_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Auto-redirect on 401 Unauthorized
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('cortex_token')
      localStorage.removeItem('cortex_user')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default api
