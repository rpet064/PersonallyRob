import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Image from 'next/image'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import aboutInfo from './aboutInfo';

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
  let modalTitle='This is the experience Modal';
  let modalContent='Wow experience description, so much experience';

  function handleModalRender(arrayPosition){
    // get array position from onMouseEnter
    // save info into let variable displayed inside modal
    modalTitle = aboutInfo[arrayPosition]['modalTitle'];
    modalContent = aboutInfo[arrayPosition]['modalContent'];
    setShowModal(true);
    console.log(modalTitle);
  }

  // about section hooks render modal
  const [showModal, setShowModal] = useState(false);

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
                    onMouseEnter={() => handleModalRender(0)} 
                    >
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
                        onMouseEnter={() => handleModalRender(1)} 
                        >
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
                        onMouseEnter={() => handleModalRender(2)} 
                        >
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
                      onMouseEnter={() => handleModalRender(3)} 
                      >
                      <Image
                        loader={myLoader}
                        src="4.jpg"
                        alt="Picture of the author"
                        width={175}
                        height={125}
                        />
                    </div>
                  </div>
          </div>
          <div id="Portfolio">
            <h1 className="medium-header">Portfolio</h1>
            <div className="image-container">
              <div className="row-1">
                <div 
                  className="image-div"
                  onMouseEnter={() => handleModalRender(4)} 
                  >
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
                   onMouseEnter={() => handleModalRender(5)} 
                   >
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
                      onMouseEnter={() => handleModalRender(6)} 
                      >
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
                    onMouseEnter={() => handleModalRender(7)} 
                    >
                      <Image
                      loader={myLoader}
                      src="4.jpg"
                      alt="Picture of the author"
                      width={175}
                      height={125}
                      />
                  </div>
                </div>
              </div>
              <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                  <Modal.Title>{modalTitle}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>{modalContent}</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                      Close
                    </Button>
                  </Modal.Footer>
              </Modal>
          </div>
        <Footer />
      </div>
    )
  }
