import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const DownloadPDF = dynamic(() => import('./downloadPDF'), {
  suspense: true,
})

export default function Navbar() {
    return (
      <div className="navbar">
        <div className="logo">
          <h3>RP.</h3>
        </div>
        <div className="nav-items">
          <DownloadPDF />
        </div>
      </div>
    )
  }

  // <a></a>