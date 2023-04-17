import RatingStar from '@/ui/RatingIcon/RatingStar'
import { Flex } from '@chakra-ui/react'
import { FC } from 'react'
import styles from './RatingBar.module.scss'

interface IRatingBar {
	stars: number
}

const RatingBar: FC<IRatingBar> = ({ stars }) => {
	return (
		<Flex className={styles.RatingBar}>
			{[...Array(stars || 5)].map((star, index) => {
				return <RatingStar key={index} />
			})}
		</Flex>
	)
}

export default RatingBar
