import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import icon_complete from './../../assets/images/icon_complete.svg'
import icon_price from './../../assets/images/icon_price.svg'
import icon_24hrs from './../../assets/images/icon_24hrs.svg'
import icon_professional from './../../assets/images/icon_professional.svg'
import './../../index.css'

function WhyUs() {
  return (
    <div className="why text-start" id="whyus">
        <Container>
            <Row className="text-start">
                <h2 className="fw-bold">Why Us ?</h2>
                <p style={{ marginTop: "16px" }}>Mengapa harus pilih Binar Car Rental</p>
            </Row>
            <Row style={{ marginTop: "40px" }}>
                <Col lg={3}>
                    <div className="card-why">
                        <Image src={icon_complete} />
                        <h2 style={{ fontSize: "16px", marginTop: "16px" }}>Mobil Lengkap</h2>
                        <p style={{lineHeight: "20px"}}>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className="card-why">
                        <Image src={icon_24hrs} />
                        <h2 style={{ fontSize: "16px", marginTop: "16px" }}>Harga Murah</h2>
                        <p style={{lineHeight: "20px"}}>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className="card-why">
                        <Image src={icon_price} />
                        <h2 style={{ fontSize: "16px", marginTop: "16px" }}>Layanan 24 Jam</h2>
                        <p style={{lineHeight: "20px"}}>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className="card-why">
                        <Image src={icon_professional} />
                        <h2 style={{ fontSize: "16px", marginTop: "16px" }}>Sopir Profesional</h2>
                        <p style={{lineHeight: "20px"}}>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default WhyUs
