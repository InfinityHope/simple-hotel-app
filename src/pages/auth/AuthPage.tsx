import AuthForm from '@/components/auth-form/AuthForm'
import { Flex } from '@chakra-ui/react'
import styles from './AuthPage.module.scss'

const AuthPage = () => {
	return (
		<Flex className={styles.AuthPage}>
			<AuthForm />
		</Flex>
	)
}

export default AuthPage
