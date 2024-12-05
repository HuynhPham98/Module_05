import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function AdminIndex() {
  return (
    <div>
      <header style={{ display: "flex", gap: 12 }}>
        <NavLink to="/admin/product-manager">Product manager</NavLink>
        <NavLink to="/admin/category-manager">Category manager</NavLink>
      </header>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
}
