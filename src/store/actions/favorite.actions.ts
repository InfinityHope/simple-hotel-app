import { IFavoriteHotel } from '@/interfaces/Hotel.interface'
import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from '../constants'

//Favorite actions
export const addToFavorite = (payload: IFavoriteHotel) => ({
	type: ADD_TO_FAVORITE,
	payload
})
export const removeFromFavorite = (payload: number) => ({
	type: REMOVE_FROM_FAVORITE,
	payload
})
