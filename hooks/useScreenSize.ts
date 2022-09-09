import { useState, useEffect } from "react";

function getWindowDimensions() {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  return {
    width: 0,
    height: 0,
  };
}

export default function useScreenSize() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    width: {
      isLg: windowDimensions.width > 1023,
      isMd: windowDimensions.width > 767,
      isSm: windowDimensions.width > 639,
    },
    height: {
      isSm: windowDimensions.height > 639,
    },
  };
}
