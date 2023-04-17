import CButton from '@/components/ui/CButton/CButton'
import CInput from '@/components/ui/CInput/CInput'
import { emailRegex, passRegex } from '@/constants/regex.constants'
import { useAuth } from '@/hooks/useAuth'
import { IUser } from '@/interfaces/User.interface'
import { Flex, Heading } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './AuthForm.module.scss'

const AuthForm = () => {
	const { login } = useAuth()
	const { control, handleSubmit } = useForm<IUser>({
		mode: 'onChange',
		defaultValues: {
			login: '',
			password: ''
		}
	})

	const onSubmit: SubmitHandler<IUser> = data => login(data)

	return (
		<Flex className={styles.AuthForm}>
			<Flex as='form' onSubmit={handleSubmit(onSubmit)}>
				<Heading as='h2' fontSize={'24px'}>
					Simple Hotel Check
				</Heading>
				<CInput
					required={{ value: true, message: 'Поле обязательно для заполнения' }}
					pattern={{ value: emailRegex, message: 'Некорректный формат e-mail' }}
					label='Логин'
					name={'login'}
					control={control}
				/>
				<CInput
					required={{ value: true, message: 'Поле обязательно для заполнения' }}
					pattern={{ value: passRegex, message: 'Пароль должен быть на латинице ' }}
					minLength={{ value: 8, message: 'Пароль должен быть не менее 8 символов' }}
					type='password'
					label='Пароль'
					name={'password'}
					control={control}
				/>
				<CButton label={'Войти'} width={'50%'} type='submit' />
			</Flex>
		</Flex>
	)
}

export default AuthForm
