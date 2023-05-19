import React from 'react'
import { Card, CardImg, Col, Container, Row, Button } from 'react-bootstrap'
import cars from './../../assets/images/cars.png'

function Car(props) {
    console.log(props.data[0].id)
  return (
    <>
        <div className='cars'>
            <Container>
                <Row className="justify-content-center text-start">
                    <Col lg={11}>
                        <Row id="cars-container">
                            { 
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

export default Car
