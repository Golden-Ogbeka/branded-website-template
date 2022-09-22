import React from 'react';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navbar />
			<main className='min-h-screen'>{children}</main>
			<Footer />
		</>
	);
}

export default AppLayout;
