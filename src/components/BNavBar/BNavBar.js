import React from 'react'

//Nav
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';

//Buttons
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import menu from'./menu.jpg'
import './BNavBar.css'

const BNavBar = ()=>{
    return(
        <>
        {/*<div>
            <Navbar expand='lg' bg="dark" variant="light" sticky="top">
                <div className='box'>
                    <h4>Logo / Domain Name</h4>
                </div>
                <ButtonGroup aria-label="Basic example">
                    <Button>Home</Button>
                    <Button>Middle</Button>
                    <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
                        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                    </DropdownButton>
                </ButtonGroup>
            </Navbar>
        </div>*/}
              <Navbar bg="dark" variant="dark" sticky='top'>
                <Container>
                <Navbar.Brand href="#home">Catch a Ride</Navbar.Brand>

                <DropdownButton id="dropdown-item-button" title={<img src={menu} height='20px' width='20px' />}>
                    <Dropdown.ItemText>Manu</Dropdown.ItemText>
                    <Dropdown.Item as="button" onClick={()=>{
                        const anchor = document.querySelector('#home')
                        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }}>Home</Dropdown.Item>
                    <Dropdown.Item as="button">View listings</Dropdown.Item>
                    <Dropdown.Item as="button">Contact Us</Dropdown.Item>
                    <Dropdown.Item as="button">About Us</Dropdown.Item>
                </DropdownButton>

                {/*<Button variant="secondary">
                    <img src={menu} height='20px' width='20px' />
                </Button>{' '}
                <Nav className="me-auto">
                
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">View listings</Nav.Link>
                <Nav.Link href="#pricing">About Us</Nav.Link>
                <Nav.Link href="#features">Contact Us</Nav.Link>
                </Nav>*/}
                </Container>
            </Navbar>
        </>
    )
}

export default BNavBar