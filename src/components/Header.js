import React from 'react'
import{Nav,Navbar,Container} from 'react-bootstrap'
function Header() {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">About Us</Nav.Link>
          <Nav.Link href="#pricing">Contact Us</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
            
        
    )
}

export default Header
