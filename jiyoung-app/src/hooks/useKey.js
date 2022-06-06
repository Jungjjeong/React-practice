import { useCallback, useEffect } from 'react';

const useKey = (targetKey, handle, event = 'keydown') => {
  const handleKey = useCallback(
    ({ key }) => {
      if (key === targetKey) {
        handler();
      }
    },
    [targetKey, handler]
  );

  useEffect(() => {
    window.addEventListener(event, handleKey);

    return () => {
      window.removeEventListener(event, handleKey);
    };
  }, [event, targetKey, handleKey]);
};

export default useKey;
