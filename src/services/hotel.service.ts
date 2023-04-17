import { API_URL } from '@/constants/api.constants'
import { IHotel } from '@/interfaces/Hotel.interface'
import { addDays } from '@/utils/date.utils'
import { axiosInstance } from './../api/axios.instance'

export const HotelService = {
	async getHotels(location: string, nights: number, checkIn: string): Promise<IHotel> {
		const checkOut = addDays(+nights, checkIn)
		const { data } = await axiosInstance.get(
			`${API_URL}?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=50`
		)
		return await data
	}
}
