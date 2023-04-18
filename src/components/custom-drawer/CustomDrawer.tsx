import {
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay
} from '@chakra-ui/react'
import { FC, PropsWithChildren } from 'react'

interface IDrawer {
	onClose: () => void
	isOpen: boolean
}

const CustomDrawer: FC<PropsWithChildren<IDrawer>> = ({ children, onClose, isOpen }) => {
	return (
		<Drawer isOpen={isOpen} placement='right' onClose={onClose}>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerCloseButton />
				<DrawerBody>{children}</DrawerBody>
			</DrawerContent>
		</Drawer>
	)
}

export default CustomDrawer
