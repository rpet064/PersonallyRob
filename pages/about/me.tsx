import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";
import Image from "next/image"
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ExperienceCarousel from "./aboutCarousel/experienceCarousel"
import SkillsCarousel from "./aboutCarousel/skillsCarousel"
import HobbiesCarousel from "./aboutCarousel/hobbiesCarousel"
import EducationCarousel from "./aboutCarousel/educationCarousel"


const Header = dynamic(() => import("../../components/header"), {
  suspense: true,
})

const Navbar = dynamic(() => import("../../components/navbar"), {
  suspense: true,
})

const Footer = dynamic(() => import("../../components/footer"), {
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
         <Header />
          <Navbar />
            <h1 className="large-header">Robert Pether</h1>
            <h1 id="about-header" className="medium-header">About</h1>
            {/* <div className="image-label-container">
              <div>
                <p className="image-label-left">Education</p>
                <div>
              </div>
                <p className="image-label-right">Previous Experience</p>
              </div>
            </div> */}
              <div className="image-container">
                <div className="row-1">
                    <Image
                      className={elementClass0}
                      onMouseEnter={() => setElementClass0("focus-image-div")}
                      onMouseLeave={() => setElementClass0("image-div")} 
                      onClick={() => handleModalRender("experience")} 
                      loader={myLoader}
                      src="4.jpg"
                      alt="Picture of the author"
                      width={175}
                      height={125}
                      />
                      <Image
                      className={elementClass1}
                      onMouseEnter={() => setElementClass1("focus-image-div")} 
                      onMouseLeave={() => setElementClass1("image-div")} 
                      onClick={() => handleModalRender("education")} 
                      loader={myLoader}
                      src="1.jpg"
                      alt="Picture of the author"
                      width={175}
                      height={125}
                      />
                  </div>
                  <div className="row-2">
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
              {/* <div className="image-label-container">
                <p className="image-label-left">Skills</p><p className="image-label-right">Hobbies & Interests</p>
              </div> */}
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
          <div className="me-btn-container">
            <button className="portfolio-btn" title="Portfolio">
                <Link id="about-link" href="/about/portfolio">Portfolio</Link>
            </button>
        </div>
        <Footer />
      </div>
    )
  }
