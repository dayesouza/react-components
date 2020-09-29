import React from "react";
import "./HelperText.scss";
import classNames from "classnames";

export default function HelperText({ text, error, ...props }) {
  const classes = classNames({
    "helper-text": true,
    error: error,
    ...props.className,
  });

  return (
    <span className={classes} {...props}>
      {text}
    </span>
  );
}
