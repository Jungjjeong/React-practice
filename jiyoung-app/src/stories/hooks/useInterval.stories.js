import { useState } from "react";
import useInterval from "../../hooks/useInterval";

export default {
  title: "Hook/useInterval",
};

export const Default = () => {
  const [array, setArray] = useState([]);
  const clear = useInterval(() => {
    setArray([...array, "Plus"]);
  }, 1000);

  return (
    <>
      <div>useInterval Test</div>
      <div>{array}</div>
      <button onClick={clear}>Clear</button>
    </>
  );
};
