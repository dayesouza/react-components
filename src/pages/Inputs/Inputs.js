import React from "react";
import ComponentRowLayout from "../../components/Layout/ComponentRowLayout/ComponentRowLayout";
import PageHeader from "../../components/Layout/PageHeader/PageHeader";
import Input from "../../components/Input/Input";

export default function Inputs() {
  return (
    <div className="text-align-center">
      <PageHeader name="Inputs"></PageHeader>

      <ComponentRowLayout label="<Input />">
        <Input label="Label" placeholder="Placeholder"></Input>
      </ComponentRowLayout>

      <ComponentRowLayout label="<Input error />">
        <Input error label="Label" placeholder="Placeholder"></Input>
      </ComponentRowLayout>

      <ComponentRowLayout label="<Input disabled />">
        <Input disabled label="Label" placeholder="Placeholder"></Input>
      </ComponentRowLayout>

      <ComponentRowLayout
        label={[
          '<Input helperText="Some text" />',
          '<Input helperText="Some text" error/>',
        ]}
      >
        <Input
          helperText="Some text"
          label="Label"
          placeholder="Placeholder"
        ></Input>
        <Input
          error
          label="Label"
          helperText="Some text"
          placeholder="Placeholder"
        ></Input>
      </ComponentRowLayout>

      <ComponentRowLayout label={["<Input startIcon />", "<Input endIcon />"]}>
        <Input
          startIcon="phone"
          label="Label"
          placeholder="Placeholder"
        ></Input>
        <Input endIcon="lock" label="label" placeholder="Placeholder"></Input>
      </ComponentRowLayout>

      <ComponentRowLayout label="<Input value='text' />">
        <Input value="text" label="Label" placeholder="Placeholder"></Input>
      </ComponentRowLayout>

      <ComponentRowLayout
        label={["<Input size='sm' />", "<Input size='md' />"]}
      >
        <Input size="sm" label="Label" placeholder="Placeholder"></Input>
        <Input size="md" label="Label" placeholder="Placeholder"></Input>
      </ComponentRowLayout>

      <ComponentRowLayout label="<Input fullWidth />">
        <Input fullWidth label="Label" placeholder="Placeholder"></Input>
      </ComponentRowLayout>

      <ComponentRowLayout label="<Input multiline row='4' />">
        <Input
          multiline
          row="4"
          label="Label"
          placeholder="Placeholder"
        ></Input>
      </ComponentRowLayout>
    </div>
  );
}
