"use client";

import { useCallback, useState } from "react";

const bringToFront = (state, id) => {
  const topZIndex = state.topZIndex + 1;

  return {
    ...state,
    topZIndex,
    zIndexes: { ...state.zIndexes, [id]: topZIndex },
  };
};

/**
 * Keeps track of which windows are open and which one is on top.
 *
 * @param {string[]} [initialOpenIds] Windows that are open on first load.
 */
export default function useWindowManager(initialOpenIds = []) {
  const [state, setState] = useState({
    openIds: [...initialOpenIds],
    zIndexes: {},
    topZIndex: 0,
  });

  const open = useCallback((id) => {
    setState((current) =>
      bringToFront(
        {
          ...current,
          openIds: current.openIds.includes(id)
            ? current.openIds
            : [...current.openIds, id],
        },
        id,
      ),
    );
  }, []);

  const close = useCallback((id) => {
    setState((current) => ({
      ...current,
      openIds: current.openIds.filter((openId) => openId !== id),
    }));
  }, []);

  const focus = useCallback((id) => {
    setState((current) =>
      current.zIndexes[id] === current.topZIndex
        ? current
        : bringToFront(current, id),
    );
  }, []);

  return {
    isOpen: (id) => state.openIds.includes(id),
    zIndexOf: (id) => state.zIndexes[id] ?? 0,
    open,
    close,
    focus,
  };
}
