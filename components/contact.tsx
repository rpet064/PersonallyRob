import Link from "next/link";
import { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
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
    const [showModal, setShowModal] = useState(false);
    return (
    <div>
        <div>
            <h1 title="About" className="medium-header">Junior React Developer</h1>
            <button title="About">
                <Link id="about-link" href="/about/me#about">About</Link>
            </button>
        </div>
        <div className="Portfolio-container">
            <button className="portfolio-btn" title="Portfolio">
                <Link id="about-link" href="/about/portfolio#portfolio">Portfolio</Link>
            </button>
        </div>
        <div className="icon-container">
            <a title="Github" href="https://github.com/rpet064"><FontAwesomeIcon icon={faGithub} /></a>
            <a title="Linkedin" href="https://www.linkedin.com/in/robert-pether-ba9968113"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a title="Email" href="mailto:rpether@hotmail.co.nz"><FontAwesomeIcon icon={faEnvelope} /></a>
            <a title="youtube" href="https://www.youtube.com/@rpet064/featured"><FontAwesomeIcon icon={faYoutube} /></a>
            <a title="ChineseNow" onClick={() => setShowModal(true)} className="chinese-now">CN</a>
        </div>
        {/* Coming soon modal */}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            </Modal.Header>
              <Modal.Body>
                <h2>ChineseNow Coming Soon</h2>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                  Close
                </Button>
              </Modal.Footer>
          </Modal>
    </div>
    )
}