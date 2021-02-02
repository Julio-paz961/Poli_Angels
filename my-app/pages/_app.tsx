import type {AppProps} from 'next/app'
import '../styles/flexboxgrid.css'
import '../styles/globals.css';


function MyApp({ Component, pageProps }:AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
