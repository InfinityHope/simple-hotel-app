import { FormControl, FormLabel, Select } from '@chakra-ui/react'
import { ChangeEvent, FC } from 'react'

interface IOption {
	value: string
	label: string
}

interface ICSelect {
	label?: string
	options: IOption[]
	onChange: (e: ChangeEvent<HTMLSelectElement>) => void
	width?: string
}

const CSelect: FC<ICSelect> = ({ label = '', options, onChange, width = '145px' }) => {
	return (
		<FormControl>
			{label && <FormLabel fontSize={'16px'}>{label}</FormLabel>}
			<Select cursor={'pointer'} size='sm' width={width} onChange={onChange}>
				{options.map(({ value, label }) => (
					<option key={value} value={value}>
						{label}
					</option>
				))}
			</Select>
		</FormControl>
	)
}

export default CSelect
