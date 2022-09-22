import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../../../public/brand/logo.png';

function Navbar() {
	return (
		<nav className='pl-[5vw] pr-[5vw] pt-5 pb-4 shadow-md'>
			<div className='flex flex-row flex-wrap items-center'>
				<div className='flex-grow'>
					<Link href='/'>
						<Image src={Logo} alt='Logo' width={50} height={50} className='cursor-pointer' />
					</Link>
				</div>
				<div className='flex flex-row items-center gap-10'>
					<Link href='/about'>About</Link>
					<Link href='/contact'>Contact</Link>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
