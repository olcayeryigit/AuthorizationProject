import { Image } from "react-bootstrap";
import "./login-form.css";
import userImage from "../../assets/images/userImage.png";
import { FaRegSquare } from "react-icons/fa";
import { FaRegSquareCheck } from "react-icons/fa6";
const LoginForm = () => {
  return (
    <div className="formContainer d-flex flex-column align-items-center ">
      <Image src={userImage} className="userImage" />

      <h5 className="fw-bold">Giriş</h5>

      <input className="inputText" type="text" placeholder="  Kullanıcı Adı" />
      <input
        className="inputPassword"
        type="password"
        placeholder="  ●●●●●●●●"
      />
      <button className="buttonLogin mt-3 text-white border-0 fw-bold">
        Giriş
      </button>

      <div className="formText d-flex justify-content-between align-items-center mt-2 ">
        <div className="remeberText d-flex align-items-center">
          {true? (
          
              <div type="button" className="tickButton border-0 p-0">
                <FaRegSquare className="mb-1"/> Beni Hatırla
              </div>
           
          ) : (
           
              <div type="button" className="noTickButton border-0 p-0">
                <FaRegSquareCheck className=""/>Beni Unut
              </div>
           
           
          )}
        </div>

        <div type="button" className="isForgetText">Şifreni mi Unuttun?</div>
      </div>
    </div>
  );
};

export default LoginForm;
