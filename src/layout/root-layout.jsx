import { Outlet } from "react-router-dom";
import Header from "../components/header/header";
import "./layout.css";

const RootLayout = () => {
  return (
    <div className="layoutContainer">
      <Header />
      <Outlet />
    </div>
  );
};

export default RootLayout;
//Layoutu router içerisine, root pathe yerleştirelim
