import React from "react";
import "./Label.scss";
import classNames from "classnames";

export default function Label({ title, error, ...props }) {
  const classes = classNames({
    "text-align-left": true,
    error: error,
    ...props.className,
  });

  return (
    <label className={classes} {...props}>
      {title}
    </label>
  );
}
