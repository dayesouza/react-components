import React from "react";
import Button from "../../components/Button/Button";
import "./Home.scss";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-align-center">
      <h1>Welcome to React Components</h1>
      <h2>By Dayenne Souza</h2>

      <h4 className="checkout">Check out our components</h4>
      <Link to="/buttons">
        <Button color="secondary">Go to Buttons</Button>
      </Link>
    </div>
  );
}
