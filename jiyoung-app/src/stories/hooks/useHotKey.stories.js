import useHotKey from '../../hooks/useHotKey';
import { useState } from 'react';

export default {
  title: 'Hook/useHotKey',
};

export const Default = () => {
  const [value, setValue] = useState('');
  const hotkeys = [
    {
      global: true,
      combo: 'meta+shift+k',
      onKeyDown: (e) => {
        alert('meta+shift+k');
      },
    },
    {
      combo: 'esc',
      onKeyDown: (e) => {
        setValue('');
      },
    },
  ];

  const { handleKeyDown } = useHotKey(hotkeys);

  return (
    <div>
      <div>useHotKey 테스트</div>
      <input
        onKeyDown={handleKeyDown}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
