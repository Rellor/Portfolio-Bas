"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * A boolean setting that is remembered in localStorage. It starts on the
 * default so server and client render the same markup, then picks up the saved
 * value after mount. Storage can be blocked, so every access is guarded.
 *
 * @param {string} key localStorage key.
 * @param {boolean} [defaultValue]
 * @returns {[boolean, (value: boolean) => void]}
 */
export default function useStoredSetting(key, defaultValue = false) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(key);
      if (stored !== null) setValue(stored === "true");
    } catch {
      // Storage unavailable: keep the default.
    }
  }, [key]);

  const update = useCallback(
    (next) => {
      setValue(next);
      try {
        window.localStorage.setItem(key, String(next));
      } catch {
        // The setting still works for this visit.
      }
    },
    [key],
  );

  return [value, update];
}
