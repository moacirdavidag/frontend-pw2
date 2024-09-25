import { useState, useEffect } from "react";
import breakpoints from "../utils/breakpoints";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= Number(breakpoints.sm.replace("px", "")));
  };

  useEffect(() => {
    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
