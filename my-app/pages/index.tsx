import Head from 'next/head';
import Menu from '../components/Menu/_Menu';
import Hero from '../components/Hero/_Hero';
import SectionOne from '../components/Section-one/_Section-one'
import {Background} from '../styles/Index-style'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Poli Angels</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Background> 
          <Menu/>
          <Hero/>
        </Background>
        <main>
          <SectionOne/>
        </main>
        <footer>
        </footer>
      </body>
    </div>
  )
}
