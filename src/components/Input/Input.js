import React from "react";
import "./Input.scss";
import classNames from "classnames";
import Label from "../Label/Label";
import HelperText from "../HelperText/HelperText";

export default function Input({ error, label, helperText, ...props }) {
  const classes = classNames({
    error: error,
    ...props.className,
  });
  const text = "Some helper text";

  return (
    <>
      {label && <Label error={error} title="Label"></Label>}
      <input {...props} className={classes}></input>
      {helperText && <HelperText text={text} error={error}></HelperText>}
    </>
  );
}
