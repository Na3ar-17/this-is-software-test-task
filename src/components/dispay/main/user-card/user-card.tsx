import { Result } from '@/types/user.types'
import { NextPage } from 'next'

interface IProps {
	user: Result
}

export const UserCard: NextPage<IProps> = ({ user }) => {
	return (
		<div className='bg-card-background px-6 py-4 rounded-md shadow-lg text-white flex flex-col items-center w-[320px]'>
			<img
				className='rounded-full mb-4 w-32 h-32 object-cover border-2 border-primary transition-transform transform hover:scale-105'
				src={user.picture.large}
				alt={user.name.first}
			/>
			<h2 className='text-xl font-bold text-center'>
				{user.name.first} {user.name.last}
			</h2>
			<p className='text-gray-300'>{user.gender}</p>
			<p className='text-gray-400 text-center'>
				{user.location.city}, {user.location.country}
			</p>
			<p className='text-gray-400'>{user.email}</p>

			<div className='mt-4 flex gap-4'>
				<button className='bg-primary border-2 transform active:translate-y-[1px] border-solid hover:text-primary border-primary hover:bg-[transparent] text-white font-bold py-2 px-4 rounded-md transition-all duration-300'>
					Save
				</button>
				<button className='bg-secondary text-white font-bold py-2 px-4 hover:text-secondary rounded-md transform active:translate-y-[1px] transition-all border-2 border-solid border-secondary hover:bg-[transparent] duration-300'>
					Weather
				</button>
			</div>
		</div>
	)
}
