import { Button, Container, Image, Nav, Navbar} from "react-bootstrap";
import "./header.css";
import logo from "../../assets/images/Logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useStore } from "../../store";
import { userLogout } from "../../store/auth/action";
const Header = () => {
  /**merkezi state'e ulaşmak için useStore'u getirelim, stateUser ile isUserLogin ve user a erişelim, stateUser */
  //const {stateUser}=useStore();
  //console.log(stateUser);

  const { stateUser } = useStore();
  const { isUserLogin, user } = stateUser;
  const { dispatchUser } = useStore();
  const {pathname}=useLocation();


  const isActive=(path)=>{
return pathname===path&&"activeLink";
  }

  const handleClickLogout = () => {
    const res = confirm("Çıkış yapmak istediğinizden emin misiniz?");
    /**cevap hayırsa devam etmesin*/
    if (!res) return;
/*çıkış işleminin actionunda herhangi bir parametre göndermiyorduk*/
    dispatchUser(userLogout());
  };

  return (
    <Navbar expand="lg" className="navbar ">
      <Container fluid className="p-0 ">
        <Navbar.Brand className="m-0 p-0">
          <Image className="logo" src={logo} />
        </Navbar.Brand>

        {isUserLogin && (
          <div className="loginMessage mt-2 fw-bold d-block d-lg-none">
            Merhaba {user.firstName}!
          </div>
        )}

        <Navbar.Toggle aria-controls="navbarScroll" className="me-2 my-2" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="nav m-0  text-center flex-nowrap" navbarScroll>
            <Nav.Link as={Link} to="/" className={`linkHome mt-0 me-0 me-sm-4 ${isActive("/")}`} >
              Anasayfa
            </Nav.Link>

            {!isUserLogin && (
              <Nav.Link
              as={Link}
                to="/login"
                className={`linkLogin pb-3 me-0 me-sm-4 ${isActive("/login")}`}
               
              >
                Giriş
              </Nav.Link>
            )}

            {isUserLogin && (
              <div className="loginMessage mt-2 fw-bold d-none d-lg-block ms-5 ps-5">
                Merhaba {user.firstName}!
              </div>
            )}

            {isUserLogin && (
              <Button
                className="logoutButton border-0 pt-0 pt-lg-1 mt-0 mt-lg-1 me-0 me-sm-4"
                onClick={handleClickLogout}
              >
                Logout
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
