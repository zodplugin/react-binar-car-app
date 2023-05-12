import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../index.css'
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Mobil() {
  return (
    <div className="mobil">
        <Container fluid="xxl">
            <Row>
                <Col lg="5" xl="5" xxl="5" className="mx-lg-5 mx-md-0 text-start" style={{ paddingTop: '100px' }}>
                    <h2 className="fw-bold" style={{paddingRight: "10px"}}>Sewa & Rental Mobil Terbaik di kawasan Depok</h2>
                    <p style={{ paddingRight: "40px" }}>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam. </p>
                    <a href="/" className="btn btn-utama">Mulai Sewa Mobil</a>
                </Col>
            </Row>
        </Container>
      
    </div>
  )
}

export default Mobil
