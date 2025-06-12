import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import './style.css';
import Categories from './Categories';
import RecentPosts from './RecentPosts';
import Sidebar from './Sidebar';

const Home = () => {
	return (
		<>
			<section className='mt-12 px-4'>
				<h1>
					<span className='text-4xl md:text-5xl lg:text-6xl font-semibold bg-blue-400 p-2 rounded-sm inline-block text-white'>
						Hey, I am a dev here!
					</span>
					<br />
					<span className='text-2xl md:text-3xl lg:text-5xl font-light mt-2 inline-block'>
						Discover my stories and creative ideas.
					</span>
				</h1>

				<section
					id='home_section'
					className='mt-12 flex items-center gap-10'>
					<div className='w-full max-w-[650px]'>
						<Image
							src='/blog_images/image1.jpeg'
							alt='Developer workspace'
							className='object-cover rounded-md w-full h-auto max-h-[400px]'
							width={650}
							height={400}
						/>
					</div>

					<div className='flex-1 space-y-4 text-center lg:text-left'>
						<h2 className='text-xl md:text-2xl font-medium'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</h2>
						<p className='text-gray-600 text-sm md:text-base leading-relaxed'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Cupiditate, quam nisi magni ea laborum inventore voluptatum
							laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
							quisquam! Harum unde sit culpa debitis.
						</p>
						<Button
							variant='outline'
							className='bg-gray-300 dark:bg-white dark:text-black border-none hover:bg-gray-400 dark:hover:bg-gray-200 transition-colors duration-200'>
							Read More
						</Button>
					</div>
				</section>
			</section>
			<section>
				<Categories />
			</section>
			<section className='flex justify-between'>
				<RecentPosts />
				<Sidebar/>
			</section>
		</>
	);
};

export default Home;
