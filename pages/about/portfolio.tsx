import Link from "next/link";
import dynamic from "next/dynamic";
import { Suspense, useState } from "react";
import Image from "next/image"
// to move into backend as a GET request
import portfolioInfo from "./portfolioInfo.json"
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import styles from '../../styles/Home.module.css'

interface infoSettings {
  projectName: string;
  technology: string;
  description: string;
}

const Navbar = dynamic(() => import("../../components/landingPage/navbar"), {
  suspense: true,
})

const Footer = dynamic(() => import("../../components/landingPage/footer"), {
  suspense: true,
})

const myLoader = ({ src }) => {
  return `https://personallyrobphotobucket.s3.amazonaws.com/${src}`
}

export default function Portfolio(){
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalTechnology, setModalTechnology] = useState("");
    const [modalDescription, setModalDescription] = useState("");

    function handleModal(info: infoSettings){
        setModalTitle(info.projectName);
        setModalTechnology(info.technology);
        setModalDescription(info.description);
        setShowModal(true);
    }

    return(
        <div className={styles.portfolio} id="portfolio">
            <Navbar />
            <h1 className={styles.largeheader}>Robert Pether</h1>
            <h1 id="about-header" className={styles.mediumheader}>Portfolio</h1>
            <div className={styles.carouselcontainer}>
              <Carousel>
                {portfolioInfo.map((info, index) => {
                  return (
                    <Carousel.Item interval={3000} key={index} >
                        <div onClick={() => handleModal(info)}>
                            <Image
                              className="d-block w-100"
                              loader={myLoader}
                              src={info.fileName}
                              alt="Oops! a picture of a project is missing"
                              width={200}
                              height={275}
                            />
                        </div>
                    </Carousel.Item>
                  )})}
                </Carousel>
              </div>
        <div className={styles.portfoliobuttoncontainer}>
            <button title="About">
                <Link id="about-link" href="/about/me">About</Link>
            </button>
        </div>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
              <Modal.Body>
                <h5>{modalTechnology}</h5>
                <p>{modalDescription}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                  Close
                </Button>
              </Modal.Footer>
          </Modal>
        <Footer />
    </div>
    )
}