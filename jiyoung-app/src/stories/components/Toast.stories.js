import Toast from "../../components/base/Toast";

export default {
  title: "Component/Toast",
};

export const Default = () => {
  return <button onClick={() => Toast.show("Hello!", 3000)}>Show Toast</button>;
};
