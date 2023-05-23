import React from 'react'
import OwlCarousel  from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import './../../index.css'

function OwlCaraousels() {
  return (
    <div className="bagiancarousel text-center mt-5" id="testiomonial">
      <Container>
        <Row className="mb-5">
            <Col lg={12}>
                <h2 className="fw-bold mb-4">Testimonial</h2>
                <p classNames="mt-4 mb-5">Berbagai review positif dari para pelanggan kami</p>
            </Col>
        </Row>
        <OwlCarousel className='owl-theme' loop margin={20} autoWidth center navText={["<img width='32px' src='images/Leftbutton.png'>", "<img  width='32px' src='images/Rightbutton.png'>"]} autoHeightClass responsiveClass nav>
          <div className='item'>
            <Card className='card mb-3'>
                <Row className='px-2 py-5 mx-2'>
                    <Col className="text-lg-center px-3" lg={3}>
                        <br></br>
                        <Image src='images/img_photo.png' className='rounded-circle' width={'80px'}/>
                    </Col>
                    <Col lg={9} className="text-center">
                      <Card.Body>
                        <Image src="images/Rate.png" className="w-25 mb-3 mb-lg-2 "/>
                        <p className="card-text ">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                        <p className="fw-bold ">John Dee 32, Bromo</p>
                      </Card.Body>
                    </Col>
                </Row>
            </Card>
          </div>
        </OwlCarousel>
      </Container>

    </div>
  )
}

export default OwlCaraousels
