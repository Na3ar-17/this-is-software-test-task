import { UserResult } from '@/types/user.types'
import { useLocalStorage } from './useLocalStorage'

export const useSavedUser = (user?: UserResult) => {
	const [savedUsers, setSavedUsers, isLoading] = useLocalStorage<UserResult[]>({
		key: 'savedUsers',
		defaultValue: [],
	})

	const handleSaveUser = () => {
		if (!user) return

		const currentUsers = window.localStorage.getItem('savedUsers')
		let updatedUsers: UserResult[] = currentUsers
			? JSON.parse(currentUsers)
			: []

		const isUserAlreadySaved = updatedUsers.some(
			(el: UserResult) => el.id.value === user.id.value
		)
		if (!isUserAlreadySaved) {
			updatedUsers.push(user)
			window.localStorage.setItem('savedUsers', JSON.stringify(updatedUsers))
			setSavedUsers(updatedUsers)
		}
	}

	const handleRemoveUser = (id: string) => {
		const currentUsers = window.localStorage.getItem('savedUsers')
		let updatedUsers: UserResult[] = currentUsers
			? JSON.parse(currentUsers)
			: []
		updatedUsers = updatedUsers.filter((el: UserResult) => el.id.value !== id)
		setSavedUsers(updatedUsers)
		window.localStorage.setItem('savedUsers', JSON.stringify(updatedUsers))
	}

	return { handleSaveUser, handleRemoveUser, isLoading, savedUsers }
}
