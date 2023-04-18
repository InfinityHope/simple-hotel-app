import { useAuth } from '@/hooks/useAuth'
import { Button, Flex, Heading, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import CustomDrawer from '../custom-drawer/CustomDrawer'
import Favorites from '../favorites/Favorites'
import SearchForm from '../search-form/SearchForm'
import ExitIcon from '../ui/ExitIcon/ExitIcon'

const Navbar = () => {
	const { logout } = useAuth()
	const [isLargerThan1290] = useMediaQuery('(min-width: 1290px)')
	const [isLargerThan550] = useMediaQuery('(min-width: 550px)')
	const { isOpen, onOpen, onClose } = useDisclosure()
	const btnRef = useRef(null)

	return (
		<Flex
			flexDirection={isLargerThan1290 ? 'row' : 'column'}
			justifyContent={'space-between'}
			alignItems={'center'}
			p={'32px'}
			height={'108px'}
		>
			<Heading fontSize={isLargerThan550 ? '24px' : '18px'} color={'#424242'} as='h1'>
				<Link to={'/'}>Simple Hotel Check</Link>
			</Heading>
			{!isLargerThan1290 && (
				<Flex width={'100%'} justifyContent={'space-between'} alignItems={'center'}>
					<>
						<Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
							|||
						</Button>
						<CustomDrawer onClose={onClose} isOpen={isOpen}>
							<SearchForm />
							<Favorites />
						</CustomDrawer>
						<Button
							onClick={logout}
							variant={'ghost'}
							fontSize={'16px'}
							color={'#41522E'}
							rightIcon={<ExitIcon />}
						>
							Выйти
						</Button>
					</>
				</Flex>
			)}
			{isLargerThan1290 && (
				<Button
					onClick={logout}
					variant={'ghost'}
					fontSize={'16px'}
					color={'#41522E'}
					rightIcon={<ExitIcon />}
				>
					Выйти
				</Button>
			)}
		</Flex>
	)
}

export default Navbar
