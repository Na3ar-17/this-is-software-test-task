import { Result } from '@/types/user.types'
import { useLocalStorage } from './useLocalStorage'

export const useSavedUser = (user?: Result) => {
	const [savedUsers, setSavedUsers, isLoading] = useLocalStorage<Result[]>({
		key: 'savedUsers',
		defaultValue: [],
	})

	const handleSaveUser = () => {
		if (!user) return

		const currentUsers = window.localStorage.getItem('savedUsers')
		let updatedUsers: Result[] = currentUsers ? JSON.parse(currentUsers) : []

		const isUserAlreadySaved = updatedUsers.some(
			(el: Result) => el.id.value === user.id.value
		)
		if (!isUserAlreadySaved) {
			updatedUsers.push(user)
			window.localStorage.setItem('savedUsers', JSON.stringify(updatedUsers))
			setSavedUsers(updatedUsers)
		}
	}

	const handleRemoveUser = (id: string) => {
		const currentUsers = window.localStorage.getItem('savedUsers')
		let updatedUsers: Result[] = currentUsers ? JSON.parse(currentUsers) : []
		updatedUsers = updatedUsers.filter((el: Result) => el.id.value !== id)
		setSavedUsers(updatedUsers)
		window.localStorage.setItem('savedUsers', JSON.stringify(updatedUsers))
	}

	return { handleSaveUser, handleRemoveUser, isLoading, savedUsers }
}
