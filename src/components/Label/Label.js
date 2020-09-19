import React from "react";
import "./Label.scss";

export default function Label({ title, ...props }) {
  return (
    <label className="text-align-left" {...props}>
      {title}
    </label>
  );
}
