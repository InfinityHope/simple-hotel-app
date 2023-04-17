import { AuthContext } from '@/providers/AuthProvider/AuthProvider'
import { useContext } from 'react'

export const useAuth = () => useContext(AuthContext)
