'use client'
import { useUser } from '@/api/hooks/useUser'
import { ErrorMessage } from '@/components/ui/error-message/error-message'
import { NextPage } from 'next'
import { useState } from 'react'
import styles from './main.module.scss'
import { Skeleton } from './user-card/skeleton'
import { UserCard } from './user-card/user-card'
import { UsersList } from './users-list/users-list'

export const Main: NextPage = () => {
	const [results, setResults] = useState(8)
	const { useGetMany } = useUser()
	const { data, error, isLoading, isFetching } = useGetMany(results)

	const handleFetchMore = () => {
		setResults(prev => prev + 4)
	}

	return (
		<main className={styles.container}>
			{error ? (
				<ErrorMessage message={error.message} />
			) : (
				<UsersList>
					{isLoading
						? Array.from({ length: 8 }).map((_, i) => <Skeleton key={i} />)
						: data?.results.map((el, i) => <UserCard user={el} key={i} />)}
				</UsersList>
			)}
			{!error && !isLoading && (
				<footer className='flex justify-center mt-5 mb-10'>
					<button
						onClick={handleFetchMore}
						className='bg-primary disabled:cursor-not-allowed disabled:opacity-85 border-2 transform active:translate-y-[1px] border-solid hover:text-primary border-primary hover:bg-[transparent] text-white font-bold py-1 px-4 rounded-md transition-all duration-300'
						disabled={isFetching}
					>
						{isFetching ? 'Loading' : 'Load more'}
					</button>
				</footer>
			)}
		</main>
	)
}
