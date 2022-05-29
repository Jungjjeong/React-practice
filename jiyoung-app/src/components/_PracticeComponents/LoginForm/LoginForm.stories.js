import LoginForm from ".";

export default {
  title: "Component/LoginForm",
  component: LoginForm,
	args: {
		
	},
  argTypes: {
    onSubmit: { action: "onSubmit" },
  },
};

export const Default = (args) => {
  return <LoginForm {...args} />;
};
