import { NextPage } from 'next'
import Link from 'next/link'
import styles from './navbar.module.scss'
export const Navbar: NextPage = () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.logo}>
				<Link href={'/'}>This Is Software</Link>
			</div>
			<ul className={styles.list}>
				<li className={styles.element}>
					<Link href={'/saved-users'} className={styles.link}>
						Saved users
					</Link>
				</li>
			</ul>
		</nav>
	)
}
