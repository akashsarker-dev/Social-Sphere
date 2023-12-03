import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import SignUp from "./pages/singup/SingUp";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import './App.css'
import './FirebaseConfig.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { store } from './store.jsx'
import { Provider } from 'react-redux'
import Profile from "./pages/profile/Profile.jsx";


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
  {
    path: "/profile",
    element: <Profile></Profile>,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Provider store={store}>


    <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>
);