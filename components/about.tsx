import Image from "next/image"

const myLoader = ({ src }) => {
  return `https://personallyrobphotobucket.s3.amazonaws.com/${src}`
}

export default function About() {
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