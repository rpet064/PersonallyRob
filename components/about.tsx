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
        <div className="row-1">
         <Image
            loader={myLoader}
            src="RP1.jpg"
            alt="Picture of the author"
            width={125}
            height={150}
            />
            <Image
            loader={myLoader}
            src="RP2.jpg"
            alt="Picture of the author"
            width={125}
            height={150}
            />
            </div>
            <div className="row-2">
              <Image
              loader={myLoader}
              src="RP3.jpg"
              alt="Picture of the author"
              width={125}
              height={150}
              />
              <Image
              loader={myLoader}
              src="RP4.jpg"
              alt="Picture of the author"
              width={125}
              height={150}
              />
          </div>
      </div>
    </div>
    )
  }