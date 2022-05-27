import { useCallback, useEffect, useRef, useState } from "react";

const useHover = () => {
  const [state, setState] = useState(false);
  const ref = useRef(null);

  const handleMouseOver = useCallback(() => setState(true), []);
  const handleMouseOut = useCallback(() => setState(false), []);

  useEffect(() => {
    const element = ref.current;

    if (element) {
      element.addEventListener("mouseover", handleMouseOver);
      element.addEventListener("mouseOut", handleMouseOut);

      return () => {
        element.removeEventListener("mouseover", handleMouseOver);
        element.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [ref, handleMouseOver, handleMouseOut]);

  return [ref, state];
};

export default useHover;
