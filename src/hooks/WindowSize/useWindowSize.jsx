import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(undefined);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize]);

  return windowSize;
};

export default useWindowSize;
