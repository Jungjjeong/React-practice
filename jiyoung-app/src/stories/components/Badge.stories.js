import Badge from "../../components/_BasicComponent/Badge";
import Image from "../../components/_BasicComponent/Image";

export default {
  title: "Component/Bedge",
  component: Badge,
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
    <Badge {...args}>
      <Image
        src="https://picsum.photos/60"
        width={60}
        style={{ borderRadius: 0 }}
      />
    </Badge>
  );
};

export const Dot = () => {
  return (
    <Badge dot>
      <Image
        src="https://picsum.photos/60"
        width={40}
        style={{ borderRadius: 0 }}
      />
    </Badge>
  );
};
