import React from "react";
import Button from "../../components/Button/Button";
import ButtonRowLayout from "../../components/ButtonRowLayout/ButtonRowLayout";

export default function Buttons() {
  return (
    <div class="text-align-center">
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

      <ButtonRowLayout
        label={[
          "<Button startIcon='local_grocery_store' />",
          "<Button endIcon='local_grocery_store' />",
        ]}
      >
        <Button startIcon="local_grocery_store">Default</Button>
        <Button endIcon="local_grocery_store">Default</Button>
      </ButtonRowLayout>

      <ButtonRowLayout
        label={[
          "<Button size='sm' />",
          "<Button size='md' />",
          "<Button size='lg' />",
        ]}
      >
        <Button size="sm">Default</Button>
        <Button size="md">Default</Button>
        <Button size="lg">Default</Button>
      </ButtonRowLayout>

      <ButtonRowLayout
        label={[
          "<Button color='default' />",
          "<Button color='primary' />",
          "<Button color='secondary' />",
          "<Button color='danger' />",
        ]}
      >
        <Button color="default">Default</Button>
        <Button color="primary">Default</Button>
        <Button color="secondary">Default</Button>
        <Button color="danger">Default</Button>
      </ButtonRowLayout>
    </div>
  );
}
