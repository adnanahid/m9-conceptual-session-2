import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./Components/Root";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Treatments from "./Components/Pages/Treatments";
import Profile from "./Components/Pages/Profile";
import Appointment from "./Components/Pages/Appointment";
import ErrorComponent from "./ErrorComponent";
import Details from "./Components/Pages/Home/Details";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
import AuthProvider from "./AuthProvider/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorComponent></ErrorComponent>,
    children: [
      {
        path: "/",
        loader: () => fetch("/service.json"),
        element: <Home></Home>,
      },
      {
        path: "/treatments",
        element: <Treatments></Treatments>,
      },
      {
        path: "/Profile",
        element: <Profile></Profile>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/details/:id",
        loader: () => fetch("/service.json"),
        element: <Details></Details>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
