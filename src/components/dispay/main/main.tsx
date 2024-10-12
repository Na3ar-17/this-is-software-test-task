'use client'
import { useUser } from '@/api/hooks/useUser'
import { NextPage } from 'next'
import { useState } from 'react'
import { UserCard } from './user-card/user-card'

export const Main: NextPage = () => {
	const [results, setResults] = useState<number>(8)
	const { useGetMany } = useUser()
	const { data, error, isLoading, refetch } = useGetMany(results)

	return (
		<main className='flex flex-col items-center'>
			{error ? (
				<p className='rounded-md mt-4 px-4 py-2 text-lg text-error bg-card-background/80 w-fit block mx-auto'>
					{error.message}
				</p>
			) : (
				<div className='w-[82%] grid grid-cols-4 mt-5 gap-3'>
					{data?.results.map((el, i) => (
						<UserCard user={el} key={i} />
					))}
				</div>
			)}
			{!error && !isLoading && (
				<footer className='flex justify-center mt-5 mb-10'>
					<button
						onClick={() => {
							refetch()
							setResults(prev => prev + 4)
						}}
						className='bg-primary border-2 transform active:translate-y-[1px] border-solid hover:text-primary border-primary hover:bg-[transparent] text-white font-bold py-2 px-4 rounded-md transition-all duration-300'
					>
						Load more
					</button>
				</footer>
			)}
		</main>
	)
}
