import React from "react";
import "./Card.scss";
import classNames from "classnames";

export default function Card({ children, className, ...props }) {
  const classes = classNames("card", {
    ...className,
  });

  return (
    <div {...props} className={classes}>
      {children}
    </div>
  );
}
