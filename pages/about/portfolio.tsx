import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";
import Image from "next/image";
import portfolioInfo from "./portfolioInfo.json";
import Carousel from "react-bootstrap/Carousel";
import styles from '../../styles/Home.module.css';
import portfolioStyles from '../../styles/Portfolio.module.css';
import { imageLoader } from "../../utility/imageLoader";

const Navbar = dynamic(() => import("../../components/landingPageComponents/navbar"), {
  suspense: true
});

const Footer = dynamic(() => import("../../components/landingPageComponents/footer"), {
  suspense: true
});

const Portfolio = () => {

  const [showProfessionalProjects, setShowProfessionalProjects] = useState(true)
  const [showPersonalProjects, setShowPersonalProjects] = useState(true)

  const handleCollapsibleSections = (sectionType: string) => {
    if (sectionType == "professional") {
      showProfessionalProjects ? setShowProfessionalProjects(false) : setShowProfessionalProjects(true)
    } else if (sectionType == "personal") {
      showPersonalProjects ? setShowPersonalProjects(false) : setShowPersonalProjects(true)
    }
  }

  return (
    <div className={portfolioStyles.portfolio}>
      <Navbar />
      <h1 className={styles.largeHeader}>Portfolio</h1>
      <h1 className={portfolioStyles.mediumHeaderPortfolio}
        onClick={() => handleCollapsibleSections("professional")}>Professional Projects
      </h1>

      {showProfessionalProjects && (
        <div className={portfolioStyles.professionalProjectsContainer}>
          <div className={portfolioStyles.professionalProjectsContainerItems}>
            <div className={portfolioStyles.imageContainer}>
              <Image
                loader={imageLoader}
                src="projects/10.png"
                alt="Oops! a picture of a project is missing"
                width={450}
                height={375}
              />
            </div>
            <div className={portfolioStyles.imageDescriptionContainer}>
              <h1>Jiapo</h1>
              <h2>Jiapo. Taiwanese, Pork Rice</h2>
              <h4>Website for the best Hakka pork on rice in Taoyuan</h4>
              <p>Created using Tailwind, HTML5, JQuery, Github Pages</p>
              <p>Features include hero landing page, stylish and convenient navigation bar and user-friendly design</p>
            </div>
          </div>
          <div className={portfolioStyles.professionalProjectsContainerItems}>
          <div className={portfolioStyles.imageDescriptionContainer}>
              <h1>Andrew Rainham</h1>
              <h2>Personal Resume</h2>
              <h4>Website for Andrew Rainham, entrepreneur and former CEO </h4>
              <p>Created using Tailwind, HTML5, JQuery, Github Pages</p>
              <p>Dynamic personal website crafted to reflect Andrew's unique identity and professional endeavors.</p>
            </div>
            <div className={portfolioStyles.imageContainer}>
              <Image
                loader={imageLoader}
                src="projects/8.png"
                alt="Oops! a picture of a project is missing"
                width={450}
                height={375}
              />
            </div>
          </div>
          <div className={portfolioStyles.professionalProjectsContainerItems}>
          <div className={portfolioStyles.imageContainer}>
              <Image
                loader={imageLoader}
                src="projects/9.png"
                alt="Oops! a picture of a project is missing"
                width={450}
                height={375}
              />
            </div>
            <div className={portfolioStyles.imageDescriptionContainer}>
              <h1>Mike Lee</h1>
              <h2>Personal Resume</h2>
              <h4>Website for Mike Lee, architect and designer for new homes in Auckland</h4>
              <p>Created using Bootstrap, HTML5, CSS and Github Pages</p>
              <p>Showcasing education, skills and previous experience, designed with a clean and intuitive interface to engage users </p>
            </div>
          </div>
        </div>
      )}
      <h1 className={`${portfolioStyles.mediumHeaderPortfolio} ${portfolioStyles.carouselMediumHeaderPortfolio}`}
        onClick={() => handleCollapsibleSections("personal")}>Personal Projects
      </h1>
      {showPersonalProjects && (<div className={portfolioStyles.carouselContainer}>
        <Carousel>
          {portfolioInfo.map((info, index) => {
            return (
              <Carousel.Item interval={3000} key={index}>
                <div>
                  <Image
                    className="d-block w-100"
                    loader={imageLoader}
                    src={info.fileName}
                    alt="Oops! a picture of a project is missing"
                    width={200}
                    height={375}
                  />
                </div>
              </Carousel.Item>
            )
          })}
        </Carousel>
      </div>
      )}
      <div className={styles.meBtnContainer}>
        <button title="About">
          <Link id="about-link" href="/about/me">About</Link>
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default Portfolio