import { useAppDispatch } from '@/hooks/useAppDispatch'
import { ISearchParams } from '@/interfaces/SearchParams.interface'
import { getHotelsRequest } from '@/store/actions/hotel.actions'
import { setCheckIn, setLocation, setNights } from '@/store/actions/search-params.actions'
import CButton from '@/ui/CButton/CButton'
import CDatePicker from '@/ui/CDatePicker/CDatePicker'
import CInput from '@/ui/CInput/CInput'
import { convertShortDate } from '@/utils/date.utils'
import { Flex } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './SearchForm.module.scss'

const SearchForm = () => {
	const dispatch = useAppDispatch()
	const { control, handleSubmit } = useForm<ISearchParams>({
		mode: 'onBlur',
		defaultValues: {
			location: 'Москва',
			checkIn: convertShortDate(new Date()),
			nights: 1
		}
	})

	const onSubmit: SubmitHandler<ISearchParams> = data => {
		dispatch(setNights(data.nights))
		dispatch(setCheckIn(data.checkIn))
		dispatch(setLocation(data.location))
		dispatch(getHotelsRequest(data))
	}

	return (
		<Flex as='form' className={styles.SearchForm} onSubmit={handleSubmit(onSubmit)}>
			<CInput type='text' label={'Локация'} control={control} name={'location'} />
			<CDatePicker label={'Дата заселения'} control={control} name={'checkIn'} />
			<CInput type='number' label={'Количество дней'} control={control} name={'nights'} />
			<CButton label={'Найти'} type='submit' />
		</Flex>
	)
}

export default SearchForm
