import React, { useState } from "react";
import "./Input.scss";
import classNames from "classnames";
import Label from "../Label/Label";
import HelperText from "../HelperText/HelperText";
import ControlGroup from "../ControlGroup/ControlGroup";

export default function Input({
  error,
  label,
  helperText,
  startIcon,
  endIcon,
  size,
  fullWidth,
  multiline,
  row,
  value = "",
  ...props
}) {
  const [inputValue, setInputValue] = useState(value);
  const classes = classNames({
    error: error,
    icon: startIcon || endIcon,
    "size-sm": size === "sm",
    "size-md": size === "md",
    "w-100": fullWidth,
    ...props.className,
  });

  const divClasses = classNames({
    divInput: true,
    icon: startIcon || endIcon,
  });

  return (
    <ControlGroup fullWidth={fullWidth}>
      {label && <Label error={error} title={label}></Label>}
      <div className={divClasses}>
        {startIcon && <i className="material-icons">{startIcon}</i>}
        {multiline && <textarea {...props} rows={row}></textarea>}
        {!multiline && (
          <input
            {...props}
            className={classes}
            onChange={(v) => {
              setInputValue(v.target.value);
            }}
            value={inputValue}
          ></input>
        )}
        {endIcon && <i className="material-icons">{endIcon}</i>}
      </div>
      {helperText && <HelperText text={helperText} error={error}></HelperText>}
    </ControlGroup>
  );
}
