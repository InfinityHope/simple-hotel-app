import { FC } from 'react'

interface IChevronRightIcon {
	boxSize?: string
}

const ChevronRightIcon: FC<IChevronRightIcon> = ({ boxSize = '15 15' }) => {
	return (
		<svg
			width='15'
			height='40'
			viewBox={`0 0 ${boxSize}`}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M1 1.33334L9.66667 10L1 18.6667'
				stroke='#A7A7A7'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

export default ChevronRightIcon
