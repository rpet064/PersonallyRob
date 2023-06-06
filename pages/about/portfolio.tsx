import Link from "next/link"
import dynamic from "next/dynamic"
import { useState } from "react"
import Image from "next/image"
import portfolioInfo from "./portfolioInfo.json"
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

  const [showProfessionalProjects, setShowProfessionalProjects] = useState(true)
  const [showPersonalProjects, setShowPersonalProjects] = useState(true)

  const handleCollapsibleSections = (sectionType) => {  
    if (sectionType == "professional") {
      showProfessionalProjects ? setShowProfessionalProjects(false) : setShowProfessionalProjects(true)
    } else if (sectionType == "personal") {
      showPersonalProjects ? setShowPersonalProjects(false) : setShowPersonalProjects(true)
    }
  }

  return (
    <div className={styles.portfolio} id="portfolio">
      <Navbar />
      <h1 className={styles.largeheader}>Portfolio</h1>

      <h1 className={styles.mediumheaderportfolio}
        onClick={() => handleCollapsibleSections("professional")}>Professional Projects
      </h1>

      {showProfessionalProjects && (
      <div className={styles.professionalProjectsContainer}>
        <div>
          <div className={styles.professionalProjectsContainerItems}>
            <Image
              className={styles.professionalProjectsImgLeft}
              loader={myLoader}
              src="10.png"
              alt="Oops! a picture of a project is missing"
              width={550}
              height={400}
            />
        </div>
        <div>
            <h1>Jiapo</h1>
            <h2>Jiapo. Taiwanese, Pork Rice</h2>
            <h4>Website for the best Hakka pork on rice in Taoyuan</h4>
            <p>Created using Tailwind, HTML5, JQuery, Github Pages</p>
            <p>Features include hero landing page, stylish and convenient navigation bar and user-friendly design</p>
        </div>
        </div>
        <div>
        <div>
            <h1>Jiapo</h1>
            <h2>Jiapo. Taiwanese, Pork Rice</h2>
            <h4>Website for the best Hakka pork on rice in Taoyuan</h4>
            <p>Created using Tailwind, HTML5, JQuery, Github Pages</p>
            <p>Features include hero landing page, stylish and convenient navigation bar and user-friendly design</p>
        </div>
        <div className={styles.professionalProjectsContainerItems}>
          <Image
            className={styles.professionalProjectsImgRight}
            loader={myLoader}
            src="11.png"
            alt="Oops! a picture of a project is missing"
            width={450}
            height={400}
          />
        </div>
        </div>
        <div>
        <div>
          <Image
              className={styles.professionalProjectsImgLeft}
              loader={myLoader}
            src="12.png"
            alt="Oops! a picture of a project is missing"
            width={500}
            height={400}
          />
        </div>
        <div>
            <h1>Jiapo</h1>
            <h2>Jiapo. Taiwanese, Pork Rice</h2>
            <h4>Website for the best Hakka pork on rice in Taoyuan</h4>
            <p>Created using Tailwind, HTML5, JQuery, Github Pages</p>
            <p>Features include hero landing page, stylish and convenient navigation bar and user-friendly design</p>
        </div>
        </div>
      </div>
      
      
      )}

      <h1 className={styles.mediumheaderportfolio}
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