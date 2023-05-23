import React from 'react'
import { Card, CardImg, Col, Container, Row, Button, Image } from 'react-bootstrap'
import cars from './../../assets/images/cars.png'

function Data(props) {

    const dataFilter = (data,filter) => {
        console.log(filter)
        const tanggalJemputData = new Date(data.availableAt).getTime()
        const tanggal = new Date(`${filter.tanggal} ${filter.waktuJemput}`).getTime()
        const checkWaktu = tanggalJemputData >= tanggal
        const availableAt = (filter.tipeDriver === 'true' && data.available ? true : false)
        const notAvailableAt = (filter.tipeDriver === 'false' && !data.available ? true : false)
        const penumpang = parseInt(data.capacity) >= parseInt(filter.jumlahPenumpang)
        if (filter.tanggal !== '' &&  parseInt(filter.jumlahPenumpang) >= 0 && filter.tipeDriver !== '') {
            return (availableAt || notAvailableAt) && checkWaktu && penumpang
        } else if (filter.tipeDriver && parseInt(filter.jumlahPenumpang) >= 0) {
            return (availableAt || notAvailableAt) && penumpang   
        } else if (filter.tanggal !== ''  && parseInt(filter.jumlahPenumpang) >= 0) {
            return checkWaktu && penumpang
        } else if (filter.tipeDriver !== '') {
            return (availableAt || notAvailableAt)
        } else if (filter.tanggal !== '' ) {
            return checkWaktu
        }else if (parseInt(filter.jumlahPenumpang) > 0 ){
            return penumpang
        }else{
            return false
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
                                (props.filter === undefined) || (props.filter.tipeCar === '' && props.filter.tanggal === '' && props.filter.waktuJemput === '' && props.filter.jumlahPenumpang === '') ?
                                props.data.map((car,i) => {
                                        return (
                                            <Col lg={4} key={i}>
                                            <Card className="px-2 py-4">
                                                <CardImg variant="top" src={car.image}/>
                                                <Card.Body>
                                                    <Card.Title className="fs-6">{car.manufacture} {car.model}/{car.type}</Card.Title>
                                                    <Card.Title className="fs-5 fw-bold">Rp {car.rentPerDay}</Card.Title>
                                                    <Card.Text className="cars__p">
                                                    {car.description} 
                                                    </Card.Text>
                                                    <Row>
                                                        <Col xs={1} lg={1} >
                                                            <Image src='images/fi_users1.png' width="20px"/>
                                                        </Col>
                                                        <Col  lg={10} className='ms-lg-2'>
                                                            {car.capacity}
                                                        </Col>
                                                    </Row>
                                                    <Row className='mt-2'>
                                                        <Col md lg={1} >
                                                            <Image src='images/fi_settings.png' width="20px" />
                                                        </Col>
                                                        <Col md lg={10} className='ms-lg-2'>
                                                            {car.transmission}
                                                        </Col>
                                                    </Row>
                                                    <Row className='mt-2 mb-4'>
                                                        <Col md lg={1} >
                                                            <Image src='images/fi_calendar.png' width="20px"/>
                                                        </Col>
                                                        <Col md lg={10} className='ms-lg-2'>
                                                             Tahun {car.year}
                                                        </Col>
                                                    </Row>
                                                    <Button variant="primary">Go somewhere</Button>
                                                </Card.Body>
                                            </Card>
                                            </Col>
                                        )
                                    }) :    
                                    props.data.filter((data)=>dataFilter(data,props.filter)).map((car,i)=>{
                                        return (
                                            <Col lg={4} key={i}>
                                            <Card className="px-2 py-4">
                                                <CardImg variant="top" src={car.image}/>
                                                <Card.Body>
                                                    <Card.Title className="fs-6">{car.manufacture} {car.model}/{car.type}</Card.Title>
                                                    <Card.Title className="fs-5 fw-bold">Rp {car.rentPerDay}</Card.Title>
                                                    <Card.Text className="cars__p">
                                                    {car.description} 
                                                    </Card.Text>
                                                    <Row>
                                                        <Col xs={1} lg={1} >
                                                            <Image src='images/fi_users1.png' width="20px"/>
                                                        </Col>
                                                        <Col  lg={10} className='ms-lg-2'>
                                                            {car.capacity}
                                                        </Col>
                                                    </Row>
                                                    <Row className='mt-2'>
                                                        <Col md lg={1} >
                                                            <Image src='images/fi_settings.png' width="20px" />
                                                        </Col>
                                                        <Col md lg={10} className='ms-lg-2'>
                                                            {car.transmission}
                                                        </Col>
                                                    </Row>
                                                    <Row className='mt-2 mb-4'>
                                                        <Col md lg={1} >
                                                            <Image src='images/fi_calendar.png' width="20px"/>
                                                        </Col>
                                                        <Col md lg={10} className='ms-lg-2'>
                                                             Tahun {car.year}
                                                        </Col>
                                                    </Row>
                                                    <Button variant="primary">Go somewhere</Button>
                                                </Card.Body>
                                            </Card>
                                            </Col>
                                        )
                                    })
                                
                                    
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
