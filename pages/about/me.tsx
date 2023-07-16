import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";
import Image from "next/image"
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ExperienceCarousel from "../../components/about/experienceCarousel"
import SkillsCarousel from "../../components/about/skillsCarousel"
import HobbiesCarousel from "../../components/about/hobbiesCarousel"
import EducationCarousel from "../../components/about/educationCarousel"
import styles from '../../styles/Home.module.css'

const Navbar = dynamic(() => import("../../components/landingPageComponents/navbar"), {
  suspense: true,
})

const Footer = dynamic(() => import("../../components/landingPageComponents/footer"), {
  suspense: true,
})

const myLoader = ({ src }) => {
  return `https://personallyrobphotobucket.s3.amazonaws.com/me/${src}`
}


const Me = () => {
  // about section hooks render modal
  const [showModal, setShowModal] = useState(false);

  // about section render info dynamically
  const [experienceCarousel, setExperienceCarousel] = useState(false);
  const [educationCarousel, setEducationCarousel] = useState(false);
  const [skillsCarousel, setSkillsCarousel] = useState(false);
  const [hobbiesCarousel, setHobbiesCarousel] = useState(false);

  function resetModals() {
    setExperienceCarousel(false);
    setEducationCarousel(false);
    setSkillsCarousel(false);
    setHobbiesCarousel(false);
  }

  function handleModalRender(componentType) {

    // When image is clicked on, reset all modals, then, display corresponding modal
    resetModals();
    setShowModal(true);

    // Experience Modal
    if (componentType === "experience") {
      setExperienceCarousel(true);

      // Education Modal
    } else if (componentType === "education") {
      setEducationCarousel(true);

      // Skills Modal
    } else if (componentType === "skills") {
      setSkillsCarousel(true);

      // Hobbies Modal
    } else if (componentType === "hobbies") {
      setHobbiesCarousel(true);
    }
  }
  return (
    <div id="about" className={styles.maincontainer}>
      <Navbar />
      <h1 className={styles.largeheader}>Robert Pether</h1>
      <h1 id="about-header" className={styles.mediumheader}>Background</h1>

      {/* Top Image Labels */}
      <div className={styles.imagelabelcontainertop}>
        <p className={styles.imagelabellefttop}>Experience</p>
        <p className={styles.imagelabelrighttop}>Education</p>
      </div>

      {/* Images - Row 1 */}
      <div className={styles.imagecontainer}>
        <div className={styles.row1}>
          <Image
            className={styles.aboutmeimage}
            onClick={() => handleModalRender("experience")}
            loader={myLoader}
            src="4.jpg"
            alt="Picture of the author"
            width={175}
            height={125}
          />

          <Image
            className={styles.aboutmeimage}
            onClick={() => handleModalRender("education")}
            loader={myLoader}
            src="1.jpg"
            alt="Picture of the author"
            width={175}
            height={125}
          />
        </div>

        {/* Images - Row 2 */}
        <div className={styles.row2}>
          <Image
            className={styles.aboutmeimage}
            onClick={() => handleModalRender("skills")}
            loader={myLoader}
            src="3.jpg"
            alt="Picture of the author"
            width={175}
            height={125}
          />

          <Image
            className={styles.aboutmeimage}
            onClick={() => handleModalRender("hobbies")}
            loader={myLoader}
            src="2.jpg"
            alt="Picture of the author"
            width={175}
            height={125}
          />
        </div>

        {/* Bottom  Image Labels */}
        <div className={styles.imagelabelcontainerbottom}>
          <p className={styles.imagelabelleftbottom}>Skills</p>
          <p className={styles.imagelabelrightbottom}>Obsessions</p>
        </div>

        {/* Modal containing all conditionally rendered carousels  */}
        <Modal size="xl" id="about-modal" show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            {experienceCarousel && <ExperienceCarousel />}
            {educationCarousel && <EducationCarousel />}
            {skillsCarousel && <SkillsCarousel />}
            {hobbiesCarousel && <HobbiesCarousel />}
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Body>
        </Modal>
      </div>

      <div className={styles.mebtncontainer}>
        <button className={styles.portfoliobtn} title="Portfolio">
          <Link id="about-link" href="/about/portfolio">Portfolio</Link>
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default Me