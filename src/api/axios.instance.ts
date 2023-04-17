import { API_URL } from '@/constants/api.constants'
import axios from 'axios'

export const axiosInstance = axios.create({
	baseURL: API_URL,
	headers: { 'Content-type': 'application/json' }
})
