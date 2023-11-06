import '@/styles/globals.css'
import {Montserrat} from "next/font/google" //declare font
import Head from "next/head";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

//setting up font
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})

export default function App({ Component, pageProps }) {
  return( 
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
      <NavBar />
      <Component {...pageProps} />
      <Footer  />
    </main>
  </>
 )
}
