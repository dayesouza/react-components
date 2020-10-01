import React from "react";
import "./ControlGroup.scss";
import classNames from "classnames";

export default function ControlGroup({ children, fullWidth }) {
  const classes = classNames({
    "control-group": true,
    "w-100": fullWidth,
  });

  return <div className={classes}>{children}</div>;
}
