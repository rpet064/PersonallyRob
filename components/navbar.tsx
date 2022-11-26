import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Link from 'next/link';


const DownloadPDF = dynamic(() => import('./downloadPDF'), {
  suspense: true,
})

export default function Navbar() {
    return (
      <div className="navbar">
        <div title="Home" className="logo">
        <Link id='about-link' href="/"><h3>RP.</h3></Link>
        </div>
        <div className="nav-items">
          <DownloadPDF />
        </div>
      </div>
    )
  }

  // <a></a>