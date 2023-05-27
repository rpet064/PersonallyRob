import Link from "next/link";
import styles from '../../styles/Home.module.css'
import { useState } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
    faEnvelope
  } from "@fortawesome/free-solid-svg-icons";
  import { library } from "@fortawesome/fontawesome-svg-core";
  library.add(faYoutube, faGithub,faLinkedin, faEnvelope);
config.autoAddCss = false

const myLoader = ({ src }) => {
  return `https://personallyrobphotobucket.s3.amazonaws.com/${src}`
}

export default function Contact() {
    return (
    <div>
        <div>
            <h1 title="About" className={styles.mediumheader}>Full-Stack React Developer</h1>
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
            <a title="youtube" href="https://www.youtube.com/@rpet064/featured"><FontAwesomeIcon icon={faYoutube} /></a>
        </div>
    </div>
    )
}