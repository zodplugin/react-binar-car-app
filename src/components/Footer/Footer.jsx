import React from 'react'
import { Row,Container, Col, Image, Stack } from 'react-bootstrap'

function Footer() {
  return (
    <div>
      <Container className='my-5 py-5'>
        <Row>
            <Col md={3} className="mx-auto">
                <p class="fw-light">
                    Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
                </p>
                <p className="fw-light">
                    binarcarrental@gmail.com
                </p>
                <p className="fw-light">081-233-334-808</p>
            </Col>
            <Col md={3} className="mx-auto">
                <p>Our services</p>
                <p>Why Us</p>
                <p>Testimonial</p>
                <p>FAQ</p>
            </Col>
            <Col md={3} className="mx-auto">
                    <p className="fw-light">Connect With Us</p>
                    <p>
                        <Image className="mx-1" src="images/icon_facebook.svg" alt=""/>
                        <Image className="mx-1" src="images/icon_instagram.svg" alt=""/>
                        <Image className="mx-1" src="images/icon_twitter.svg" alt=""/>
                        <Image className="mx-1" src="images/icon_mail.svg" alt=""/>
                        <Image className="mx-1" src="images/icon_twitch.svg" alt=""/>
                    </p>
            </Col>
            <Col md={3} className="mx-auto">
                    <p>Copyright Binar 2022</p>
                    <Image src="images/logo.png" alt="" width="100px"/>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
