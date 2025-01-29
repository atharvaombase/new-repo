import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/routes/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormContainer from "./components/forms/FormContainer";
import Homepage from "./components/routes/Homepage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Keeps navbar, footer, etc.
    children: [
      { path: "home", element: <Homepage /> }, // Use /home for homepage
      { path: "forms", element: <FormContainer /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
