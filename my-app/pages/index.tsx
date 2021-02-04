import Head from 'next/head';
import Menu from '../components/Menu/_Menu';
import Hero from '../components/Hero/_Hero';
import SectionOne from '../components/Section-one/_Section-one'


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
          <SectionOne/>
        </main>
        <footer>
        </footer>
      </body>
    </div>
  )
}
