import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <div>
      <menu
        id="menu"
        className="bg-slate-800 text-white w-[250px] h-[calc(100vh-64px)] flex flex-col"
      >
        <NavLink
          end
          to="/admin"
          className="px-3 py-4 hover:bg-slate-700 transition-all"
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/admin/category-manager"
          className="px-3 py-4  hover:bg-slate-700 transition-all"
        >
          Category Manager
        </NavLink>
        <NavLink
          to="/admin/product-manager"
          className="px-3 py-4  hover:bg-slate-700 transition-all"
        >
          Product Manager
        </NavLink>
      </menu>
    </div>
  );
}
