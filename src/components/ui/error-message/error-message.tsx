import { NextPage } from 'next'

interface IProps {
	message: string
}

export const ErrorMessage: NextPage<IProps> = ({ message }) => {
	return (
		<div>
			<p className='rounded-md mt-4 px-4 py-2 text-lg text-error bg-card-background/80 w-fit block mx-auto'>
				{message}
			</p>
		</div>
	)
}
