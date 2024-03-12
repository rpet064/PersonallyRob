import AboutHobbies from './aboutJSON/aboutHobbies.json';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import aboutStyles from '../../styles/About.module.css';
import { imageLoader } from "../../utility/imageLoader";

const HobbiesCarousel = () => {
    return(
        <Carousel variant="dark">
          {AboutHobbies.map(({modalTitle, modalImage, modalContent}) => {
            return (
              <Carousel.Item interval={3000} >
                <h1>{modalTitle}</h1>
                <Image
                  className={aboutStyles.skillsCarouselImg}
                  loader={imageLoader}
                  src={modalImage}
                  alt="Hobby picture was here"
                  width={250}
                  height={200}
                  />
                <p>{modalContent}</p>
              </Carousel.Item>
          )})}
      </Carousel>
    )
}

export default HobbiesCarousel;