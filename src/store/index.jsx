/**2.AŞAMA - REDUCER */
/**Büyük projelerde farklı işlemler için farklı statelere ihtiyacımız olabilir, her bir stateimizi ayrı bir klasore alırız (orn: auth) bu klasörler bir reducer grubu olur */
/**1-auth için 4 yapıyı oluşturalım types.js-actions.js-initialState.js-reducer.js*/

import { createContext, useContext, useReducer } from "react";
import { userReducer } from "./auth/reducer";
import { userInitialState } from "./auth/userInitialState";

/*2-bunları yaptıktan sonra index.js yani burada boş bir merkezi state, storecontext oluştururuz**/
const StoreContext=createContext();
/**3-uygulamamı sarmallamak için storprovider oluşturup, gidip StoreProvider ile AppRouter ı sarmallayalım*/
/**burada children, AppRouterdır*/
/**4-reducerı buraya bağlayalım*/

export const useStore=()=>useContext(StoreContext);

export const StoreProvider=({children})=>{

    /**5-reactın useReducer hook'unu kullanırız, useReducer hook'u bizden reducer ve başlangıç değerlerini ister */
    /*bu değerleri veririz ve useReducer bizim için getter ve setter oluşturur(stateUser-dispatchUser)*/
    /**stateUser bu yapıya ulaşmak için kullanılır ve dispatchUser bu yapıyı set etmek için kullanılır */

const [stateUser,dispatchUser]=useReducer(userReducer, userInitialState);
/**stateUser ve dispatchUserı value içerisine yerleştireceğim bunun için kod kirliliği olmasın diye state içerisinde tanımlayalım */
/**güncelleme işlemi için yukarıda kendi hookumuzu tanımlayalım :useStore , gidip home-login.jsx componentine import edelim*/
/**login işleminden sonra getirdiğimiz userı set edelim (güncelleme işlemi)*/
const state={stateUser,dispatchUser}
return (<StoreContext.Provider value={state} >{children}</StoreContext.Provider>)
}