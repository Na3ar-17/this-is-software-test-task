import { NextPage } from 'next'

export const Skeleton: NextPage = () => {
	return (
		<div>
			<div className='mb-6 animate-pulse'>
				<div className='h-6 bg-gray-500 rounded w-1/4'></div>
			</div>
			<div className='space-y-4'>
				<div className='flex items-center space-x-4 animate-pulse'>
					<div className='h-10 bg-gray-500 rounded w-10'></div>
					<div className='h-4 bg-gray-500 rounded w-1/2'></div>
				</div>
				<div className='bg-card-background p-4 rounded-md shadow-inner text-white space-y-2 animate-pulse'>
					<div className='h-6 bg-gray-500 rounded mb-2'></div>
					<div className='h-6 bg-gray-500 rounded mb-2'></div>
					<div className='h-6 bg-gray-500 rounded'></div>
				</div>
			</div>
		</div>
	)
}
