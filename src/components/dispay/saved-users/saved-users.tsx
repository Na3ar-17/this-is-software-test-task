'use client'
import { useSavedUser } from '@/hooks/useSavedUser'
import { NextPage } from 'next'
import { Skeleton } from '../main/user-card/skeleton'
import { UserCard } from '../main/user-card/user-card'
import { UsersList } from '../main/users-list/users-list'

export const SavedUsers: NextPage = () => {
	const { savedUsers, isLoading } = useSavedUser()

	return (
		<main className='flex justify-center items-center flex-col'>
			<div className='text-center mt-2'>
				<h1 className='text-xl font-bold'>Saved users</h1>
			</div>
			<UsersList>
				{isLoading
					? Array.from({ length: 8 }).map((_, i) => <Skeleton key={i} />)
					: savedUsers.map((el, i) => <UserCard key={i} user={el} />)}
			</UsersList>
		</main>
	)
}
