import React from "react";
import "./Button.scss";
import classNames from "classnames";

export default function Button({
  children,
  disableShadow,
  startIcon,
  size,
  color,
  endIcon,
  ...props
}) {
  const classes = classNames({
    "disable-shadow": disableShadow,
    "size-sm": size === "sm",
    "size-lg": size === "lg",
    primary: color === "primary",
    secondary: color === "secondary",
    danger: color === "danger",
    ...props.className,
  });

  return (
    <button className={classes} {...props}>
      {startIcon && <i className="material-icons">{startIcon}</i>}
      {children}
      {endIcon && <i className="material-icons">{endIcon}</i>}
    </button>
  );
}
