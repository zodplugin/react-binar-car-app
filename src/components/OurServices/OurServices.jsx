import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Service from './../../assets/images/img_service.png'
import Check from './../../assets/images/Group_53.svg'

const OurServices = () => {
  return (
    <div className='content' id="ourservice">
        <Container>
            <Row className="text-start">
                <Col lg='6'>
                    <Image src={Service} height={'428px'}/>
                </Col>
                <Col lg='6' style={{paddingTop:'15px'}}>
                    <h2 className="fw-bold fs-4" style={{paddingRight: "220px"}}>Best Car Rental for any kind of trip in Depok!</h2>
                    <p style={{fontSize: "14px",paddingRight: "30px"}}>Sewa mobil di Depok bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                    <div className='list-check'>
                        <p><Image src={Check} style={{marginRight: "16px"}}/> Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                    </div>
                    <div className='list-check'>
                        <p><Image src={Check} style={{marginRight: "16px"}}/> Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                    </div>
                    <div className='list-check'>
                        <p><Image src={Check} style={{marginRight: "16px"}}/> Sewa Mobil Jangka Panjang Bulanan</p>
                    </div>
                    <div className='list-check'>
                        <p><Image src={Check} style={{marginRight: "16px"}}/> Gratis Antar - Jemput Mobil di Bandara</p>
                    </div>
                    <div className='list-check'>
                        <p><Image src={Check} style={{marginRight: "16px"}}/> Layanan Airport Transfer / Drop In Out</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default OurServices
