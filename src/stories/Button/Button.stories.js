import React from "react";
import Button from "./Button";
// import Center from "../Centre/Center";
export default {
  title: "Form/Control/Button",
  component: Button,
  args: {
    children: "Button",
  },
  //   decorators: [(story) => <Center>{story()}</Center>],
};

export const Primary = () => (
  //   <Center>
  <Button variant="primary">Primary</Button>
  //   </Center>
);
export const Secondary = () => (
  //   <Center>
  <Button variant="secondary">Secondary</Button>
  //   </Center>
);
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

// =================================

const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
  //   children: "Primary Args",
};

export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  variant: "primary",
  children: "Long Primary Args",
};

export const PrimaryB = Template.bind({});
PrimaryB.args = {
  variant: "secondary",
  children: "Secondary Args",
};
