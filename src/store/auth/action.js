import { USER_LOGIN, USER_LOGOUT } from "./types";

/**actionlar hangi reducerın kullanılacağını belirlemek için kullanıyorduk, her action bir iş yapıyordu */
/**login işleminde userı merkezi state de saklamamız gerekir, bunun için userLogin actionu na payload göndermeliyiz */
export const userLogin = (user) => ({
  type: USER_LOGIN,
  payload:user,
});
/**logout işleminde payloada ihtiyaç yoktur */
export const userLogout = () => ({
  type: USER_LOGOUT,
});
