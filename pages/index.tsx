import type { NextPage } from 'next';
import AppLayout from '../components/layout/AppLayout';
import Hero from '../components/pages/Home/Hero';

const Home: NextPage = () => {
	return (
		<AppLayout>
			<Hero />
		</AppLayout>
	);
};

export default Home;
