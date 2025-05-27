import Head from 'next/head';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>bzy - Social Media Management</title>
        <meta name="description" content="Professional social network management for entertainment and niche video content" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}