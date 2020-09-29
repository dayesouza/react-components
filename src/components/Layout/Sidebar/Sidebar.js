import React from "react";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";
import routes from "../../../routes";

export default function Sidebar() {
  return (
    <nav className="sidenav">
      {routes.map((r, index) => (
        <NavLink to={r.url} key={index} activeClassName="selected">
          {r.name}
        </NavLink>
      ))}
    </nav>
  );
}
