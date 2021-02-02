import Head from 'next/head'
import Menu from '../components/Menu/_Menu'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Poli Angels</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Menu/>
      </header>
      <main>
      </main>
      <footer>
      </footer>
    </div>
  )
}
