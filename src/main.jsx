import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/routes/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormContainer from "./components/forms/FormContainer";
import { path } from "framer-motion/client";
import Homepage from "./components/routes/homepage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/forms", element: <FormContainer /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
