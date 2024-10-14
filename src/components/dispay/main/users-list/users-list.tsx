import { NextPage } from 'next'
import { PropsWithChildren } from 'react'
import styles from './users-list.module.scss'

interface IProps extends PropsWithChildren {}

export const UsersList: NextPage<IProps> = ({ children }) => {
	return <div className={styles.users}>{children}</div>
}
