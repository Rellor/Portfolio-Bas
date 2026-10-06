"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * Like `useStoredSetting`, but for one value out of a fixed list, e.g. a
 * colour name. Anything saved that is not in `allowed` is ignored, so an old
 * or edited value can never break the page.
 *
 * @param {string} key localStorage key.
 * @param {string} defaultValue
 * @param {string[]} allowed
 * @returns {[string, (value: string) => void]}
 */
export default function useStoredChoice(key, defaultValue, allowed) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(key);
      if (stored !== null && allowed.includes(stored)) setValue(stored);
    } catch {
      // Storage unavailable: keep the default.
    }
    // `allowed` is a constant list, so it is left out on purpose.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const update = useCallback(
    (next) => {
      if (!allowed.includes(next)) return;
      setValue(next);
      try {
        window.localStorage.setItem(key, next);
      } catch {
        // The choice still works for this visit.
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key],
  );

  return [value, update];
}
