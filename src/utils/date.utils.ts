export const convertShortDate = (date: Date) => {
	let day = ('0' + date.getDate()).slice(-2)
	let month = ('0' + (date.getMonth() + 1)).slice(-2)

	return date.getFullYear() + '-' + month + '-' + day
}

export const convertLongDate = (date: string) => {
	return new Date(date).toLocaleDateString('ru-RU', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	})
}

export const addDays = (days: number, date: string) => {
	const newDate = new Date(date)
	newDate.setDate(newDate.getDate() + days - 1)
	return convertShortDate(newDate)
}
