import React from 'react';
import { Badge } from './ui/badge';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const PostData = [
	{
		id: 1,
		title: 'Travel',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptate in autem assumenda',
		Color: 'bg-yellow-300',
		date: '11-06-2025',
		author: 'John Doe',
		img: '/blog_images/image1.jpeg',
	},
	{
		id: 2,
		title: 'Culture',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptate in autem assumenda',
		Color: 'bg-red-300',
		date: '11-06-2025',
		author: 'John Doe',
		img: '/blog_images/image1.jpeg',
	},
	{
		id: 3,
		title: 'Travel',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptate in autem assumenda',
		Color: 'bg-blue-300',
		date: '11-06-2025',
		author: 'John Doe',
		img: '/blog_images/image1.jpeg',
	},
	{
		id: 4,
		title: 'Travel',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptate in autem assumenda',
		Color: 'bg-green-300',
		date: '11-06-2025',
		author: 'John Doe',
		img: '/blog_images/image1.jpeg',
	},
];

const CategoryData = [
	{
		id: 1,
		Color: 'bg-yellow-200',
		title: 'Travel',
	},
	{
		id: 2,
		Color: 'bg-gray-200',
		title: 'Talent',
	},
	{
		id: 3,
		Color: 'bg-pink-200',
		title: 'Fashion',
	},
	{
		id: 4,
		Color: 'bg-red-200',
		title: 'Tradition',
	},
	{
		id: 5,
		Color: 'bg-blue-200',
		title: 'Coding',
	},
	{
		id: 6,
		Color: 'bg-green-300',
		title: 'Holidays',
	},
];
const Sidebar = () => {
	return (
		<div className=' p-2 mt-12 w-[30%]'>
			<div className=''>
				<h2 className='text-gray-400'>Whats hot</h2>
				<h1 className='text-2xl font-medium mb-5'>Most Popular</h1>
				<div className='space-y-4'>
					{PostData.map(({ id, title, description, Color, date, author }) => (
						<div
							key={id}
							className='mb-2'>
							<Badge
								variant='secondary'
								className={`${Color} mb-2 `}>
								{title}
							</Badge>
							<p className='text-[12px]'>{description}</p>
							<span className='text-[12px]'>
								{author} : {date}
							</span>
						</div>
					))}
				</div>
			</div>

			<div className='mt-10'>
				<h2 className='text-gray-400'>Discover by topic</h2>
				<h1 className='text-2xl font-medium mb-5'>Categories</h1>
				<div className='flex flex-wrap gap-4'>
					{CategoryData.map(({ id, title, Color }) => (
						<Link
							href={'/'}
							key={id}
							className={`${Color} p-2 px-4 rounded-lg dark:text-black`}>
							{title}
						</Link>
					))}
				</div>
			</div>

			<div className='mt-10'>
				<h2 className='text-gray-400'>Chosen by the editor</h2>
				<h1 className='text-2xl font-medium mb-5'>Editors Pick</h1>
				<div>
					{PostData.map(
						({ id, title, description, Color, date, author, img }) => (
							<div key={id} className='flex gap-2 mb-5'>
								<Avatar className='w-12 h-12'>
									<AvatarImage src={img} className='w-12 h-12 object-cover'/>
									<AvatarFallback>{title}</AvatarFallback>
								</Avatar>
								<div className='flex flex-col'>
									<Badge
										variant='secondary'
										className={`${Color} mb-2 text-[10px]`} >
										{title}
									</Badge>
									<p className='text-[11px]'>{description}</p>
									<span className='text-[11px]'>
										{author} : {date}
									</span>
								</div>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
