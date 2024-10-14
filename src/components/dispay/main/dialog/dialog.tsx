import { useWeather } from '@/api/hooks/useWeather'
import { ErrorMessage } from '@/components/ui/error-message/error-message'
import { CloseIcon } from '@/components/ui/icons/close-icon'
import { weatherCodeMapping } from '@/constants/weather.constant'
import { cn } from '@/lib/utils'
import { IWeatherParams } from '@/types/weather.types'
import { NextPage } from 'next'
import styles from './dialog.module.scss'
import { Skeleton } from './skeleton'
interface IProps {
	isOpen: boolean
	onClose: () => void
	title: string
	params: IWeatherParams
}

export const Dialog: NextPage<IProps> = props => {
	const { isOpen, onClose, title, params } = props
	const { useGetOne } = useWeather()
	const { data, isFetching, error } = useGetOne({
		canFetch: isOpen,
		params,
	})

	const currentTemperature = data?.hourly?.temperature_2m[0]
	const lowestTemperature = data?.daily?.temperature_2m_min[0]
	const highestTemperature = data?.daily?.temperature_2m_max[0]
	const weather = weatherCodeMapping[data?.daily?.weathercode[0] || 0]

	return (
		<div
			className={cn(styles.container, {
				['opacity-0 invisible']: !isOpen,
				['opacity-100 visible']: isOpen,
			})}
		>
			<div
				className={cn(styles.dialog, {
					['opacity-0 invisible translate-y-10 scale-75']: !isOpen,
					['opacity-100 visible translate-y-0 scale-100']: isOpen,
				})}
			>
				<CloseIcon className='absolute top-4 right-4' onClick={onClose} />
				{error ? (
					<ErrorMessage message={error.message} />
				) : isFetching ? (
					<Skeleton />
				) : (
					<div>
						<div className='mb-6'>
							<h2 className='text-2xl font-bold text-white'>{title}</h2>
						</div>
						<div className='space-y-4'>
							<div className='flex items-center space-x-4'>
								<span className='text-5xl'>{weather.icon}</span>
								<p className='text-white text-lg font-semibold'>
									{weather.condition}
								</p>
							</div>
							<div className='bg-card-background p-4 rounded-md shadow-inner text-white space-y-2'>
								<p>
									<strong className='text-gray-400'>
										Current Temperature:
									</strong>
									{currentTemperature}°C
								</p>
								<p>
									<strong className='text-gray-400'>
										Lowest Temperature Today:
									</strong>
									{lowestTemperature}
									°C
								</p>
								<p>
									<strong className='text-gray-400'>
										Highest Temperature Today:
									</strong>
									{highestTemperature}°C
								</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
