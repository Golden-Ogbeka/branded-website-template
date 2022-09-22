import { NextPage } from 'next';
import AppLayout from '../components/layout/AppLayout';
import MainSection from '../components/pages/Contact/MainSection';

const Contact: NextPage = () => {
	return (
		<AppLayout>
			<MainSection />
		</AppLayout>
	);
};

export default Contact;
