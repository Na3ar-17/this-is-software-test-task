import { NextPage } from 'next'

export const Navbar: NextPage = () => {
	return (
		<nav className='bg-card-background p-4 flex justify-between items-center'>
			<div className='text-white text-xl font-bold'>This Is Software</div>
		</nav>
	)
}
