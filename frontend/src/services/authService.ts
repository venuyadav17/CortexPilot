import api from './api'

export interface RegisterPayload {
  username: string
  email: string
  password: string
}

export interface LoginPayload {
  email: string
  password: string
}

export interface AuthResponse {
  access_token: string
  token_type: string
}

export interface MessageResponse {
  message: string
}

export const authService = {
  register: async (data: RegisterPayload): Promise<MessageResponse> => {
    const res = await api.post<MessageResponse>('/auth/register', data)
    return res.data
  },

  login: async (data: LoginPayload): Promise<AuthResponse> => {
    const res = await api.post<AuthResponse>('/auth/login', data)
    return res.data
  },
}
