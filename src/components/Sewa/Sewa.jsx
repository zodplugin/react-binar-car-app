import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

function Sewa() {
  return (
    <div className="sewa">
      <Container>
        <Row>
            <Col lg={12} className="text-lg-center text-center py-5">
                <h1 className="text-white fw-bold">Sewa Mobil di Depok Sekarang</h1>
                <p className="text-white pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <Button className="btn-utama mt-4">Mulai Sewa Mobil</Button>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Sewa
