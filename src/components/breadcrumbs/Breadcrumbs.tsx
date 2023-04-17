import { useAppSelector } from '@/hooks/useAppSelector'
import ChevronRightIcon from '@/ui/ChevronRightIcon/ChevronRightIcon'
import { convertLongDate } from '@/utils/date.utils'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Text } from '@chakra-ui/react'

const Breadcrumbs = () => {
	const { checkIn, location } = useAppSelector(state => state.searchParamsReducer)

	return (
		<Flex width={'100%'} height={'40px'} justifyContent={'space-between'} alignItems={'center'}>
			<Breadcrumb
				fontSize={'32px'}
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
			<Text fontSize={'24px'}>{convertLongDate(checkIn)}</Text>
		</Flex>
	)
}

export default Breadcrumbs
