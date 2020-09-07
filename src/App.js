import React from "react";
import "./App.scss";
import Button from "./components/Button/Button";
import ButtonRowLayout from "./components/ButtonRowLayout/ButtonRowLayout";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Buttons</h1>
        </header>
        <ButtonRowLayout label="<Button />">
          <Button>Default</Button>
        </ButtonRowLayout>

        <ButtonRowLayout label='<Button variant="outline"/>'>
          <Button variant="outline">Default</Button>
        </ButtonRowLayout>

        <ButtonRowLayout label='<Button variant="text"/>'>
          <Button variant="text">Default</Button>
        </ButtonRowLayout>

        <ButtonRowLayout label="<Button disableShadow />">
          <Button disableShadow>Default</Button>
        </ButtonRowLayout>

        <ButtonRowLayout
          label={[
            "<Button disableShadow />",
            "<Button disabled variant='text'/>",
          ]}
        >
          <Button disabled>Default</Button>
          <Button disabled variant="text">
            Default
          </Button>
        </ButtonRowLayout>
      </div>

      <footer>
        <span>Dayenne Souza, 2020</span>
      </footer>
    </>
  );
}

export default App;
