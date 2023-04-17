import { useAppSelector } from '@/hooks/useAppSelector'
import { Flex } from '@chakra-ui/react'
import styles from './HotelList.module.scss'
import HotelItem from './hotel-item/HotelItem'

const HotelList = () => {
	const hotels = useAppSelector(state => state.hotelsReducer.hotels)

	return (
		<Flex as='ul' className={styles.HotelList}>
			{hotels.map(hotel => (
				<HotelItem key={hotel.hotelId} {...hotel} />
			))}
		</Flex>
	)
}

export default HotelList
