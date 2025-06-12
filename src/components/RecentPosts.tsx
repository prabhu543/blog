import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';

const posts = [
	{
		id: 1,
		title: 'Lorem epsum',
		img: '/blog_images/image1.jpeg',
		page: '/',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolore libero voluptas omnis, sit debitis fugit accusantium ab pariatur ipsam.',
	},
	{
		id: 2,
		title: 'Lorem epsum',
		img: '/blog_images/image1.jpeg',
		page: '/',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolore libero voluptas omnis, sit debitis fugit accusantium ab pariatur ipsam.',
	},
	{
		id: 3,
		title: 'Lorem epsum',
		img: '/blog_images/image1.jpeg',
		page: '/',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolore libero voluptas omnis, sit debitis fugit accusantium ab pariatur ipsam.',
	},
	{
		id: 4,
		title: 'Lorem epsum',
		img: '/blog_images/image1.jpeg',
		page: '/',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolore libero voluptas omnis, sit debitis fugit accusantium ab pariatur ipsam.',
	},
	{
		id: 5,
		title: 'Lorem epsum',
		img: '/blog_images/image1.jpeg',
		page: '/',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolore libero voluptas omnis, sit debitis fugit accusantium ab pariatur ipsam.',
	},
];

const RecentPosts = () => {
	return (
		<>
			<section className='my-12 w-[65%]'>
				<h1 className='mb-5 text-2xl font-medium'>Recent Posts</h1>
				<div className=' space-y-8'>
					{posts.map(({ id, title, img, page, description }) => (
						<Link
							href={page}
							key={id}
							className='flex gap-7 items-center '>
							<div className='w-full max-w-[400px] '>
								<Image
									src={img}
									alt='Developer workspace'
									className='object-cover rounded-sm w-full h-auto max-h-[250px]'
									width={400}
									height={250}
								/>
							</div>
							<div className='flex-1 space-y-4'>
								<h2 className='mb-5 text-[20px] font-medium'>{title}</h2>
								<p>{description}</p>
								<Button variant='secondary'>Read More</Button>
							</div>
						</Link>
					))}
				</div>
				{/* pagination */}
				<section className='mt-15 flex items-center justify-between'>
					<Button variant='destructive'>Previous</Button>
					<Button variant='destructive'>Next</Button>
				</section>
			</section>
		</>
	);
};

export default RecentPosts;
