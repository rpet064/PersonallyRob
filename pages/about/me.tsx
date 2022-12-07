import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Suspense, useState } from 'react';
import Image from 'next/image'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
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
  const [modalTitle, setModalTitle] = useState("");
  const [modalData, setModalData] = useState({});
  // dynamically change styling on mouseover
  const [elementClass0, setElementClass0] = useState("image-div");
  const [elementClass1, setElementClass1] = useState("image-div");
  const [elementClass2, setElementClass2] = useState("image-div");
  const [elementClass3, setElementClass3] = useState("image-div");

  function handleModalRender(arrayPosition){
    // get array position from onMouseEnter
    // extract data from relevant JSON and position in JSON file

    setShowModal(true);
    console.log(modalTitle);
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
                        onClick={() => handleModalRender("interests")} 
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
                  <Modal.Title></Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                      Close
                    </Button>
                  </Modal.Footer>
              </Modal>
          </div>
          <div className='me-btn-container'>
            <button title="Portfolio">
                <Link id='about-link' href="/about/portfolio#portfolio">Portfolio</Link>
            </button>
        </div>
        <Footer />
      </div>
    )
  }
