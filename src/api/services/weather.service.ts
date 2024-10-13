import { IWeather, IWeatherParams } from '@/types/weather.types'
import axios from 'axios'

class WeatherService {
	private URL = 'https://api.open-meteo.com/v1/forecast'

	async getOne(params: IWeatherParams): Promise<IWeather> {
		try {
			const { data } = await axios.get(this.URL, {
				params: {
					...params,
					hourly: 'temperature_2m',
					daily: 'weathercode,temperature_2m_max,temperature_2m_min',
					timezone: 'GMT',
				},
			})
			return data
		} catch (error) {
			throw error
		}
	}
}

export const weatherService = new WeatherService()
