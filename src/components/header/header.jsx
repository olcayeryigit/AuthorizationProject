import { Image, Nav, Navbar } from "react-bootstrap";
import "./header.css";
import logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
    <Navbar className="navbar ">
  

       <Nav className="nav gap-4">


           
            <Nav.Link as={Link} to="/" className="linkHome">Anasayfa</Nav.Link>
            <Nav.Link as={Link} to="/login" className="linkLogin">Giriş</Nav.Link>
</Nav>
    </Navbar>
    <Image className="logo" src={logo}/>
    </div>
  );
};

export default Header;
