import Head from 'next/head'
import Home from '../components/home/Home'

export default function home() {
  return (
    <>
      <Head>
        <title>drew.thurman.codes</title>
        <meta name='description' content='Welcome! Thanks for visiting =]' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Home />
    </>
  )
}
