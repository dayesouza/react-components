import React from "react";

export default function ButtonRowLayout({ children, label }) {
  return (
    <div className="flex-column">
      <div className="flex-row">
        {Array.isArray(children) &&
          children.map((button, index) => {
            return (
              <div key={index}>
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
          <div>
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
