import houseImg from '@/assets/house.png'
import RatingBar from '@/components/rating-bar/RatingBar'
import { FavoriteIconActive, FavoriteIconInActive } from '@/components/ui/FavoriteIcon'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'
import { useIsFavorite } from '@/hooks/useIsFavorite'
import { IHotel } from '@/interfaces/Hotel.interface'
import { addToFavorite, removeFromFavorite } from '@/store/actions/favorite.actions'
import { createLabel } from '@/utils/createLabel'
import { convertLongDate } from '@/utils/date.utils'
import { Box, Flex, Img, Text } from '@chakra-ui/react'
import { FC } from 'react'
import styles from './HotelItem.module.scss'

const HotelItem: FC<IHotel> = hotel => {
	const { checkIn, nights } = useAppSelector(state => state.searchParamsReducer)
	const isFavorite = useIsFavorite(hotel.hotelId)
	const dispatch = useAppDispatch()

	const addToFav = () => {
		dispatch(
			addToFavorite({
				hotelName: hotel.hotelName,
				hotelId: hotel.hotelId,
				isFavorite: hotel.isFavorite,
				checkIn,
				nights,
				priceAvg: hotel.priceAvg,
				stars: hotel.stars,
				city: hotel.location.name
			})
		)
	}

	const removeFromFav = () => {
		dispatch(removeFromFavorite(hotel.hotelId))
	}

	return (
		<Flex as='li' className={styles.HotelItem}>
			<Box className={styles.HotelItemLeft}>
				<Img src={houseImg} />
			</Box>
			<Flex className={styles.HotelItemRight}>
				<Flex className={styles.HotelItemRightHeader}>
					<Text>{hotel.hotelName}</Text>
					{!isFavorite ? (
						<FavoriteIconInActive onClick={addToFav} />
					) : (
						<FavoriteIconActive onClick={removeFromFav} />
					)}
				</Flex>
				<Flex className={styles.HotelItemRightBody}>
					<Text>{convertLongDate(checkIn)}</Text>
					<Text>-</Text>
					<Text>
						{nights} {createLabel(nights, ['день', 'дня', 'дней'])}
					</Text>
				</Flex>
				<Flex className={styles.HotelItemRightFooter}>
					<RatingBar stars={hotel.stars} />
					<Flex className={styles.HotelItemRightFooterInner}>
						<Text>Price:</Text>
						<Text>{Math.ceil(hotel.priceAvg)} ₽</Text>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	)
}

export default HotelItem
