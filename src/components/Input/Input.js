import React from "react";
import "./Input.scss";
import classNames from "classnames";
import Label from "../Label/Label";
import HelperText from "../HelperText/HelperText";

export default function Input({
  error,
  label,
  helperText,
  startIcon,
  endIcon,
  ...props
}) {
  const classes = classNames({
    error: error,
    icon: startIcon || endIcon,
    ...props.className,
  });

  const divClasses = classNames({
    divInput: true,
    icon: startIcon || endIcon,
  });

  return (
    <>
      {label && <Label error={error} title="Label"></Label>}
      <div class={divClasses}>
        {startIcon && <i className="material-icons">{startIcon}</i>}
        <input {...props} className={classes}></input>
        {endIcon && <i className="material-icons">{endIcon}</i>}
      </div>
      {helperText && <HelperText text={helperText} error={error}></HelperText>}
    </>
  );
}
