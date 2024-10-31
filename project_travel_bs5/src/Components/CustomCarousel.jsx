import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../assets/carousel_1.jpg';
import carousel2 from '../assets/carousel_2.jpg';
import carousel3 from '../assets/carousel_3.jpg';
import carousel4 from '../assets/carousel_4.jpg';

const CustomCarousel = () => {
  return (
    <Carousel interval={2000} fade>
      <Carousel.Item>
        <img className="d-block w-100" src={carousel1} alt="carousel_1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carousel2} alt="carousel_2" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carousel3} alt="carousel_3" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carousel4} alt="carousel_4" />
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;
