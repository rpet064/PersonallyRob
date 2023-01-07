import aboutExperience from './aboutJSON/aboutExperience.json'
import Carousel from 'react-bootstrap/Carousel';
import styles from '../../styles/Home.module.css'

export default function ExperienceCarousel(){
    return(
        <Carousel variant="dark">
          {aboutExperience.map(({modalSubtitle, modalDate, modalContent}) => {
            return (
              <Carousel.Item interval={3000} >
                <h1>Previous Experience</h1>
                <h4>{modalSubtitle}</h4>
                <h6>{modalDate}</h6>
                <ul>
                  {modalContent.map((item, index) => 
                  (
                    <li key={index}>
                      {item}
                    </li>
                  ))}å
                </ul>
              </Carousel.Item>
        )})}
      </Carousel>
    )
}