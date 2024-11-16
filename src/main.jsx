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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorComponent></ErrorComponent>,
    children: [
      {
        path: "/",
        loader: ()=>fetch("/service.json"),
        element: <Home></Home>
      },
      {
        path: "/treatments",
        element: <Treatments></Treatments>
      },
      {
        path: "/Profile",
        element: <Profile></Profile>
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>
      },
      {
        path: "/details/:id",
        loader: ()=>fetch("/service.json"),
        element: <Details></Details>
      },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
