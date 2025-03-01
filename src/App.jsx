
/**Reducer ı tekrar dinleyip not al buraya 
1- Initial State (statein başlangıç değerleri)
2- Reducer (statei  güncelleyen fonksyion, güncelleme yapacaksak kullanırız)(Reducer Yöntemi,dispatch doğrudan reducerı çağrır ve reducer ile güncelleme yapılır)
3-Actions (hangi reducer ın çağrılacağını ve varsa state e gönderilecek datayı belirleyen nesnedir )
4-Types(hangi reducerın çalışacağını action içerisindeki types bilgisi belirler)
Action ve Types zorunlu değildir
*/

import { AppRouter } from "./router"
import { StoreProvider } from "./store"


//DummyJsonın auth apisi kullanalım :Login user and get token
//login işlemi ve mevcut kullanıcıyı getirme
//https://dummyjson.com/docs/auth#auth-login

function App() {

  return ( 
  <StoreProvider>
  <AppRouter/>
</StoreProvider>

  )
}

export default App
