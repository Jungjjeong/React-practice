import Input from ".";

export default {
  title: "Component/Input",
  component: Input,
  argTypes: {
    onChange: { action: "onChange" },
  },
};

export const Default = (args) => {
  return <Input {...args} />;
};
