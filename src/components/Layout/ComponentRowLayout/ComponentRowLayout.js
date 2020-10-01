import React from "react";

export default function ComponentRowLayout({ children, label }) {
  return (
    <div className="flex-column">
      <div className="flex-row">
        {Array.isArray(children) &&
          children.map((button, index) => {
            return (
              <div key={index} className="w-100">
                <div className="code-label">
                  <code>{`${
                    Array.isArray(label) ? label[index] : label
                  }`}</code>
                </div>
                {button}
              </div>
            );
          })}

        {!Array.isArray(children) && (
          <div className="w-100">
            <div className="code-label">
              <code>{`${label}`}</code>
            </div>
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
