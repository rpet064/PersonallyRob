import aboutExperience from './aboutJSON/aboutExperience.json';
import Carousel from 'react-bootstrap/Carousel';

const ExperienceCarousel = () => {
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
                  ))}
                </ul>
              </Carousel.Item>
        )})}
      </Carousel>
    )
}

export default ExperienceCarousel;