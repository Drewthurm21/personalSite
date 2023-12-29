import '@/styles/globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ["100", "200", "400", "700", "900"],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export default function App({ Component, pageProps }) {
  return (
    <div id='root' className={`${poppins.className} font-sans`}>
      <Component {...pageProps} />
    </div>
  )
} 
