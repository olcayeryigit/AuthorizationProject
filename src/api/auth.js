//1.AŞAMA
//api dökümantasyon
//https://dummyjson.com/docs/auth#auth-me
const API_URL = "https://dummyjson.com/auth"; //base URL

//loginin görevi, payload ile gönderilen username ve passwordu Api ye göndermektir, yani api bağlantısı sağlanır
//Login user and get token
export const login = async (payload) => {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  //Burada önce thunderclient ile methodu test edelim
  //backendden dönen hata js hatası değildir response un hatasıdır, bu sebeple bu hata try catch ile yakalanamaz
  //bu hatayı if(!res.ok) ile yakalarız
  if (!res.ok) throw new Error(res.message); //eğer hata varsa, apiden dönen mesajı js hatası olarak fırlat deriz
  return data;
};
//bazı apilerde üstteki login işlemi kullanıcı bilgilerini döndürmmeyip sadece token döndürebilir, bunun için ikinci bir api fonksiyon yani aşağıdaki getAuthUser fonksiyonu gibi bir fonksiyon oluşturmamız gerekebilir

//Login olmuş kullanıcının bilgilerini getiren fonksiyon
//Get current auth user
//backende, login işleminden dönen JWT yi verdiğimizde bize currentAuthUser ın bilgilerini getirir
export const getAuthUser = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/me`, {
    method: "GET", //method GET olduğunda yazmasak da olur defaultta method GET tir.
    headers: { Authorization: `Bearer ${token}` },
    
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
  //thunderclient ile methodu test edelim

  return data;
};
