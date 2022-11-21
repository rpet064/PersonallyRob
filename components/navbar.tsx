import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const DownloadPDF = dynamic(() => import('./downloadPDF'), {
  suspense: true,
})

export default function Navbar() {
    return (
      <div className="navbar">
        <div className="logo">
          <h3>Robert Pether</h3>
        </div>
        <div className="nav-items">
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <DownloadPDF />
        </div>
      </div>
    )
  }

  // <a></a>