import AuthPage from '@/pages/auth/AuthPage'
import HomePage from '@/pages/home/HomePage'
import { Route, Routes } from 'react-router-dom'

export const Routing = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/auth' element={<AuthPage />} />
		</Routes>
	)
}
