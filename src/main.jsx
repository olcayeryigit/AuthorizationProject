import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//bootstrapin css ini  import edelim
import "bootstrap/dist/css/bootstrap.min.css"
//react-bootstrap kullanacağımız için, bootstrapin javascriptini import etmemize gerek yok 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
