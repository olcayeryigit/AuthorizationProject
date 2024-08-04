import { USER_LOGIN, USER_LOGOUT } from "./types";
import { userInitialState } from "./userInitialState";

/**userReducer dışardan mevcut statei alır */
export const userReducer = (state = userInitialState, action) => {
  if (action.type == USER_LOGIN) {
    /**burada neyi return edersek state o olarak güncellenir, burada mevcut state i açıp değiştireceğimiz değerleri değiştriririz, burada isUserLogin alanını true'ya çekeriz ve userı da backendden gelen user datasıyla yani action.payload ile doldururuz*/
    return { ...state, isUserLogin: true, user: action.payload };
  }
  if (action.type == USER_LOGOUT) {
    /**çıkış yapılırken, isUserLogini false a çekip userı da boşaltırız */
    return { ...state, isUserLogin: false, user: {} };
  }
  /**burada tedbiren bir işlem yapılır, burada yanlışlıkla olmayan bir type kullandık, burada undefined döner ve burada state tamamen undefined olur bu durumdan kurtulmak için return state; diyerek mevcut statei döndeririz ve bir kayıp yaşamayız */
  return state;
};
