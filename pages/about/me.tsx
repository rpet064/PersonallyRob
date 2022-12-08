import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Suspense, useState } from 'react';
import Image from 'next/image'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import aboutExperience from './aboutExperience.json'
import aboutEducation from './aboutEducation.json'
import aboutSkills from './aboutSkills.json'
import aboutHobbies from './aboutHobbies.json'


const Header = dynamic(() => import('../../components/header'), {
  suspense: true,
})

const Navbar = dynamic(() => import('../../components/navbar'), {
  suspense: true,
})

const Footer = dynamic(() => import('../../components/footer'), {
  suspense: true,
})

const myLoader = ({ src, width, quality, ext }) => {
  return `https://personallyrobphotobucket.s3.amazonaws.com/${src}`
}

export default function Me() {
  // about section hooks render modal
  const [showModal, setShowModal] = useState(false);
  // about section render info dynamically
  const [modalData, setModalData] = useState(aboutExperience);
  // dynamically change styling on mouseover
  const [elementClass0, setElementClass0] = useState("image-div");
  const [elementClass1, setElementClass1] = useState("image-div");
  const [elementClass2, setElementClass2] = useState("image-div");
  const [elementClass3, setElementClass3] = useState("image-div");

  function handleModalRender(modalType){
    // get array position from onMouseEnter
    // extract data from relevant JSON and position in JSON file
    setModalData(modalType);
    setShowModal(true);
    console.log(modalType);
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
                      onClick={() => handleModalRender("aboutExperience")} 
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
                        onClick={() => handleModalRender("aboutEducation")} 
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
                        onClick={() => handleModalRender("aboutSkills")} 
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
                        onClick={() => handleModalRender("aboutInterests")} 
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
              <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Carousel>
                      {aboutExperience.map(({modalTitle, modalSubtitle, modalDate, modalContent}) => {
                        return (
                                <Carousel.Item interval={3000} >
                                  <h1>{modalTitle}</h1>
                                  <h4>{modalSubtitle}</h4>
                                  <h6>{modalDate}</h6>
                                  <ul>
                                    {modalContent.map((item, index) => 
                                    (
                                      <li key={index}>
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </Carousel.Item>
                      )})}
                    </Carousel>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                     Close
                  </Button>
                </Modal.Body>
              </Modal>
          </div>
          <div className='me-btn-container'>
            <button title="Portfolio">
                <Link id='about-link' href="/about/portfolio">Portfolio</Link>
            </button>
        </div>
        <Footer />
      </div>
    )
  }
