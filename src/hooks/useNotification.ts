import { useToast } from '@chakra-ui/react'

export const useNotification = () => {
	const toast = useToast()

	return (status: 'success' | 'error', description: string, title: string) => {
		return toast({
			title,
			status,
			description,
			isClosable: true,
			duration: 3000
		})
	}
}
