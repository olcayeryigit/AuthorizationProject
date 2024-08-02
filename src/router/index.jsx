import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../layout/root-layout";
import HomeLoginPage from "../pages/home-login-page";

//küçük bir proje olacağı için layout oluşturmayacağım

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: "/",
        element: <HomeLoginPage />,
        children: [
          {
            path: "login",
          },
        ],
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
//AppRouter ı, App.jsx e ekleyelim
