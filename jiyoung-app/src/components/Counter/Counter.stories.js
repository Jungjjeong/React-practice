import React from "react";
import Counter from ".";

export default {
  title: "Example/Counter",
  component: Counter,
  argTypes: {
    onIncrease: {
      action: "increased",
    },
    onDecrease: {
      action: "decreased",
    },
  },
};

const Template = (args) => <Counter {...args} />;

export const Default = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };
