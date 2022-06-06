import { useState } from 'react';
import Progress from '../../components/base/Progress';

export default {
  title: 'Component/Progress',
  component: Progress,
  argTypes: {
    value: { defaultValue: 10, control: 'number' },
  },
};

export const Default = (args) => {
  const [value, setValue] = useState(20);

  return (
    <div>
      <button onClick={() => setValue(100)}>Change Value</button>
      <Progress {...args} value={value} />
    </div>
  );
};
