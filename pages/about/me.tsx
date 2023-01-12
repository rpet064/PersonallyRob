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

const Navbar = dynamic(() => import("../../components/landingPage/navbar"), {
  suspense: true,
})

const Footer = dynamic(() => import("../../components/landingPage/footer"), {
  suspense: true,
})

const myLoader = ({ src }) => {
  return `https://personallyrobphotobucket.s3.amazonaws.com/${src}`
}

export default function Me() {

  // about section hooks render modal
  const [showModal, setShowModal] = useState(false);

  // about section render info dynamically
  const [experienceCarousel, setExperienceCarousel] = useState(false);
  const [educationCarousel, setEducationCarousel] = useState(false);
  const [skillsCarousel, setSkillsCarousel] = useState(false);
  const [hobbiesCarousel, setHobbiesCarousel] = useState(false);

  // dynamically change styling on mouseover
  const [elementClass0, setElementClass0] = useState("image-div");
  const [elementClass1, setElementClass1] = useState("image-div");
  const [elementClass2, setElementClass2] = useState("image-div");
  const [elementClass3, setElementClass3] = useState("image-div");

  function resetModals(){
    setExperienceCarousel(false);
    setEducationCarousel(false);
    setSkillsCarousel(false);
    setHobbiesCarousel(false);
  }

  function handleModalRender(componentType){

    // get component from modal clicked on
    // change useState to render modal
    // reset modals before trigger useState
    resetModals();
    setShowModal(true);
    if (componentType === "experience"){
      setExperienceCarousel(true);
    } else if (componentType === "education"){
      setEducationCarousel(true);
    } else if (componentType === "skills"){
      setSkillsCarousel(true);
    } else if (componentType === "hobbies"){
      setHobbiesCarousel(true);
    }
  }
    return (
      <div id="about">
          <Navbar />
            <h1 className={styles.largeheader}>Robert Pether</h1>
            <h1 id="about-header" className={styles.mediumheader}>About</h1>
            <div className={styles.imagelabelcontainertop}>
                <p className={styles.imagelabellefttop}>Education</p>
                <p className={styles.imagelabelrighttop}>Experience</p>
            </div>
              <div className={styles.imagecontainer}>
                <div className={styles.row1}>
                    <Image
                      className={elementClass0}
                      onMouseEnter={() => setElementClass0("focusimagediv")}
                      onMouseLeave={() => setElementClass0("imagediv")} 
                      onClick={() => handleModalRender("experience")} 
                      loader={myLoader}
                      src="4.jpg"
                      alt="Picture of the author"
                      width={175}
                      height={125}
                      />
                      <Image
                      className={elementClass1}
                      onMouseEnter={() => setElementClass1("focusimagediv")} 
                      onMouseLeave={() => setElementClass1("imagediv")} 
                      onClick={() => handleModalRender("education")} 
                      loader={myLoader}
                      src="1.jpg"
                      alt="Picture of the author"
                      width={175}
                      height={125}
                      />
                  </div>
                  <div className={styles.row2}>
                        <Image
                        className={elementClass2}
                        onMouseEnter={() => setElementClass2("focus-image-div")} 
                        onMouseLeave={() => setElementClass2("image-div")} 
                        onClick={() => handleModalRender("skills")} 
                        loader={myLoader}
                        src="3.jpg"
                        alt="Picture of the author"
                        width={175}
                        height={125}
                      />
                      <Image
                        className={elementClass3}
                        onMouseEnter={() => setElementClass3("focus-image-div")} 
                        onMouseLeave={() => setElementClass3("image-div")} 
                        onClick={() => handleModalRender("hobbies")} 
                        loader={myLoader}
                        src="2.jpg"
                        alt="Picture of the author"
                        width={175}
                        height={125}
                        />
                  </div>
                  <div className={styles.imagelabelcontainerbottom}>
                <p className={styles.imagelabelleftbottom}>Skills</p>
                <p className={styles.imagelabelrightbottom}>Obsessions</p>
              </div>
              <Modal id="about-modal" show={showModal} onHide={() => setShowModal(false)}>
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
