import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import { FC } from 'react'
import { Controller } from 'react-hook-form'
import styles from './CInput.module.scss'

interface ICInput {
	label: string
	control: any
	name: string
	type?: string
	required?: {
		value: boolean
		message: string
	}
	pattern?: {
		value: RegExp
		message: string
	}
	minLength?: {
		value: number
		message: string
	}
}

const CInput: FC<ICInput> = ({
	required,
	pattern,
	label,
	name,
	control,
	type = 'text',
	minLength
}) => {
	return (
		<Controller
			rules={{
				required,
				pattern,
				minLength
			}}
			render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
				<FormControl isInvalid={invalid}>
					<FormLabel fontSize={'16px'}>{label}</FormLabel>
					<Input
						className={styles.CInput}
						type={type}
						value={value}
						onChange={onChange}
						size='sm'
					/>
					{error?.message && <FormErrorMessage>{error.message}</FormErrorMessage>}
				</FormControl>
			)}
			name={name}
			control={control}
		/>
	)
}

export default CInput
