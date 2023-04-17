import { IUser } from '@/interfaces/User.interface'

export interface IAuthContext {
	user: IUser | null
	login: (userData: IUser) => void
	logout: () => void
}
