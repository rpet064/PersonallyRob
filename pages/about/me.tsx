import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Image from 'next/image'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
  const [showEducation, setShowEducation] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showHobby, setShowHobby] = useState(false);
  const [showSkill, setShowSkill] = useState(false);
  // portfolio section hooks render modal
  const [showFirstProject, setShowFirstProject] = useState(false);
  const [showSecondProject, setShowSecondProject] = useState(false);
  const [showThirdProject, setShowThirdProject] = useState(false);
  const [showFourthProject, setShowFourthProject] = useState(false);
    return (
      <div id="about">
         <Header />
          <Navbar />
            <h1 className="large-header">Robert Pether</h1>
            <h1 className="medium-header">About</h1>
              <div className="image-container">
                <div className="row-1">
                  <div 
                    className="image-div"
                    onMouseEnter={() => setShowEducation(true)} >
                    <Image
                      loader={myLoader}
                      src="1.jpg"
                      alt="Picture of the author"
                      width={175}
                      height={125}
                      />
                      </div>
                      <div 
                        className="image-div"
                        onMouseEnter={() => setShowExperience(true)} >
                        <Image
                        loader={myLoader}
                        src="2.jpg"
                        alt="Picture of the author"
                        width={175}
                        height={125}
                          />
                      </div>
                    </div>
                    <div className="row-2">
                      <div 
                        className="image-div"
                        onMouseEnter={() => setShowHobby(true)} >
                        <Image
                        loader={myLoader}
                        src="3.jpg"
                        alt="Picture of the author"
                        width={175}
                        height={125}
                        />
                    </div>
                    <div 
                      className="image-div"
                      onMouseEnter={() => setShowSkill(true)} >
                        <Image
                        loader={myLoader}
                        src="4.jpg"
                        alt="Picture of the author"
                        width={175}
                        height={125}
                        />
                    </div>
                    {/* show education modal */}
                    {/* show work experience modal */}
                    <>
                      <Modal show={showExperience} onHide={() => setShowExperience(false)}>
                        <Modal.Header closeButton>
                          <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={() => setShowExperience(false)}>
                            Close
                          </Button>
                          <Button variant="primary" onClick={() => setShowExperience(false)}>
                            Save Changes
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </>
                    {/* show skills modal */}
                    {/* show hobbies modal */}
                  </div>
          </div>
          <div id="Portfolio">
            <h1 className="medium-header">Portfolio</h1>
            <div className="image-container">
              <div className="row-1">
                <div 
                  className="image-div"
                  onMouseEnter={() => setShowFirstProject(true)} >
                  <Image
                    loader={myLoader}
                    src="1.jpg"
                    alt="Picture of the author"
                    width={175}
                    height={125}
                    />
                </div>
                  <div 
                   className="image-div"
                    onMouseEnter={() => setShowSecondProject(true)} >
                    <Image
                    loader={myLoader}
                    src="2.jpg"
                    alt="Picture of the author"
                    width={175}
                    height={125}
                      />
                  </div>
                  </div>
                  <div className="row-2">
                    <div 
                      className="image-div"
                      onMouseEnter={() => setShowThirdProject(true)} >
                      <Image
                      loader={myLoader}
                      src="3.jpg"
                      alt="Picture of the author"
                      width={175}
                      height={125}
                      />
                  </div>
                  <div 
                    className="image-div"
                    onMouseEnter={() => setShowFourthProject(true)} >
                      <Image
                      loader={myLoader}
                      src="4.jpg"
                      alt="Picture of the author"
                      width={175}
                      height={125}
                      />
                  </div>
                  {/* show education modal */}
                  {/* show work experience modal */}
                  {/* show skills modal */}
                  {/* show hobbies modal */}
                </div>
              </div>
          </div>
        <Footer />
      </div>
    )
  }
