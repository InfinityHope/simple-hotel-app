import { useAppSelector } from '@/hooks/useAppSelector'
import { Box, Img } from '@chakra-ui/react'
import Slider from 'react-slick'
import styles from './Carousel.module.scss'

const Carousel = () => {
	const hotelImages = useAppSelector(state => state.hotelsReducer.hotelImages)
	let settings = {
		slidesToShow: 4.7,
		slidesToScroll: 1,
		infinite: true,
		swipeToSlide: true,
		arrows: false,
		cssEase: 'linear',
		pauseOnHover: true
	}

	return (
		<Box className={styles.Carousel}>
			<Slider {...settings}>
				{hotelImages.map((img, index) => (
					<Img key={index} src={img} cursor={'pointer'} />
				))}
			</Slider>
		</Box>
	)
}

export default Carousel
