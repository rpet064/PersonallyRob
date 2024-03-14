import Image from "next/image";
import styles from '../../styles/Home.module.css';
import { imageLoader } from "../../utility/imageLoader";

export default function About() {
    return (
      <div className={styles.homepage}>
        <h1 className={styles.largeHeader}>Robert Pether</h1>
         <div className={styles.imageContainer}>
          <Image
              loader={imageLoader}
              src="robert_pether.png"
              alt="Picture of the author"
              width={175}
              height={200}
              />
          </div>
    </div>
    )
  }