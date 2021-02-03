import Head from 'next/head';
import Menu from '../components/Menu/_Menu';
import Hero from '../components/Hero/_Hero';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Poli Angels</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <header className="backgroundHero">
          <Menu/>
          <Hero/>
        </header>
        <main>
        </main>
        <footer>
        </footer>
      </body>
    </div>
  )
}
