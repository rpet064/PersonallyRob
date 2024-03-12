import AboutSkills from './aboutJSON/aboutSkills.json';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import aboutStyles from '../../styles/About.module.css';
import { imageLoader } from "../../utility/imageLoader";

const SkillsCarousel = () => {
    return(
        <Carousel variant="dark">
          {AboutSkills.map(({modalTitle, modalImage, modalContent}) => {
            return (
              <Carousel.Item interval={3000} >
                <h1>{modalTitle}</h1>
                <Image
                  className={aboutStyles.skillsCarouselImg}
                  loader={imageLoader}
                  src={modalImage}
                  alt="Skills picture was here"
                  width={250}
                  height={200}
                  />
                <div>
                  {modalContent.map((item, index) => 
                  (
                    <p key={index}>
                      {item}
                    </p>
                  ))}
                </div>
              </Carousel.Item>
        )})}
      </Carousel>
    )
}

export default SkillsCarousel;