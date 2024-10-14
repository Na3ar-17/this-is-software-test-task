import { NextPage } from 'next'

export const Skeleton: NextPage = () => {
	return (
		<div className='animate-pulse bg-card-background px-6 py-4 rounded-md shadow-lg  flex flex-col items-center w-[320px]'>
			<div className='w-32 aspect-square bg-gray-400 rounded-md'></div>
			<div className='h-4 bg-gray-400 rounded w-1/2 mt-2'></div>
			<div className='h-4 bg-gray-400 rounded w-1/4 mt-2'></div>
			<div className='h-4 bg-gray-400 rounded w-1/3 mt-2'></div>
			<div className='h-4 bg-gray-400 rounded w-11/12 mt-2'></div>
			<div className='flex space-x-4 mt-10'>
				<div className='h-8 bg-gray-400 rounded w-24'></div>
				<div className='h-8 bg-gray-400 rounded w-24'></div>
			</div>
		</div>
	)
}
