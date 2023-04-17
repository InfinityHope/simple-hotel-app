import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import { FC } from 'react'
import { Controller } from 'react-hook-form'
import styles from './CDatePicker.module.scss'

interface ICDataPicker {
	label: string
	control: any
	name: string
}

const CDatePicker: FC<ICDataPicker> = ({ label, name, control }) => {
	return (
		<Controller
			render={({ field: { onChange, value } }) => (
				<FormControl>
					<FormLabel fontSize={'16px'}>{label}</FormLabel>
					<Input
						type={'date'}
						className={styles.CInput}
						value={value}
						onChange={onChange}
						size='sm'
					/>
				</FormControl>
			)}
			name={name}
			control={control}
		/>
	)
}

export default CDatePicker
