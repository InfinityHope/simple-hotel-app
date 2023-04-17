import { convertShortDate } from '@/utils/date.utils'
import { SET_CHECK_IN, SET_LOCATION, SET_NIGHTS } from '../constants'

interface ISearchParamsState {
	location: string
	checkIn: string
	nights: number
}

interface ISearchParamsAction {
	type: string
	payload?: string | number
}

const initialState: ISearchParamsState = {
	location: 'Москва',
	checkIn: convertShortDate(new Date()),
	nights: 1
}

export const searchParamsReducer = (state = initialState, action: ISearchParamsAction) => {
	switch (action.type) {
		case SET_LOCATION:
			return { ...state, location: action.payload as string }
		case SET_CHECK_IN:
			return { ...state, checkIn: action.payload as string }
		case SET_NIGHTS:
			return { ...state, nights: action.payload as number }
		default: {
			return state
		}
	}
}
