import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// dynamically render components on landing page
const Header = dynamic(() => import('../components/landingPage/header'), {
  suspense: true,
})

const Navbar = dynamic(() => import('../components/landingPage/navbar'), {
  suspense: true,
})

const About = dynamic(() => import('../components/landingPage/about'), {
  suspense: true,
})

const Contact = dynamic(() => import('../components/landingPage/contact'), {
  suspense: true,
})

const Footer = dynamic(() => import('../components/landingPage/footer'), {
  suspense: true,
})


export default function Home() {
  return (
    <div>
    <Header />
    <Suspense fallback={`Loading...`}>
      <Navbar />
      <About />
      <Contact />
      <Footer />
    </Suspense>
  </div>
  )
}
