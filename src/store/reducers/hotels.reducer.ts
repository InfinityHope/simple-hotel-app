import img2 from '@/assets/carousel-img-2.png'
import img3 from '@/assets/carousel-img-3.png'
import img1 from '@/assets/carousel-img.png'
import { IHotel } from '@/interfaces/Hotel.interface'
import { ISearchParams } from '@/interfaces/SearchParams.interface'
import { GET_HOTELS_FAILED, GET_HOTELS_REQUEST, GET_HOTELS_SUCCESS } from '../constants'

interface IHotelsState {
	hotels: IHotel[]
	hotelImages: string[]
	loading: boolean
	error: string
}

interface IHotelAction {
	type: string
	payload: IHotel[] | string | ISearchParams
}

const initialState: IHotelsState = {
	hotels: [],
	hotelImages: [img1, img2, img3, img2, img1, img3, img2, img1],
	loading: false,
	error: ''
}

export const hotelsReducer = (state = initialState, action: IHotelAction) => {
	switch (action.type) {
		case GET_HOTELS_REQUEST: {
			return {
				...state,
				loading: true
			}
		}
		case GET_HOTELS_FAILED: {
			return {
				...state,
				loading: false,
				error: action.payload as string
			}
		}
		case GET_HOTELS_SUCCESS: {
			return {
				...state,
				hotels: [...(action.payload as IHotel[])],
				loading: false
			}
		}
		default: {
			return state
		}
	}
}
