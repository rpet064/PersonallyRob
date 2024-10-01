import Link from "next/link";
import styles from '../../styles/Home.module.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
    faEnvelope
  } from "@fortawesome/free-solid-svg-icons";
  import { library } from "@fortawesome/fontawesome-svg-core";
  library.add(faYoutube, faGithub,faLinkedin, faEnvelope);
config.autoAddCss = false;

export default function Contact() {
    return (
    <div>
        <div>
            <h1 title="About" className={styles.mediumHeader}>Full-Stack React Developer</h1>
            <button title="About">
                <Link id="about-link" href="/about/me#about">About</Link>
            </button>
        </div>
        <div className={styles.portfoliocontainer}>
            <button className={styles.portfoliobtn} title="Portfolio">
                <Link id="about-link" href="/about/portfolio#portfolio">Portfolio</Link>
            </button>
        </div>
        <div className={styles.iconcontainer}>
            <a title="Github" href="https://github.com/rpet064"><FontAwesomeIcon icon={faGithub} /></a>
            <a title="Linkedin" href="https://www.linkedin.com/in/robert-pether-ba9968113"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a title="Email" href="mailto:rpether@hotmail.co.nz"><FontAwesomeIcon icon={faEnvelope} /></a>
        </div>
    </div>
    )
}