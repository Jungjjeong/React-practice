import React from "react";
import Circle from ".";

export default {
  title: "Example/Circle",
  component: Circle,
  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Circle {...args} />;

export const Default = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };
