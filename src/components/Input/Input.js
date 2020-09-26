import React from "react";
import "./Input.scss";
import classNames from "classnames";
import Label from "../Label/Label";

export default function Input({ error, label, ...props }) {
  const classes = classNames({
    error: error,
    ...props.className,
  });
  return (
    <>
      {label && <Label error={error} title="Label"></Label>}
      <input {...props} className={classes}></input>
    </>
  );
}
