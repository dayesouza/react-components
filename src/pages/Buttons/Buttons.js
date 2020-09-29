import React from "react";
import Button from "../../components/Button/Button";
import ComponentRowLayout from "../../components/Layout/ComponentRowLayout/ComponentRowLayout";
import PageHeader from "../../components/Layout/PageHeader/PageHeader";

export default function Buttons() {
  return (
    <div className="text-align-center">
      <PageHeader name="Buttons" />

      <ComponentRowLayout label="<Button />">
        <Button>Default</Button>
      </ComponentRowLayout>

      <ComponentRowLayout label='<Button variant="outline"/>'>
        <Button variant="outline">Default</Button>
      </ComponentRowLayout>

      <ComponentRowLayout label='<Button variant="text"/>'>
        <Button variant="text">Default</Button>
      </ComponentRowLayout>

      <ComponentRowLayout label="<Button disableShadow />">
        <Button disableShadow>Default</Button>
      </ComponentRowLayout>

      <ComponentRowLayout
        label={["<Button disabled />", "<Button disabled variant='text'/>"]}
      >
        <Button disabled>Default</Button>
        <Button disabled variant="text">
          Default
        </Button>
      </ComponentRowLayout>

      <ComponentRowLayout
        label={[
          "<Button startIcon='local_grocery_store' />",
          "<Button endIcon='local_grocery_store' />",
        ]}
      >
        <Button startIcon="local_grocery_store">Default</Button>
        <Button endIcon="local_grocery_store">Default</Button>
      </ComponentRowLayout>

      <ComponentRowLayout
        label={[
          "<Button size='sm' />",
          "<Button size='md' />",
          "<Button size='lg' />",
        ]}
      >
        <Button size="sm">Default</Button>
        <Button size="md">Default</Button>
        <Button size="lg">Default</Button>
      </ComponentRowLayout>

      <ComponentRowLayout
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
      </ComponentRowLayout>
    </div>
  );
}
