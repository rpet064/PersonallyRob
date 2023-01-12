import AboutEducation from './aboutJSON/aboutEducation.json'
import Carousel from 'react-bootstrap/Carousel'

const EducationCarousel = () => {
    return(
        <Carousel variant="dark">
          {AboutEducation.map(({modalTitle, modalSubtitle, modalDate, modalContent}, key) => {
            return (
              <Carousel.Item key={index} interval={3000} >
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

export default educationCarousel