import AboutSkills from '../aboutSkills.json'
import Carousel from 'react-bootstrap/Carousel';

export default function SkillsCarousel(){
    return(
        <Carousel variant="dark">
        {AboutSkills.map(({modalTitle, modalSubtitle, modalDate, modalContent}) => {
          return (
                  <Carousel.Item interval={3000} >
                    <h1>{modalTitle}</h1>
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