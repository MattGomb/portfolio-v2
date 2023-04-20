import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export const NavbarSection = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md" fixed='top' style={{padding: '0.5rem 2rem'}}>
          <Navbar.Brand href="#welcome">MattGomb</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: 'end'}}>
            <Nav>
              <Nav.Link className="link1 my-2 me-2" href="#welcome">Welcome</Nav.Link>
              <Nav.Link className="link2 my-2 me-2" href="#projects">Projects</Nav.Link>
              <Nav.Link className="link3 my-2 me-2" href="#recommendations">Recommendations</Nav.Link>
              <Nav.Link className="link4 my-2 me-2" href="#about">About Me</Nav.Link>
              <Nav.Link className="link5 my-2 me-2" href="#contact">Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </>
  )
}