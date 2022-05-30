import Bedge from ".";
import Image from "../Image";

export default {
  title: "Component/Bedge",
  component: Bedge,
  argTypes: {
    count: {
      defaultValue: 10,
      control: "number",
    },
    maxCount: {
      defaultValue: 100,
      control: "number",
    },
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
    showZero: {
      defaultValue: false,
      control: "boolean",
    },
  },
};

export const Default = (args) => {
  return (
    <Bedge {...args}>
      <Image
        src="https://picsum.photos/60"
        width={60}
        style={{ borderRadius: 0 }}
      />
    </Bedge>
  );
};

export const Dot = () => {
  return (
    <Bedge dot>
      <Image
        src="https://picsum.photos/60"
        width={40}
        style={{ borderRadius: 0 }}
      />
    </Bedge>
  );
};
