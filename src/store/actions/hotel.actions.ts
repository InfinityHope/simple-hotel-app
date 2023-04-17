import { IHotel } from '@/interfaces/Hotel.interface'
import { ISearchParams } from '@/interfaces/SearchParams.interface'
import { GET_HOTELS_FAILED, GET_HOTELS_REQUEST, GET_HOTELS_SUCCESS } from '../constants'

//Hotel actions
export const getHotelsRequest = (payload: ISearchParams) => ({
	type: GET_HOTELS_REQUEST,
	payload
})

export const getHotelsError = (payload: string) => ({
	type: GET_HOTELS_FAILED,
	payload
})

export const getHotelsSuccess = (payload: IHotel[]) => ({
	type: GET_HOTELS_SUCCESS,
	payload
})
