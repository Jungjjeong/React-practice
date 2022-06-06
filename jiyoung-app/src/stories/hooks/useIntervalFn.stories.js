import { useState } from 'react';
import useIntervalFn from '../../hooks/useIntervalFn';

export default {
  title: 'Hook/useIntervalFn',
};

export const Default = () => {
  const [array, setArray] = useState([]);
  const [run, clear] = useIntervalFn(() => {
    setArray([...array, 'Plus']);
  }, 1000);

  return (
    <>
      <div>useIntervalFn Test</div>
      <div>{array}</div>
      <button onClick={run}>1초마다 추가!</button>
      <button onClick={clear}>Clear</button>
    </>
  );
};
