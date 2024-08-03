import { Container, Image, Nav, Navbar } from "react-bootstrap";
import "./header.css";
import logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid className="p-0 ">
        <Navbar.Brand  className="m-0 p-0">
          <Image className="logo" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="me-2 my-2" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="nav m-0  text-center flex-nowrap" navbarScroll>
           
            <Nav.Link as={Link} to="/" className="linkHome mt-0 me-0 me-sm-4">
              Anasayfa
            </Nav.Link>

            <Nav.Link as={Link} to="/login" className="linkLogin pb-3 me-0 me-sm-4">
              Giriş
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
