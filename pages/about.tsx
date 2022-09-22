import { NextPage } from 'next';
import AppLayout from '../components/layout/AppLayout';
import MainSection from '../components/pages/About/MainSection';

const About: NextPage = () => {
	return (
		<AppLayout>
			<MainSection />
		</AppLayout>
	);
};

export default About;
