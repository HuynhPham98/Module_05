import React from "react";
import { Navigate } from "react-router-dom";

export default function CustomLink() {
  const currentUrl = window.location.href;
  if (currentUrl === "http://localhost:5173/home-page") {
    return <Navigate to="/home-page" />;
  } else {
    return <Navigate to={"/*"} />;
  }
}
