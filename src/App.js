import React from "react";
import "./App.scss";
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Buttons</h1>
        </header>
        <div className="buttons">
          <div className="code-label">
            <code>{'<Button />'}</code>
          </div>
            <Button>Default</Button>
        </div>
      </div>

      <footer>
        <span>Dayenne Souza, 2020</span>
      </footer>
    </>
  );
}

export default App;
