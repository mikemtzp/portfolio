import Head from 'next/head';
import About from '../components/About';
import Main from '../components/Main';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mike | Full-Stack Developer</title>
        <meta name='description' content='Mike Martinez portfolio' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />
      <Main />
      <About />
    </div>
  );
}
