import '../styles/globals.css';
import '@splidejs/react-splide/css';
import type { AppProps } from 'next/app';
import { Footer, Navbar } from '../components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
