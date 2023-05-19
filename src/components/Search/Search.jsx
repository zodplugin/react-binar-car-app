import React from 'react'
import { Col, Container, Row, Form , Image, Button} from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup';
import user from '../../assets/images/fi_users.png'


function Search() {
  return (
    <>
      <div className="search">
            <Container>
                <Row>
                    <Col lg={12}>
                        <Form>
                            <Row className='search__card mx-lg-5 py-3 px-4 text-start'>
                                <Col lg={'auto'} xl={2} xxl={3} >
                                    <Form.Label for="cars">Tipe Driver &nbsp; &nbsp; &nbsp; &nbsp; </Form.Label>
                                    <Form.Select id="tipeDriver" aria-label="Default select example">
                                        <option selected disabled hidden value="Default">Pilih tipe driver</option>
                                        <option value="true">Dengan supir</option>
                                        <option value="false">Tanpa Sopir (Lepas Kunci)</option>
                                    </Form.Select>
                                </Col>
                                <Col lg={'auto'}>
                                    <Form.Label for="tanggal">Tanggal</Form.Label>
                                    <Form.Control id="tanggal" type="date" className="find__forms" placeholder="Pilih tanggal" />
                                </Col>
                                <Col lg={'auto'}>
                                    <Form.Label for="waktu-jemput">Pilih Waktu</Form.Label>
                                    <Form.Select className="search__time" id="waktuJemput" aria-label="Default select example">
                                        <option selected  disabled hidden value="Default">Pilih Waktu &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</option>
                                        <option value="08:00">08.00 WIB</option>
                                        <option value="09:00">09.00 WIB</option>
                                        <option value="10:00">10.00 WIB</option>
                                        <option value="11:00">11.00 WIB</option>
                                        <option value="12:00">12.00 WIB</option>
                                    </Form.Select>
                                </Col>
                                <Col lg={'auto'}>
                                    <Form.Label for="jumlahPenumpang">Jumlah Penumpang (optional)</Form.Label>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                        id="jumlahPenumpang"
                                        placeholder="Jumlah Penumpang"
                                        aria-label="Jumlah Penumpang"
                                        aria-describedby="basic-addon2"
                                        />
                                        <InputGroup.Text className='bg-white' id="basic-addon2"><Image  width="20px" src={user}/></InputGroup.Text>
                                    </InputGroup>
                                </Col>
                                <Col lg={'auto'}>
                                    <Button className="btn-utama" style={{ marginTop: '2rem' }} id="load-btn">Cari Mobil</Button>
                                </Col>
                                
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
      </div>
    </>
  )
}

export default Search