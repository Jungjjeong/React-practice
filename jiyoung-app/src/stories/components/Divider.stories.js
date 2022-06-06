import Divider from "../../components/base/Divider";
import Text from "../../components/base/Text";

export default {
  title: "Component/Divider",
  component: Divider,
};

export const Horizontal = () => {
  return (
    <>
      <Text>위</Text>
      <Divider type="horizontal" />
      <Text>아래</Text>
    </>
  );
};

export const Vertical = () => {
  return (
    <>
      <Text>위</Text>
      <Divider type="vertical" />
      <Text>아래</Text>
    </>
  );
};
