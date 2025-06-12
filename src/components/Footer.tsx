import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
	return (
		<section className='mt-12 py-4 flex items-start'>
			<div className='flex flex-col gap-3 md:w-[60%]'>
				<div className='flex gap-4 items-center'>
					<Avatar>
						<AvatarImage
							src='https://github.com/shadcn.png'
							alt='@shadcn'
							className='rounded-full w-10 h-10'
						/>
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<h1 className=''>Lamablog</h1>
				</div>
				<p className='font-[300] max-w-[80%] text-[14px]'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
					necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
					porro sequi, totam minima consequuntur, aspernatur deleniti vero
					repellendus dorales.
				</p>
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
			</div>
			<div className='flex-1 flex items-center justify-around md:max-w-[40%]'>
				<div className='flex flex-col gap-2'>
					<span className='text-[20px] font-medium'>Links</span>
					<Link
						href='/'
						className='text-gray-600'>
						Home
					</Link>
					<Link
						href='/'
						className='text-gray-600'>
						Blog
					</Link>
					<Link
						href='/'
						className='text-gray-600'>
						About
					</Link>
					<Link
						href='/'
						className='text-gray-600'>
						Contact
					</Link>
				</div>
				<div className='flex flex-col gap-2'>
					<span className='text-[20px] font-medium'>Tags</span>
					<Link
						href='/'
						className='text-gray-600'>
						Style
					</Link>
					<Link
						href='/'
						className='text-gray-600'>
						Fashion
					</Link>
					<Link
						href='/'
						className='text-gray-600'>
						Coding
					</Link>
					<Link
						href='/'
						className='text-gray-600'>
						Travel
					</Link>
				</div>
				<div className='flex flex-col gap-2'>
					<span className='text-[20px] font-medium'>Social</span>
					<Link
						href='/'
						className='text-gray-600'>
						Facebook
					</Link>
					<Link
						href='/'
						className='text-gray-600'>
						Instagram
					</Link>
					<Link
						href='/'
						className='text-gray-600'>
						Tiktok
					</Link>
					<Link
						href='/'
						className='text-gray-600'>
						Youtube
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Footer;
