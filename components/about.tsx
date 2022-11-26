import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Image from 'next/image'

const myLoader = ({ src, width, quality, ext }) => {
  return `https://personallyrobphotobucket.s3.amazonaws.com/${src}`
}

export default function About(props) {
    return (
      <div className="homepage">
        <h1 className="large-header">Robert Pether</h1>
         <div className="image-container">
          <Image
              loader={myLoader}
              src="robert_pether.png"
              alt="Picture of the author"
              width={175}
              height={200}
              />
      </div>
    </div>
    )
  }