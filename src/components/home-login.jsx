import "./home-login.css";
import { Container, Image } from "react-bootstrap";
import Image1 from "../assets/images/Image1.png";
import { useLocation } from "react-router-dom";
import LoginForm from "./login-form/login-form";
const HomeLogin = () => {

  const {pathname}=useLocation();
  return (
    <Container
      fluid
      className="homeContainer d-flex justify-content-center align-items-center  flex-wrap  "
    >
      {pathname=="/" &&
      <div className="textContainer">
        <p className="fs-4 fw-bold fs-sm-2">Can Dostlarımızın Sağlığı İçin</p>
        <p className="mt-4">
          Can Dostum Veteriner Kliniği olarak, evcil hayvanlarınızın sağlığı ve
          refahı için kapsamlı ve nitelikli hizmetler sunuyoruz. Teşhis, tedavi,
          laboratuvar ve ultrasonografi hizmetlerimizle birlikte, röntgen,
          cerrahi müdahaleler, aşılama, tıraş ve banyo gibi bakım ihtiyaçlarını
          karşılıyoruz. Uzman ekibimiz, sevimli dostlarınızın en iyi bakımı
          almasını sağlamak için her zaman yanınızda.
        </p>
        <h6>Onların sağlığı için buradayız!</h6>
      </div>
   
    } 
     {pathname=="/login"&& <LoginForm/>}
      <div className="text-center mt-5">
                <Image src={Image1} className="image1"></Image>

      </div>
     
    </Container>
  );
};

export default HomeLogin;
