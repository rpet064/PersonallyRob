import Link from "next/link"
import dynamic from "next/dynamic"
import {useState } from "react"
import Image from "next/image"
import portfolioInfo from "./portfolioInfo.json"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Carousel from "react-bootstrap/Carousel"
import styles from '../../styles/Home.module.css'

const Navbar = dynamic(() => import("../../components/landingPage/navbar"), {
  suspense: true,
})

const Footer = dynamic(() => import("../../components/landingPage/footer"), {
  suspense: true,
})

const myLoader = ({ src }) => {
  return `https://personallyrobphotobucket.s3.amazonaws.com/projects/${src}`
}

const Portfolio = () => {

  const [showModal, setShowModal] = useState(false)
  const [showPersonalProjects, setShowPersonalProjects] = useState(true)

  const handleCollapsibleSections = (sectionType) => {
    if (sectionType == "professional"){
      showModal? setShowModal(false): setShowModal(true)
    } else if (sectionType == "personal"){
      showPersonalProjects? setShowPersonalProjects(false): setShowPersonalProjects(true)
    }
  }

  return (
    <div className={styles.portfolio} id="portfolio">
      <Navbar />
      <h1 className={styles.largeheader}>Portfolio</h1>
      
      <h1 id="about-header" className={styles.mediumheader} 
      onClick={() => handleCollapsibleSections("professional")}>Professional Projects
      </h1>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
            <Modal.Body>
            <h2>Coming Soon</h2>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
      
      <h1 id="about-header" className={styles.mediumheader}
      onClick={() => handleCollapsibleSections("personal")}>Personal Projects
      </h1>
      
      {showPersonalProjects && (<div className={styles.carouselcontainer}>
        <Carousel>
          {portfolioInfo.map((info, index) => {
            return (
              <Carousel.Item interval={3000} key={index} >
                <div>
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
            )
          })}
        </Carousel>
      </div>
      )}
      <div className={styles.portfoliobuttoncontainer}>
        <button title="About">
          <Link id="about-link" href="/about/me">About</Link>
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default Portfolio