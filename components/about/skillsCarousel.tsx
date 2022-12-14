import AboutSkills from './aboutJSON/aboutSkills.json'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const myLoader = ({ src, width, quality, ext }) => {
  return `https://personallyrobphotobucket.s3.amazonaws.com/${src}`
}

const SkillsCarousel = () => {
    return(
        <Carousel variant="dark">
          {AboutSkills.map(({modalTitle, modalPicture, modalContent}) => {
            return (
              <Carousel.Item interval={3000} >
                <h1>{modalTitle}</h1>
                <Image
                  className={styles.skillscarouselimg}
                  loader={myLoader}
                  src={modalPicture}
                  alt="Skills picture was here"
                  width={175}
                  height={125}
                  />
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
    )
}

export default SkillsCarousel