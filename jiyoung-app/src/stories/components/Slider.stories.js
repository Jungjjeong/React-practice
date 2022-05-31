import Slider from "../../components/_BasicComponent/Slider";
import Spacer from "../../components/_BasicComponent/Spacer";
import Icon from "../../components/_BasicComponent/Icon";

export default {
  title: "Component/Slider",
  component: Slider,
  argTypes: {
    defaultValue: { defaultValue: 1, control: "number" },
    min: { defaultValue: 1, control: "number" },
    max: { defaultValue: 100, control: "number" },
    step: { defaultValue: 0.1, control: "number" },
    onChange: { action: "onChange" },
  },
};

export const Default = (args) => <Slider {...args} />;

export const VolumeControl = (args) => {
  return (
    <Spacer>
      <Icon name="volume" />
      <Slider style={{ width: 100, display: "inline-block" }} {...args} />
      <Icon name="volume-2" />
    </Spacer>
  );
};
