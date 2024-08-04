import {Image, Spinner } from "react-bootstrap";
import "./login-form.css";
import userImage from "../../assets/images/userImage.png";
import { FaRegSquare } from "react-icons/fa";
import { FaRegSquareCheck } from "react-icons/fa6";
import {  useFormik } from "formik";
import * as Yup from "yup";
import { RiErrorWarningFill } from "react-icons/ri";
import { getAuthUser, login } from "../../api/auth";
import { useState } from "react";
import { useStore } from "../../store";
import { userLogin } from "../../store/auth/action";
import { useNavigate } from "react-router-dom";

//Formik taglerini kullanmadan, HTML tagleri ile formikin yardımcı fonksiyonlarından faydalanalım
const LoginForm = () => {
  const [buttonClassName, setButtonClassName] = useState("");
  const [error, setError] = useState(null);
  const navigate=useNavigate();
  /**dispatchUser ı kullanabilmek için oluşturduğumuz useStore hook'unu getirelim ve userı login işleminden sonra dispatchUser ile güncelleyelim*/
const {dispatchUser}=useStore();


  const handleMouseOver = (e) => {
    console.log(e.target.disabled);
    if (!e.target.disabled) {
      setButtonClassName("button-color2");
    }
  };

  const handleMouseOut = (e) => {
    if (!e.target.disabled) {
      setButtonClassName("button-color1");
    }
  };

  /***/

  //1-initialstate
  const initialValues = {
    username: "",
    password: "",
  };
  //2-validationschema
  const validationSchema = Yup.object({
    username: Yup.string().required("Kullanıcı adı boş bırakılamaz"),
    password: Yup.string().required("Parola boş bırakılamaz"),
  });

  //3-onSubmit

  /*  api username-password
  username: 'emilys',
  password: 'emilyspass', */
  const onSubmit = async (values) => {
    /** */

    console.log(values);
    //backend bağlantısı yapacağım için burada try catch kullanıyorum
    try {
      /*1-login Api method**/
      //burada payload olarak values göndeririz, backend biz içerisinde token da yer alan bir data gönderir

      //const res = await login(values);
      //console.log(res);
      //bize sadece token gerekli onun için res yerine sadece token ı alalım
      const { token } = await login(values);
      console.log(token);
      //backendden aldığımız bu tokenı daha sonra kullanabilmek için localstorage de saklayalım
      localStorage.setItem("token", token);

      //(normalde tokenı bu şekilde localstorage de saklamayız güvenli değildir, birisi postmande bu token ile endpointlere erişim sağlayabilir, bu yüzden bu tokeni şifreleyerek saklarız, şifreli çalışan localstorage kütüphaneleri var)

      //bankacılık işlemlerinde token güvenlik için localStorage de saklanmaz, sessionStorageda saklanır browser kapatılıp açıldığında girilemez
      //dummyjsonda token ile birlikte, refreshtoken da gelir.refreshtoken ile güvenlik biraz daha artırılabilir, kullanıcı kesmeden süreyi uzatıp iki token ile çalışılabilir  

      /*2-getAuthUser Api method**/
      /*burada üstteki login işleminden dönen JWT yi verelim, bize currentAuthUser ın bilgilerini gelsin*/
      const user =await getAuthUser(); 
      console.log(user);
      setError(null);
//*!!!!!!!dispatchUser ve action ile user güncelleme işlemi, güncelleme yaptıktan sonra kullanıcıyı anasayfaya yönlendirelim */
dispatchUser(userLogin(user));
navigate("/");
/**headera gidip giriş için karşılama yapalım */
    } catch (err) {
      //hata olması durumunda hatayı kullanıcıyla paylaşalım, bunun için yukarda bir error statei tanımlayalım
      console.log(err);
      setError(err);
      /*submit işlemi yapılmadan önce statin boş olması lazım yoksa önceki hata mesajları görüntülenir, bunun için yukarıya gidip setError(null) demeliyim*/

      /**userı getirdikten sonra, uygulamanın her yerinde erişebileceğimiz bir yerde saklamamız gerekir, bunun için kullanıcının login ve user bilgilerini merkezi state de saklayalım, bunun için store dosyasına gidelim  */
    }
  }

  //üçünü birleştirme
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
   
    <form
    
      className="formContainer d-flex flex-column align-items-center"
      onSubmit={formik.handleSubmit}
    >



      <Image src={userImage} className="userImage" />

      <h5 className="fw-bold">Giriş</h5>

      {/*error?.message?<Alert variant="danger" className="alert-login py-2 mt-1">{error.message}</Alert>:null /*yukardaki login ve getAuthUser işlemlerinde hata olursa hatayı buraya yazdıralım **/}

{error?.message?<div className="alert-login m-0 text-center py-2 ">Geçersiz Kullanıcı adı veya parola</div>:null /*aslında normal şartlarda yukardaki apiden dönen hata mesajını gösteririz ancak ben burada custom mesaj göstereceğim*/}
      <div>
        <input
          className="inputText position-relative"
          type="text"
          placeholder="  Kullanıcı Adı"
          name="username"
          {
            ...formik.getFieldProps("username") /*inputu formike bağlama*/
          }
        />
        {formik.touched.username && formik.errors.username && (
          <RiErrorWarningFill className="errorIcon position-absolute" />
        )}
      </div>

      <div>
        <input
          className="inputPassword position-relative"
          type="password"
          placeholder="  ●●●●●●●●"
          name="password"
          {
            ...formik.getFieldProps("password") /*inputu formike bağlama*/
          }
        />
        {formik.touched.password && formik.errors.password && (
          <RiErrorWarningFill className="errorIcon position-absolute" />
        )}
      </div>

      <button
        className={`buttonLogin mt-3 text-white border-0 fw-bold ${buttonClassName}`}
        type="submit"
        disabled={
          formik.isSubmitting ||
          !(formik.touched.username || formik.touched.password) ||
          (formik.touched && !formik.isValid)
            ? "disabled"
            : ""
        }
        onMouseOver={(e) => handleMouseOver(e)}
        onMouseOut={(e) => handleMouseOut(e)}
      >
        {formik.isSubmitting ? <Spinner size="sm" /> : "Giriş"}
      </button>

      <div className="formText d-flex justify-content-between align-items-center mt-2 ">
        <div className="remeberText d-flex align-items-center">
          {true ? (
            <div type="button" className="tickButton border-0 p-0">
              <FaRegSquare className="mb-1" /> Beni Hatırla
            </div>
          ) : (
            <div type="button" className="noTickButton border-0 p-0">
              <FaRegSquareCheck className="" />
              Beni Unut
            </div>
          )}
        </div>

        <div type="button" className="isForgetText">
          Şifreni mi Unuttun?
        </div>
      </div>
    </form>
    
  );
};

export default LoginForm;
