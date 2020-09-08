import React from "react";
import "./Footer.scss";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Dayenne Souza, {year}</p>
    </footer>
  );
}
