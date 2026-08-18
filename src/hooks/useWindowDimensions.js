"use client";

import { useEffect, useState } from "react";

/**
 * Returns the current viewport size. Both values are `undefined` during server
 * rendering and on the first client render, so components fall back to their
 * desktop layout until the browser reports a size.
 *
 * @returns {{windowWidth: number|undefined, windowHeight: number|undefined}}
 */
export default function useWindowDimensions() {
  const [dimensions, setDimensions] = useState({
    windowWidth: undefined,
    windowHeight: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return dimensions;
}
