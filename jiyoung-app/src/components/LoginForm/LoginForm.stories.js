import LoginForm from ".";

export default {
  title: "Component/LoginForm",
  component: LoginForm,
  argTypes: {
    onSubmit: { action: "onSubmit" },
  },
};

export const Default = (args) => {
  return <LoginForm {...args} />;
};