import { useQuery } from '@tanstack/react-query'
import { userService } from '../services/user.service'

export const useUser = () => {
	const useGetMany = (results: number) => {
		return useQuery({
			queryKey: ['users'],
			queryFn: () => userService.getMany(results),
			refetchInterval: 3000 * 100,
			retry: 1,
			staleTime: Infinity,
		})
	}
	return { useGetMany }
}
