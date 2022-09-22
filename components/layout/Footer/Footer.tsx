import Link from 'next/link';
import React from 'react';

function Footer() {
	return (
		<footer className='pl-[5vw] pr-[5vw] pt-5 pb-4 bg-blue-200'>
			<div className='flex flex-row flex-wrap gap-5 justify-between'>
				<span>&copy; {new Date().getFullYear()} All Rights Reserved</span>
				<Link href='terms'>Terms and Conditions</Link>
			</div>
		</footer>
	);
}

export default Footer;
