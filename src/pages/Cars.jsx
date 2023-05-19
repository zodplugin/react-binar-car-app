import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from "axios";
import Data from '../components/Car/Data'
import { Image } from 'react-bootstrap';
import Mobil from '../components/Mobil/Mobil';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './../assets/images/logo.png'
import './../index.css'
import Search from '../components/Search/Search';

const BaseURL = "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"


function Cars() {

  const [cars, setCars] = useState([])
  const [filterData, setFilterData] = useState()

  useEffect(() => {
    axios.get(BaseURL).then((response) => {
      setCars(response.data)
    })
  },[])

  const filterDataHandler = (data) =>{
    setFilterData(data)
  }
  

  return (
    <>
      <main>
        <Navbar bg="transparent" expand="lg">
        <Container>
          <Navbar.Brand href="#"><Image src={logo} widtht={'100px'} height={'34px'}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className='mx-3 my-1' href="#action1">Our Services</Nav.Link>
              <Nav.Link className='mx-3 my-1' href="#action2">Why Us</Nav.Link>
              <Nav.Link className='mx-3 my-1' href="#action3">Testimonial</Nav.Link>
              <Nav.Link className='mx-3 my-1' href="#action4">FAQ</Nav.Link>
              <Button className='mx-3 my-1 btn-register' >Register</Button>

            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
        <Mobil/>
      </main>
      <Search filter={filterDataHandler}/>
      <Data data={cars} filter={filterData}/>
    </>
  )
}

export default Cars
