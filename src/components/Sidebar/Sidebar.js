import React from "react";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <nav class="sidenav">
      <NavLink to="/home" activeClassName="selected">
        Home
      </NavLink>
      <NavLink to="/buttons" activeClassName="selected">
        Buttons
      </NavLink>
    </nav>
  );
}
