import Image from "next/image";
import styles from '../../styles/Home.module.css';

const myLoader = ({ src }) => {
  return `https://personallyrobphotobucket.s3.amazonaws.com/${src}`;
};

export default function About() {
    return (
      <div className={styles.homepage}>
        <h1 className={styles.largeheader}>Robert Pether</h1>
         <div className={styles.imagecontainer}>
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