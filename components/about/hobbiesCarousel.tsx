import AboutHobbies from './aboutJSON/aboutHobbies.json'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const myLoader = ({ src, width, quality, ext }) => {
  return `https://personallyrobphotobucket.s3.amazonaws.com/${src}`
}

export default function HobbiesCarousel(){
    return(
        <Carousel variant="dark">
          {AboutHobbies.map(({modalTitle, modalPicture, modalContent}) => {
            return (
              <Carousel.Item interval={3000} >
                <h1>{modalTitle}</h1>
                <Image
                  className={styles.skillscarouselimg}
                  loader={myLoader}
                  src={modalPicture}
                  alt="Hobby picture was here"
                  width={175}
                  height={125}
                  />
                <p>{modalContent}</p>
              </Carousel.Item>
          )})}
      </Carousel>
    )
}