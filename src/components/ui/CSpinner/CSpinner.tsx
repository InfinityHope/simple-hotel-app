import { Flex, Spinner, useMediaQuery } from '@chakra-ui/react'

const CSpinner = () => {
	const [isLargerThan430] = useMediaQuery('(min-width: 430px)')
	return (
		<Flex justifyContent={'center'}>
			<Spinner boxSize={isLargerThan430 ? '20em' : '10em'} />
		</Flex>
	)
}

export default CSpinner
