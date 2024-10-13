'use client'
import { useUser } from '@/api/hooks/useUser'
import { ErrorMessage } from '@/components/ui/error-message/error-message'
import { NextPage } from 'next'
import styles from './main.module.scss'
import { UserCard } from './user-card/user-card'

export const Main: NextPage = () => {
	const { useGetMany } = useUser()
	const { data, error, isLoading } = useGetMany(8)

	return (
		<main className={styles.container}>
			{error ? (
				<ErrorMessage message={error.message} />
			) : (
				<div className={styles.users}>
					{data?.results.map((el, i) => (
						<UserCard user={el} key={i} />
					))}
				</div>
			)}
			{!error && !isLoading && (
				<footer className='flex justify-center mt-5 mb-10'>
					<button className='bg-primary border-2 transform active:translate-y-[1px] border-solid hover:text-primary border-primary hover:bg-[transparent] text-white font-bold py-1 px-4 rounded-md transition-all duration-300'>
						Load more
					</button>
				</footer>
			)}
		</main>
	)
}
