import React from "react";
import "./App.scss";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Buttons</h1>
      </header>
      <div>
        <Button />
      </div>
      <footer>
        <h1>Day</h1>
      </footer>
    </div>
  );
}

export default App;
