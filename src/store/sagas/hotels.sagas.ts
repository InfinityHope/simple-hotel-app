import { IHotel } from '@/interfaces/Hotel.interface'
import { ISearchParams } from '@/interfaces/SearchParams.interface'
import { HotelService } from '@/services/hotel.service'
import { call, put, takeEvery } from 'redux-saga/effects'
import { getHotelsError, getHotelsSuccess } from '../actions/hotel.actions'
import { GET_HOTELS_REQUEST } from '../constants'

export function* getHotelsWorker(action: { type: string; payload: ISearchParams }) {
	const { location, nights, checkIn } = action.payload
	try {
		const data: IHotel[] = yield call(HotelService.getHotels, location, nights, checkIn)
		yield put(getHotelsSuccess(data))
	} catch (e: any) {
		yield put(getHotelsError(e.message as string))
	}
}

export function* hotelsWatcher() {
	yield takeEvery(GET_HOTELS_REQUEST, getHotelsWorker)
}
