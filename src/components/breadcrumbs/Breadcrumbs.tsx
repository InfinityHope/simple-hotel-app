import { useAppSelector } from '@/hooks/useAppSelector'
import ChevronRightIcon from '@/ui/ChevronRightIcon/ChevronRightIcon'
import { convertLongDate } from '@/utils/date.utils'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Flex,
	Text,
	useMediaQuery
} from '@chakra-ui/react'

const Breadcrumbs = () => {
	const { checkIn, location } = useAppSelector(state => state.searchParamsReducer)
	const [isLargerThan550] = useMediaQuery('(min-width: 550px)')

	return (
		<Flex
			width={'100%'}
			height={'40px'}
			justifyContent={'space-between'}
			alignItems={'center'}
			flexWrap={'wrap'}
		>
			<Breadcrumb
				fontSize={isLargerThan550 ? '32px' : '24px'}
				fontWeight={'medium'}
				spacing='14px'
				alignItems={'center'}
				separator={<ChevronRightIcon />}
			>
				<BreadcrumbItem>
					<BreadcrumbLink href='#'>Отели</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem>
					<BreadcrumbLink href='#'>{location}</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>
			<Text fontSize={isLargerThan550 ? '24px' : '16px'}>{convertLongDate(checkIn)}</Text>
		</Flex>
	)
}

export default Breadcrumbs
