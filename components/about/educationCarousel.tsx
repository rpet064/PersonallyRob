import AboutEducation from './aboutJSON/aboutEducation.json'
import Carousel from 'react-bootstrap/Carousel'

const EducationCarousel = () => {
    return(
        <Carousel variant="dark">
          {AboutEducation.map(({modalTitle, modalSubtitle, modalDate, modalContent}) => {
            return (
              <Carousel.Item interval={3000} >
                <h1>{modalTitle}</h1>
                <h4>{modalSubtitle}</h4>
                <h6>{modalDate}</h6>
                <div>
                  {modalContent.map((item, index) => 
                  (
                    <li key={index}>
                      {item}
                    </li>
                  ))}
                </div>
              </Carousel.Item>
        )})}
      </Carousel>
    )
}

export default EducationCarousel