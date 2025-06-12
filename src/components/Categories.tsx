
import Link from 'next/link';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const data = [
	{
		Color: 'bg-blue-200',
		img: '/categories/culture.png',
		title: 'Culture',
	},
	{
		Color: 'bg-gray-200',
		img: '/categories/culture.png',
		title: 'Culture',
	},
	{
		Color: 'bg-red-200',
		img: '/categories/culture.png',
		title: 'Culture',
	},
	{
		Color: 'bg-yellow-200',
		img: '/categories/culture.png',
		title: 'Culture',
	},
	{
		Color: 'bg-green-200',
		img: '/categories/culture.png',
		title: 'Culture',
	},
	{
		Color: 'bg-blue-800',
		img: '/categories/culture.png',
		title: 'Culture',
	},
];

const Categories = () => {
	return (
		<div className='my-10'>
			<h2 className='mb-5 text-2xl font-medium'>Popular Categories</h2>
			<div className='flex flex-wrap md:justify-between justify-center gap-4'>
				{data.map(({ img, title, Color }) => (
					<Link
						href='/'
						className={`${Color} flex gap-2 items-center capitalize p-3 px-6 justify-center rounded-sm`}
						key={Color}>
						<Avatar>
							<AvatarImage src={`${img}`} />
							<AvatarFallback>{title}</AvatarFallback>
						</Avatar>
						<h2 className='dark:text-black'>{title}</h2>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Categories;
