import React from "react";
import ComponentRowLayout from "../../components/Layout/ComponentRowLayout/ComponentRowLayout";
import PageHeader from "../../components/Layout/PageHeader/PageHeader";
import Input from "../../components/Input/Input";
import ControlGroup from "../../components/ControlGroup/ControlGroup";
import Label from "../../components/Label/Label";

export default function Inputs() {
  return (
    <div class="text-align-center">
      <PageHeader name="Inputs"></PageHeader>

      <ComponentRowLayout label="<Input />">
        <ControlGroup>
          <Label title="Label"></Label>
          <Input placeholder="Placeholder"></Input>
        </ControlGroup>
      </ComponentRowLayout>

      <ComponentRowLayout label="<Input error />">
        <ControlGroup>
          <Input error label="Label" placeholder="Placeholder"></Input>
        </ControlGroup>
      </ComponentRowLayout>

      <ComponentRowLayout label="<Input disabled />">
        <ControlGroup>
          <Label title="Label"></Label>
          <Input disabled placeholder="Placeholder"></Input>
        </ControlGroup>
      </ComponentRowLayout>

      {/* <ComponentRowLayout label='<Input helperText="Some interesting text" />'>
        <ControlGroup>
          <Label title="Label"></Label>
          <Input
            helperText="Some interesting text"
            placeholder="Placeholder"
          ></Input>
        </ControlGroup>
      </ComponentRowLayout> */}
    </div>
  );
}
