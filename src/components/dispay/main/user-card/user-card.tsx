import { useSavedUser } from '@/hooks/useSavedUser'
import { UserResult } from '@/types/user.types'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Dialog } from '../dialog/dialog'
import styles from './user-card.module.scss'

interface IProps {
	user: UserResult
}
export const UserCard: NextPage<IProps> = ({ user }) => {
	const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
	const { handleSaveUser, savedUsers, handleRemoveUser } = useSavedUser(user)
	const [isSaved, setIsSaved] = useState<boolean>(false)

	useEffect(() => {
		const isUserSaved = savedUsers.find(el => el.id.value == user.id.value)
		setIsSaved(!!isUserSaved)
	}, [savedUsers])

	useEffect(() => {
		const isUserSaved = savedUsers.find(el => el.id.value == user.id.value)
		setIsSaved(!!isUserSaved)
	}, [])

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<img
					className={styles.img}
					src={user.picture.large}
					alt={user.name.first}
				/>
				<h2 className={styles.username}>
					{user.name.first} {user.name.last}
				</h2>
				<p className={styles.gender}>{user.gender}</p>
				<p className={styles.location}>
					{user.location.city}, {user.location.country}
				</p>
				<p className={styles.email}>{user.email}</p>
				<div className={styles.buttons}>
					{isSaved ? (
						<button
							onClick={() => handleRemoveUser(user.id.value)}
							className={styles.save}
						>
							Remove
						</button>
					) : (
						<button onClick={handleSaveUser} className={styles.save}>
							Save
						</button>
					)}
					<button
						onClick={() => setIsDialogOpen(true)}
						className={styles.weather}
					>
						Weather
					</button>
				</div>
			</div>
			<Dialog
				isOpen={isDialogOpen}
				onClose={() => setIsDialogOpen(false)}
				title={`${user.location.city}, ${user.location.country}`}
				params={user.location.coordinates}
			/>
		</div>
	)
}
