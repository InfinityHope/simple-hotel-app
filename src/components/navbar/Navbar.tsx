import { useAuth } from '@/hooks/useAuth'
import { Button, Flex, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import ExitIcon from '../ui/ExitIcon/ExitIcon'

const Navbar = () => {
	const { logout } = useAuth()

	return (
		<Flex justifyContent={'space-between'} alignItems={'center'} p={'32px'} height={'92px'}>
			<Heading color={'#424242'} as='h1'>
				<Link to={'/'}>Simple Hotel Check</Link>
			</Heading>
			<Button
				onClick={logout}
				variant={'ghost'}
				fontSize={'16px'}
				color={'#41522E'}
				rightIcon={<ExitIcon />}
			>
				Выйти
			</Button>
		</Flex>
	)
}

export default Navbar
