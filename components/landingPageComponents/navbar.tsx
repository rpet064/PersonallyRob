import dynamic from "next/dynamic";
import Link from "next/link";
import styles from '../../styles/Home.module.css';


const DownloadPDF = dynamic(() => import("./downloadPDF"), {
  suspense: true,
});

const Navbar = () => {
    return (
      <div className={styles.navbar}>
        <div title="Home" className={styles.logo}>
        <Link id='about-link' href="/"><h3>RP.</h3></Link>
        </div>
        <div className={styles.navitems}>
          <DownloadPDF />
        </div>
      </div>
    );
  };

export default Navbar;