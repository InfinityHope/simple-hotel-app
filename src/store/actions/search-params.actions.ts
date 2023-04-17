import { SET_CHECK_IN, SET_LOCATION, SET_NIGHTS } from '../constants'

//Search params actions
export const setLocation = (payload: string) => ({
	type: SET_LOCATION,
	payload
})
export const setCheckIn = (payload: string) => ({
	type: SET_CHECK_IN,
	payload
})
export const setNights = (payload: number) => ({
	type: SET_NIGHTS,
	payload
})
