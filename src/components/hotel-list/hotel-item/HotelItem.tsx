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
import { truncateString } from '@/utils/truncateString'
import { Box, Flex, Img, Text, useMediaQuery } from '@chakra-ui/react'
import { FC } from 'react'
import styles from './HotelItem.module.scss'

const HotelItem: FC<IHotel> = hotel => {
	const { checkIn, nights } = useAppSelector(state => state.searchParamsReducer)
	const [isLargerThan550] = useMediaQuery('(min-width: 550px)')
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
			{isLargerThan550 && (
				<Box className={styles.HotelItemLeft}>
					<Img src={houseImg} />
				</Box>
			)}

			<Flex className={styles.HotelItemRight}>
				<Flex className={styles.HotelItemRightHeader}>
					{isLargerThan550 ? (
						<Text>{hotel.hotelName}</Text>
					) : (
						<Text>{truncateString(hotel.hotelName, 17)}</Text>
					)}
					{!isFavorite ? (
						<FavoriteIconInActive onClick={addToFav} />
					) : (
						<FavoriteIconActive onClick={removeFromFav} />
					)}
				</Flex>
				<Flex
					width={isLargerThan550 ? '25%' : '75%'}
					className={styles.HotelItemRightBody}
					flexDirection={isLargerThan550 ? 'row' : 'column'}
				>
					<Text>{convertLongDate(checkIn)}</Text>
					{isLargerThan550 && <Text>-</Text>}
					<Text>
						{nights} {createLabel(nights, ['день', 'дня', 'дней'])}
					</Text>
				</Flex>
				<Flex
					className={styles.HotelItemRightFooter}
					flexDirection={isLargerThan550 ? 'row' : 'column'}
					alignItems={isLargerThan550 ? 'center' : 'flex-start'}
				>
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
