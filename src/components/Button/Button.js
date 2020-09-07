import React from "react";
import "./Button.scss";
var classNames = require("classnames");

export default function Button({ children, disableShadow, ...props }) {
  const classes = classNames({
    "disable-shadow": disableShadow,
    ...props.className,
  });

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
