import { IWeatherParams } from '@/types/weather.types'
import { useQuery } from '@tanstack/react-query'
import { weatherService } from '../services/weather.service'

interface IProps {
	params: IWeatherParams
	canFetch: boolean
}

export const useWeather = () => {
	const useGetOne = ({ canFetch, params }: IProps) => {
		return useQuery({
			queryKey: ['weather'],
			queryFn: () => weatherService.getOne(params),
			enabled: canFetch,
			retry: 0,
		})
	}
	return { useGetOne }
}
