import dynamic from 'next/dynamic';
import { Suspense } from 'react';


const Header = dynamic(() => import('../components/header'), {
  suspense: true,
})

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
