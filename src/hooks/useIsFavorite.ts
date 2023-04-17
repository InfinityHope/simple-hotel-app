import { useAppSelector } from './useAppSelector'

export const useIsFavorite = (id: number) => {
	const favHotels = useAppSelector(state => state.favoritesReducer.favHotels)
	return favHotels.some(favHotel => favHotel.hotelId === id)
}
