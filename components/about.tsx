import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Image from 'next/image'

const myLoader = ({ src, width, quality, ext }) => {
  return `https://personallyrobphotobucket.s3.amazonaws.com/${src}`
}

export default function About(props) {
    return (
      <div className='homepage'>
        <h1 className="large-header">Robert Pether</h1>
      <div className="image-container">
        <div className="row-1">
         <Image
            loader={myLoader}
            src="RP.png"
            alt="Picture of the author"
            width={125}
            height={125}
            />
            <Image
            loader={myLoader}
            src="RP.png"
            alt="Picture of the author"
            width={125}
            height={125}
            />
            </div>
            <div className="row-2">
              <Image
              loader={myLoader}
              src="RP.png"
              alt="Picture of the author"
              width={125}
              height={125}
              />
              <Image
              loader={myLoader}
              src="RP.png"
              alt="Picture of the author"
              width={125}
              height={125}
              />
          </div>
      </div>
    </div>
    )
  }