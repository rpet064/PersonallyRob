import Head from 'next/head'
import Link from 'next/link';
import dynamic from 'next/dynamic'
import { Suspense } from 'react'


const Navbar = dynamic(() => import('../components/navbar'), {
  suspense: true,
})

const About = dynamic(() => import('../components/about'), {
  suspense: true,
})


const Contact = dynamic(() => import('../components/contact'), {
  suspense: true,
})

const Footer = dynamic(() => import('../components/footer'), {
  suspense: true,
})


export default function Home() {
  return (
    <div>
    <Head>
      <title>Robert Pether Project Web Application</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Suspense fallback={`Loading...`}>
      <Navbar />
      <About />
      <Contact />
      <Footer />
    </Suspense>
  </div>
  )
}
