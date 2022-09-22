import '../styles/globals.css';
import type { AppProps } from 'next/app';
import HeadElement from '../components/layout/HeadElement';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<HeadElement />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
