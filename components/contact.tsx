import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
  return `https://personallyrobphotobucket.s3.amazonaws.com/${src}.png`
}

export default function Contact(props) {
    return (
      <div className="contact">
        <Image
            loader={myLoader}
            src="RP"
            alt="Picture of the author"
            width={500}
            height={500}
            />
      </div>
    )
  }