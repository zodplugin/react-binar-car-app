import React from 'react'
import OwlCarousel  from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './../../index.css'

function OwlCaraousels() {
  return (
    <div className="bagiancarousel text-start" id="testiomonial">
      <Container>
        <Row>
            <Col lg={12}>
                <h2 className="fw-bold">Testimonial</h2>
                <p classNames="mt-3">Berbagai review positif dari para pelanggan kami</p>
            </Col>
        </Row>
        <OwlCarousel className='owl-theme' loop margin={20} autoWidth center navText={["<img width='32px' src='./../../assets/images/Leftbutton.png'>", "<img  width='32px' src='./../../assets/images/Rightbutton.png'>"]} autoHeightClass responsiveClass nav>
          <div className='item'>
            <Card className='card mb-3'>

            </Card>
          </div>
        </OwlCarousel>
      </Container>

    </div>
  )
}

export default OwlCaraousels
