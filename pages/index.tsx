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
      <title>Robert Pether: React Developer Personal Website</title>
      {/* meta tags */}
      <meta name="author" content="Robert Pether" />
      <meta
        name="description"
        content="Robert Pether React Developer Personal Website" />
      <meta 
        name="keywords" content="React Next Node MongoDB Azure AWS Flask 
        CV Robert Pether Junior Front-End Developer Personal Website "/>
      <meta 
        name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* links & APIs */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet" />
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
