import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Suspense, useState } from 'react';
import Image from 'next/image'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import aboutInfo from './aboutInfo.json';

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
  // dynamically change styling on mouseover
  const [elementClass0, setElementClass0] = useState("image-div");
  const [elementClass1, setElementClass1] = useState("image-div");
  const [elementClass2, setElementClass2] = useState("image-div");
  const [elementClass3, setElementClass3] = useState("image-div");
  const [elementClass4, setElementClass4] = useState("image-div");
  const [elementClass5, setElementClass5] = useState("image-div");
  const [elementClass6, setElementClass6] = useState("image-div");
  const [elementClass7, setElementClass7] = useState("image-div");
  const [elementClass8, setElementClass8] = useState("image-div");
  const [elementClass9, setElementClass9] = useState("image-div");
  const [elementClass10, setElementClass10] = useState("image-div");
  const [elementClass11, setElementClass11] = useState("image-div");

    return (
      <div id="about">
         <Header />
          <Navbar />
            <h1 className="large-header">Robert Pether</h1>
            <h1 id="about-header" className="medium-header">About</h1>
              <div className="image-container">
                <div className="row-1">
                    <Image
                      className={elementClass0}
                      onMouseEnter={
                        function(event){
                          setElementClass0("focus-image-div");
                        }
                      } 
                      onMouseLeave={() => setElementClass0("image-div")} 
                      onClick={() => handleModalRender(0)} 
                      loader={myLoader}
                      src="1.jpg"
                      alt="Picture of the author"
                      width={175}
                      height={125}
                      />
                        <Image
                        className={elementClass1}
                        onMouseEnter={() => setElementClass1("focus-image-div")} 
                        onMouseLeave={() => setElementClass1("image-div")} 
                        onClick={() => handleModalRender(1)} 
                        loader={myLoader}
                        src="2.jpg"
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
                        onClick={() => handleModalRender(2)} 
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
                        onClick={() => handleModalRender(3)} 
                        loader={myLoader}
                        src="4.jpg"
                        alt="Picture of the author"
                        width={175}
                        height={125}
                        />
                  </div>
          </div>
          <div id="Portfolio">
          <h1 id="portfolio-header" className="medium-header">React Web Applications</h1>
            <div className="image-container">
              <div className="row-1">
                  <Image
                    className={elementClass4}
                    onMouseEnter={() => setElementClass4("portfolio-focus-image-div-1")} 
                    onMouseLeave={() => setElementClass4("image-div")} 
                    onClick={() => handleModalRender(4)} 
                    loader={myLoader}
                    src="5.png"
                    alt="Picture of the author"
                    width={200}
                    height={125}
                    />
                    <Image
                    className={elementClass5}
                    onMouseEnter={() => setElementClass5("portfolio-focus-image-div-1")} 
                    onMouseLeave={() => setElementClass5("image-div")} 
                    onClick={() => handleModalRender(5)} 
                    loader={myLoader}
                    src="6.png"
                    alt="Picture of the author"
                    width={200}
                    height={125}
                      />
                  </div>
                  <div className="row-2">
                      <Image
                        className={elementClass6}
                        onMouseEnter={() => setElementClass6("portfolio-focus-image-div-1")} 
                        onMouseLeave={() => setElementClass6("image-div")} 
                        onClick={() => handleModalRender(6)} 
                        loader={myLoader}
                        src="7.png"
                        alt="Picture of the author"
                        width={200}
                        height={125}
                      />
                      <Image
                        className={elementClass7}
                        onMouseEnter={() => setElementClass7("portfolio-focus-image-div-1")} 
                        onMouseLeave={() => setElementClass7("image-div")} 
                        onClick={() => handleModalRender(7)} 
                        loader={myLoader}
                        src="8.png"
                        alt="Picture of the author"
                        width={200}
                        height={125}
                      />
                </div>
                <h1 id="portfolio-header" className="medium-header">Professionally Designed Websites</h1>
                <div className="row-1">
                  <Image
                    className={elementClass8}
                    onMouseEnter={() => setElementClass8("portfolio-focus-image-div-2")} 
                    onMouseLeave={() => setElementClass8("image-div")} 
                    onClick={() => handleModalRender(8)} 
                    loader={myLoader}
                    src="9.png"
                    alt="Picture of the author"
                    width={200}
                    height={125}
                    />
                    <Image
                    className={elementClass9}
                    onMouseEnter={() => setElementClass9("portfolio-focus-image-div-2")} 
                    onMouseLeave={() => setElementClass9("image-div")} 
                    onClick={() => handleModalRender(9)} 
                    loader={myLoader}
                    src="10.png"
                    alt="Picture of the author"
                    width={200}
                    height={125}
                      />
                  </div>
                  <div className="row-2">
                      <Image
                        className={elementClass10}
                        onMouseEnter={() => setElementClass10("portfolio-focus-image-div-2")} 
                        onMouseLeave={() => setElementClass10("image-div")} 
                        onClick={() => handleModalRender(10)} 
                        loader={myLoader}
                        src="11.png"
                        alt="Picture of the author"
                        width={200}
                        height={125}
                      />
                      <Image
                        className={elementClass11}
                        onMouseEnter={() => setElementClass11("portfolio-focus-image-div-2")} 
                        onMouseLeave={() => setElementClass11("image-div")} 
                        onClick={() => handleModalRender(11)} 
                        loader={myLoader}
                        src="12.png"
                        alt="Picture of the author"
                        width={200}
                        height={125}
                      />
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
