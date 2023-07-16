import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import styles from '../styles/Home.module.css'

// dynamically render components on landing page
const Header = dynamic(() => import('../components/landingPageComponents/header'), {
  suspense: true,
})

const Navbar = dynamic(() => import('../components/landingPageComponents/navbar'), {
  suspense: true,
})

const About = dynamic(() => import('../components/landingPageComponents/about'), {
  suspense: true,
})

const Contact = dynamic(() => import('../components/landingPageComponents/contact'), {
  suspense: true,
})

const Footer = dynamic(() => import('../components/landingPageComponents/footer'), {
  suspense: true,
})


export default function Home() {
  return (
    <div id="main" className={styles.maincontainer}>
    <Header/>
    <Suspense fallback={`Loading...`}>
      <Navbar />
      <About />
      <Contact />
      <Footer />
    </Suspense>
  </div>
  )
}
