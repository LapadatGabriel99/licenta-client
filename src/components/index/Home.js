import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import '../../styles/Home.css'
import firstSlide from '../../resources/first-slide.svg';
import secondSlide from '../../resources/second-slide.svg';
import thirdSlide from '../../resources/third-slide.svg';

function Home(props) {
    return (
        <Container className="main-text-area">
            <Carousel className="main-carousel-area drop-shadow">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={firstSlide}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={secondSlide}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={thirdSlide}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default Home
