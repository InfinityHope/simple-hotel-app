import { IFavoriteHotel } from '@/interfaces/Hotel.interface'
import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from '../constants'

interface IFavoriteState {
	favHotels: IFavoriteHotel[]
}

interface IFavoriteAction {
	type: string
	payload?: IFavoriteHotel | number
}

const initialState: IFavoriteState = {
	favHotels: []
}

export const favoritesReducer = (state = initialState, action: IFavoriteAction) => {
	switch (action.type) {
		case ADD_TO_FAVORITE: {
			return {
				...state,
				favHotels: [
					...state.favHotels,
					{ ...(action.payload as IFavoriteHotel), isFavorite: true }
				]
			}
		}

		case REMOVE_FROM_FAVORITE: {
			return {
				...state,
				favHotels: state.favHotels.filter(
					item => item.hotelId !== (action.payload as number)
				)
			}
		}

		default: {
			return state
		}
	}
}
