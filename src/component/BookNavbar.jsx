import { Nav, Navbar, Container } from "react-bootstrap"

const BookNavbar = function () {
  return (
    <Navbar expand="lg" className="bg-black">
      <Container fluid={true}>
        <Navbar.Brand href="#" className="text-light">
          Book Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" className="text-light">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="text-light">
              About
            </Nav.Link>
            <Nav.Link href="#" className="text-light">
              Browse
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default BookNavbar
