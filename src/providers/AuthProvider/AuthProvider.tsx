import { IUser } from '@/interfaces/User.interface'
import { FC, PropsWithChildren, createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { IAuthContext } from './IAuthContext'

export const AuthContext = createContext({} as IAuthContext)

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const [user, setUser] = useState<IUser | null>(null)
	const navigate = useNavigate()

	const login = (userData: IUser) => {
		localStorage.setItem('user', JSON.stringify(userData))
		setUser(userData)
		navigate('/')
	}

	const logout = () => {
		localStorage.removeItem('user')
		setUser(null)
		navigate('/auth')
	}

	useEffect(() => {
		const isAuthenticated = localStorage.getItem('user')
		if (isAuthenticated) {
			setUser(JSON.parse(isAuthenticated))
			navigate('/')
		} else {
			navigate('/auth')
		}
	}, [])

	return (
		<AuthContext.Provider
			value={{
				user,
				login,
				logout
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
