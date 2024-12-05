import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const baseStyle =
    "px-4 py-2 rounded transition-colors duration-200 text-center";
  const activeStyle = "bg-blue-600 text-white font-bold";
  const inactiveStyle = "text-gray-700 hover:bg-blue-200 hover:text-blue-600";

  return (
    <div className="flex space-x-4 p-4 bg-gray-100">
      <NavLink
        to="/admin"
        className={({ isActive }) =>
          `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
        }
      >
        Admin
      </NavLink>
      <NavLink
        to="/account"
        className={({ isActive }) =>
          `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
        }
      >
        Account
      </NavLink>
      <NavLink
        to="/product"
        className={({ isActive }) =>
          `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
        }
      >
        Product
      </NavLink>
    </div>
  );
}
