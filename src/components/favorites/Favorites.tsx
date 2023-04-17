import { useAppSelector } from '@/hooks/useAppSelector'
import { Flex, Heading, Text } from '@chakra-ui/react'
import { ChangeEvent, useState } from 'react'
import CSelect from '../ui/CSelect/CSelect'
import styles from './Favorites.module.scss'
import FavoriteItem from './favorite-item/FavoriteItem'

const rating = [
	{
		value: 'ratingUp',
		label: 'Рейтинг выше'
	},
	{
		value: 'ratingDown',
		label: 'Рейтинг ниже'
	}
]

const price = [
	{
		value: 'priceUp',
		label: 'Цена выше'
	},
	{
		value: 'priceDown',
		label: 'Цена ниже'
	}
]

const Favorites = () => {
	const favHotels = useAppSelector(state => state.favoritesReducer.favHotels)

	const [selectedPrice, setSelectedPrice] = useState<string>('priceUp')
	const [selectedRating, setSelectedRating] = useState<string>('ratingUp')

	const sortByRating = () => {
		if (selectedRating === 'ratingUp') {
			return favHotels.sort((a, b) => a.stars - b.stars)
		} else {
			return favHotels.sort((a, b) => b.stars - a.stars)
		}
	}

	const sortByPrice = () => {
		if (selectedPrice === 'priceUp') {
			return favHotels.sort((a, b) => a.priceAvg - b.priceAvg)
		} else {
			return favHotels.sort((a, b) => b.priceAvg - a.priceAvg)
		}
	}

	const selectRating = (e: ChangeEvent<HTMLSelectElement>) => {
		setSelectedRating(e.target.value)
		sortByRating()
	}

	const selectPrice = (e: ChangeEvent<HTMLSelectElement>) => {
		setSelectedPrice(e.target.value)
		sortByPrice()
	}

	return (
		<Flex className={styles.Favorites} flexDirection={'column'}>
			<Heading as='h3'>Избранное</Heading>
			{favHotels.length !== 0 ? (
				<>
					<Flex m={'20px 0'}>
						<CSelect label={'Рейтинг'} options={rating} onChange={selectRating} />
						<CSelect label={'Цена'} options={price} onChange={selectPrice} width={''} />
					</Flex>
					<Flex className={styles.FavoritesList} flexDirection={'column'} as='ul'>
						{favHotels.map(favHotel => {
							return <FavoriteItem key={favHotel.hotelId} {...favHotel} />
						})}
					</Flex>
				</>
			) : (
				<Text textAlign={'center'} mt={'5em'} fontSize={'18px'} fontWeight={'bold'}>
					Вы пока ничего не добавляли в избранное
				</Text>
			)}
		</Flex>
	)
}

export default Favorites
