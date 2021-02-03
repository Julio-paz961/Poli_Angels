import Head from 'next/head';
import Menu from '../components/Menu/_Menu';
import Hero from '../components/Hero/_Hero';
import {Header} from '../styles/style';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Poli Angels</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Header>
          <Menu/>
          <Hero/>
        </Header>
        <main>
        </main>
        <footer>
        </footer>
      </body>
    </div>
  )
}
