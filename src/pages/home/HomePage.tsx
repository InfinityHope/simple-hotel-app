import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs'
import Carousel from '@/components/carousel/Carousel'
import Favorites from '@/components/favorites/Favorites'
import HotelList from '@/components/hotel-list/HotelList'
import Navbar from '@/components/navbar/Navbar'
import SearchForm from '@/components/search-form/SearchForm'
import CSpinner from '@/components/ui/CSpinner/CSpinner'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'
import { useNotification } from '@/hooks/useNotification'
import { getHotelsRequest } from '@/store/actions/hotel.actions'
import { createLabel } from '@/utils/createLabel'
import { Box, Container, Flex, Grid, GridItem, Text, useMediaQuery } from '@chakra-ui/react'
import { useEffect } from 'react'
import styles from './HomePage.module.scss'

const HomePage = () => {
	const dispatch = useAppDispatch()
	const notification = useNotification()

	const countFavHotels = useAppSelector(state => state.favoritesReducer.favHotels.length)
	const searchParams = useAppSelector(state => state.searchParamsReducer)
	const { loading, error } = useAppSelector(state => state.hotelsReducer)

	const [isLargerThan1290] = useMediaQuery('(min-width: 1290px)')

	useEffect(() => {
		dispatch(getHotelsRequest(searchParams))
	}, [])

	if (error) {
		notification('error', 'Ошибка при получении данных', 'Error!')
	}

	return (
		<Box className={styles.HomePage}>
			<Navbar />
			<Container maxW='1440px'>
				<Grid templateColumns={isLargerThan1290 ? '25% 75%' : '100%'} gap='24px'>
					{isLargerThan1290 && (
						<GridItem>
							<Grid gap={'24px'} className={styles.SideBlock}>
								<SearchForm />
								<Favorites />
							</Grid>
						</GridItem>
					)}
					<GridItem>
						<Flex className={styles.MainBlock}>
							{error && (
								<Text fontSize={'24px'} textAlign={'center'}>
									{error}
								</Text>
							)}
							{loading && <CSpinner />}
							{!loading && !error && (
								<>
									<Breadcrumbs />
									<Carousel />
									<Text fontSize={'17px'} mt={'28px'}>
										Добавлено в Избранное: <b>{countFavHotels}</b>{' '}
										{createLabel(countFavHotels, ['отель', 'отеля', 'отелей'])}
									</Text>
									<HotelList />
								</>
							)}
						</Flex>
					</GridItem>
				</Grid>
			</Container>
		</Box>
	)
}

export default HomePage
