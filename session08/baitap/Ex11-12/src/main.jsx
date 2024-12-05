import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import publicRoutes from "./routes/public.routes";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={createBrowserRouter([...publicRoutes])} />
);
