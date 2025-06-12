'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { ModeToggle } from './ModeToggle';

const Navbar = () => {
	return (
		<div className='container flex items-center justify-between w-full p-2 mt-2 relative'>
			{/* social media section */}
			<div className='flex gap-2'>
				<Image
					src='/social_media/facebook.png'
					alt='facebook'
					width={24}
					height={24}
				/>
				<Image
					src='/social_media/instagram.png'
					alt='instagram'
					width={24}
					height={24}
				/>
				<Image
					src='/social_media/tiktok.png'
					alt='tiktok'
					width={24}
					height={24}
				/>
				<Image
					src='/social_media/youtube.png'
					alt='youtube'
					width={24}
					height={24}
				/>
			</div>

			{/* main header section */}
			<h1 className='text-[32px] font-medium'>lamablog</h1>

			<div className='flex gap-2'>
				<ModeToggle />
				{/* navbar section - hidden on small screens */}
				<nav className='hidden md:flex items-center gap-2'>
					<Button variant='secondary'>
						<Link href='/'>Home</Link>
					</Button>
					<Button variant='secondary'>
						<Link href='/contact'>Contact</Link>
					</Button>
					<Button variant='secondary'>
						<Link href='/about'>About</Link>
					</Button>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
