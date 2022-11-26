import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Image from 'next/image'

const Header = dynamic(() => import('../../components/header'), {
  suspense: true,
})

const Navbar = dynamic(() => import('../../components/navbar'), {
  suspense: true,
})

const Footer = dynamic(() => import('../../components/footer'), {
  suspense: true,
})

const myLoader = ({ src, width, quality, ext }) => {
  return `https://personallyrobphotobucket.s3.amazonaws.com/${src}`
}

export default function Me() {
    return (
      <div>
         <Header />
          <Navbar />
            <h1 className="large-header">About Robert Pether</h1>
            <div className="image-container">
              <div className="row-1">
                <Image
                    loader={myLoader}
                    src="1.jpg"
                    alt="Picture of the author"
                    width={175}
                    height={125}
                    />
                    <Image
                    loader={myLoader}
                    src="2.jpg"
                    alt="Picture of the author"
                    width={175}
                    height={125}
                    />
                  </div>
                  <div className="row-2">
                    <Image
                    loader={myLoader}
                    src="3.jpg"
                    alt="Picture of the author"
                    width={175}
                    height={125}
                    />
                    <Image
                    loader={myLoader}
                    src="4.jpg"
                    alt="Picture of the author"
                    width={175}
                    height={125}
                    />
                </div>
          </div>
        <Footer />
      </div>
    )
  }
