import RatingBar from '@/components/rating-bar/RatingBar'
import { FavoriteIconActive } from '@/components/ui/FavoriteIcon'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { IFavoriteHotel } from '@/interfaces/Hotel.interface'
import { removeFromFavorite } from '@/store/actions/favorite.actions'
import { createLabel } from '@/utils/createLabel'
import { convertLongDate } from '@/utils/date.utils'
import { Flex, Text } from '@chakra-ui/react'
import { FC } from 'react'
import styles from './FavoriteItem.module.scss'

const FavoriteItem: FC<IFavoriteHotel> = favHotel => {
	const dispatch = useAppDispatch()

	const removeFromFav = () => {
		dispatch(removeFromFavorite(favHotel.hotelId))
	}

	return (
		<Flex className={styles.FavoriteItem} as='li'>
			<Flex className={styles.FavoriteItemHeader}>
				<Text>{favHotel.hotelName}</Text>
				<FavoriteIconActive onClick={removeFromFav} />
			</Flex>
			<Flex className={styles.FavoriteItemBody}>
				<Text>{convertLongDate(favHotel.checkIn)}</Text>
				<Text>-</Text>
				<Text>
					{favHotel.nights} {createLabel(favHotel.nights, ['день', 'дня', 'дней'])}
				</Text>
			</Flex>
			<Flex className={styles.FavoriteItemFooter}>
				<RatingBar stars={favHotel.stars} />
				<Flex className={styles.FavoriteItemFooterInner}>
					<Text>Price:</Text>
					<Text>{Math.ceil(favHotel.priceAvg)} ₽</Text>
				</Flex>
			</Flex>
		</Flex>
	)
}

export default FavoriteItem
