import React from "react";
import { NavLink } from "react-router-dom";

export default function NavItem({ path, children }) {
  return (
    <NavLink className="navlink" to={path}>
      {children}
    </NavLink>
  );
}
