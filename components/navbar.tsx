import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const DownloadPDF = dynamic(() => import('./downloadPDF'), {
  suspense: true,
})

export default function Navbar() {
    return (
      <div className="navbar">
        <h3>Robert Pether</h3>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <DownloadPDF />
      </div>
    )
  }