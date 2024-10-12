import { UserResponse } from '@/types/user.types'
import axios from 'axios'

class UserService {
	private URL = 'https://randomuser.me/api/'

	async getMany(results: number): Promise<UserResponse> {
		try {
			const { data } = await axios.get(this.URL, {
				params: {
					results,
				},
			})
			return data
		} catch (error) {
			throw error
		}
	}
}

export const userService = new UserService()
