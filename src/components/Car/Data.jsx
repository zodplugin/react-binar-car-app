import React from 'react'
import { Card, CardImg, Col, Container, Row, Button } from 'react-bootstrap'
import cars from './../../assets/images/cars.png'

function Data(props) {

    const dataFilter = (data,filter) => {
        const tanggalJemputData = new Date(data.availableAt).getTime()
        const tanggal = new Date(`${filter.tanggal} ${filter.waktuJemput}`).getTime()
        const checkWaktu = tanggalJemputData >= tanggal
        const availableAt = (filter.tipeDriver === 'true' && data.available ? true : false)
        const notAvailableAt = (filter.tipeDriver === 'false' && !data.available ? true : false)
        const penumpang = data.capacity >= this.jumlahPenumpang.value
        if (this.tipeDriver.value !== 'default' && this.tanggal.value !== '' && this.waktuJemput.value !== 'false' && this.jumlahPenumpang.value >= 0) {
            data.filter((e) => {
                return (availableAt || notAvailableAt) && checkWaktu && penumpang
            })
        } else if (this.tipeDriver.value !== 'default' && this.jumlahPenumpang.value > 0) {
            data.filter((e) => {
                return (availableAt || notAvailableAt) && penumpang
            })
            
        } else if (this.tanggal.value !== '' && this.waktuJemput.value !== 'false' && this.jumlahPenumpang.value > 0) {
            return checkWaktu && penumpang
        } else if (this.tanggal.value !== '' && this.waktuJemput.value !== 'false') {
            return checkWaktu
        } else if (this.tipeDriver.value !== 'default') {
            return (availableAt || notAvailableAt)
        } else {
            return penumpang
        }
    } 

     return (
    <>
        <div className='cars'>
            <Container>
                <Row className="justify-content-center text-start">
                    <Col lg={11}>
                        <Row id="cars-container">
                            { 
                                (filter === undefined) || (filter.tipeCar === '' && props.filter.tanggal === '' && props.filter.waktuJemput === '' && props.filter.jumlahPenumpang === '') ?
                                props.data.map((car) => {
                                        return (
                                            <Col lg={4}>
                                            <Card className="px-2 py-4">
                                                <CardImg variant="top" src={car.image}/>
                                                <Card.Body>
                                                    <Card.Title className="fs-6">{car.manufacture} {car.model}/{car.type}</Card.Title>
                                                    <Card.Title className="fs-5 fw-bold">Rp {car.rentPerDay}</Card.Title>
                                                    <Card.Text className="cars__p">
                                                    {car.description} 
                                                    </Card.Text>
                                                    <Button variant="primary">Go somewhere</Button>
                                                </Card.Body>
                                            </Card>
                                            </Col>
                                        )
                                    }) :
                                    console.log('aw')
                                    
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div> 
    </>
  )
}

export default Data
