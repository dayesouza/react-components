import React from "react";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";
import routes from "../../../routes";

export default function Sidebar() {
  return (
    <nav class="sidenav">
      {routes.map((r) => (
        <NavLink to={r.url} activeClassName="selected">
          {r.name}
        </NavLink>
      ))}
    </nav>
  );
}
