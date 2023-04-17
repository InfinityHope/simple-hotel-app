import { Button } from '@chakra-ui/react'
import { FC } from 'react'
import styles from './CButton.module.scss'

interface ICButton {
	label: string
	width?: string
	onClick?: () => void
	type?: 'submit' | 'reset' | 'button'
}

const CButton: FC<ICButton> = ({ label, width = '100%', type = 'button' }) => {
	return (
		<Button className={styles.CButton} transitionDuration={'.5s'} width={width} type={type}>
			{label}
		</Button>
	)
}

export default CButton
