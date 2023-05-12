import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './../assets/images/logo.png'
import Mobil from '../components/Mobil/Mobil';


function Home() {
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
              <Nav.Link className='mx-3 my-1' href="#action2">Testimonial</Nav.Link>
              <Nav.Link className='mx-3 my-1' href="#action2">FAQ</Nav.Link>
              <Button className='mx-3 my-1 btn-register' variant="outline-success">Register</Button>

            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
        <Mobil/>
      </main>
      
    </>
  )
}

export default Home

