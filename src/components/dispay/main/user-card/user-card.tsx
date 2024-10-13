import { Result } from '@/types/user.types'
import { NextPage } from 'next'
import { useState } from 'react'
import { Dialog } from '../dialog/dialog'
import styles from './user-card.module.scss'
interface IProps {
	user: Result
}
export const UserCard: NextPage<IProps> = ({ user }) => {
	const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
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
					<button className={styles.save}>Save</button>
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
