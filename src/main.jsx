import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import routes from './routes/Routes';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



ReactDOM.createRoot(document.getElementById("root")).render(


  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={routes} />
      <ToastContainer />
    </HelmetProvider>
  </React.StrictMode>

);
