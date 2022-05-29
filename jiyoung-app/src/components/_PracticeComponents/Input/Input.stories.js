import Input from ".";

export default {
  title: "Component/Input",
  component: Input,
  argTypes: {
    onChange: { action: "onChange" },
  },
};

const StoryTemplate = (args) => <Input {...args} />;

export const Default = StoryTemplate.bind({});

export const IdInput = StoryTemplate.bind({});
IdInput.args = {
  id: "userId",
  placeholder: "이메일 주소를 입력하세요. ",
};

export const PWInput = StoryTemplate.bind({});
PWInput.args = {
  id: "password",
  type: "password",
  placeholder: "비밀번호를 입력하세요.",
};
