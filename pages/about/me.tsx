import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ExperienceCarousel from "../../components/about/experienceCarousel";
import SkillsCarousel from "../../components/about/skillsCarousel";
import HobbiesCarousel from "../../components/about/hobbiesCarousel";
import EducationCarousel from "../../components/about/educationCarousel";
import { imageLoader } from "../../utility/imageLoader";
import styles from '../../styles/Home.module.css';
import aboutStyles from '../../styles/About.module.css';

const Navbar = dynamic(() => import("../../components/landingPageComponents/navbar"), {
  suspense: true,
});

const Footer = dynamic(() => import("../../components/landingPageComponents/footer"), {
  suspense: true,
});

const Me = () => {
  // about section hooks render modal
  const [showModal, setShowModal] = useState(false);

  // about section render info dynamically
  const [experienceCarousel, setExperienceCarousel] = useState(false);
  const [educationCarousel, setEducationCarousel] = useState(false);
  const [skillsCarousel, setSkillsCarousel] = useState(false);
  const [hobbiesCarousel, setHobbiesCarousel] = useState(false);

  const resetModals = () => {
    setExperienceCarousel(false);
    setEducationCarousel(false);
    setSkillsCarousel(false);
    setHobbiesCarousel(false);
  };

  const handleModalRender = (componentType: string) => {

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
  };
  return (
    <div id="about" className={aboutStyles.maincontainer}>
      <Navbar />
      <h1 className={styles.largeheader}>Robert Pether</h1>
      <h1 id="about-header" className={styles.mediumheader}>Background</h1>

      {/* Top Image Labels */}
      <div className={aboutStyles.imageLabelContainerTop}>
        <p className={aboutStyles.imageLabelLeftTop}>Experience</p>
        <p className={aboutStyles.imageLabelRightTop}>Education</p>
      </div>

      {/* Images - Row 1 */}
      <div className={styles.imagecontainer}>
        <div className={styles.row1}>
          <Image
            className={aboutStyles.aboutMeImage}
            onClick={() => handleModalRender("experience")}
            loader={imageLoader}
            src="me/4.jpg"
            alt="Picture of the author"
            width={175}
            height={125}
          />

          <Image
            className={aboutStyles.aboutMeImage}
            onClick={() => handleModalRender("education")}
            loader={imageLoader}
            src="me/1.jpg"
            alt="Picture of the author"
            width={175}
            height={125}
          />
        </div>

        {/* Images - Row 2 */}
        <div className={styles.row2}>
          <Image
            className={aboutStyles.aboutMeImage}
            onClick={() => handleModalRender("skills")}
            loader={imageLoader}
            src="me/3.jpg"
            alt="Picture of the author"
            width={175}
            height={125}
          />

          <Image
            className={aboutStyles.aboutMeImage}
            onClick={() => handleModalRender("hobbies")}
            loader={imageLoader}
            src="me/2.jpg"
            alt="Picture of the author"
            width={175}
            height={125}
          />
        </div>

        {/* Bottom  Image Labels */}
        <div className={aboutStyles.imageLabelContainerBottom}>
          <p className={aboutStyles.imageLabelLeftBottom}>Skills</p>
          <p className={aboutStyles.imageLabelRightBottom}>Obsessions</p>
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
};

export default Me;