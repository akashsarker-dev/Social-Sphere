import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import SignUp from "./pages/singup/SingUp";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";


const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/",
    element: <Home></Home>,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);