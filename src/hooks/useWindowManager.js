"use client";

import { useCallback, useState } from "react";

const createState = (openIds) => ({
  openIds: [...openIds],
  zIndexes: {},
  topZIndex: 0,
  minimizedIds: [],
  maximizedIds: [],
});

const without = (list, id) => list.filter((item) => item !== id);

const bringToFront = (state, id) => {
  const topZIndex = state.topZIndex + 1;

  return {
    ...state,
    topZIndex,
    zIndexes: { ...state.zIndexes, [id]: topZIndex },
  };
};

/**
 * Keeps track of which windows are open, minimized or maximized and which one
 * is on top.
 *
 * @param {string[]} [initialOpenIds] Windows that are open on first load.
 */
export default function useWindowManager(initialOpenIds = []) {
  const [state, setState] = useState(() => createState(initialOpenIds));

  // Opening a window also brings back one that was minimized.
  const open = useCallback((id) => {
    setState((current) =>
      bringToFront(
        {
          ...current,
          openIds: current.openIds.includes(id)
            ? current.openIds
            : [...current.openIds, id],
          minimizedIds: without(current.minimizedIds, id),
        },
        id,
      ),
    );
  }, []);

  const close = useCallback((id) => {
    setState((current) => ({
      ...current,
      openIds: without(current.openIds, id),
      minimizedIds: without(current.minimizedIds, id),
      maximizedIds: without(current.maximizedIds, id),
    }));
  }, []);

  const focus = useCallback((id) => {
    setState((current) =>
      current.zIndexes[id] === current.topZIndex
        ? current
        : bringToFront(current, id),
    );
  }, []);

  const minimize = useCallback((id) => {
    setState((current) => ({
      ...current,
      minimizedIds: current.minimizedIds.includes(id)
        ? current.minimizedIds
        : [...current.minimizedIds, id],
    }));
  }, []);

  const restore = useCallback((id) => {
    setState((current) =>
      bringToFront(
        { ...current, minimizedIds: without(current.minimizedIds, id) },
        id,
      ),
    );
  }, []);

  const toggleMaximize = useCallback((id) => {
    setState((current) =>
      bringToFront(
        {
          ...current,
          maximizedIds: current.maximizedIds.includes(id)
            ? without(current.maximizedIds, id)
            : [...current.maximizedIds, id],
        },
        id,
      ),
    );
  }, []);

  /** Back to how the site looks on first load. */
  const reset = useCallback(() => {
    setState(createState(initialOpenIds));
  }, [initialOpenIds]);

  // The window in front. Nothing is "active" until something was clicked,
  // because until then every window shares the same z-index.
  const visible = state.openIds.filter((id) => !state.minimizedIds.includes(id));
  const topVisible = visible.reduce(
    (top, id) =>
      (state.zIndexes[id] ?? 0) >= (state.zIndexes[top] ?? 0) ? id : top,
    visible[0],
  );
  const activeId = (state.zIndexes[topVisible] ?? 0) > 0 ? topVisible : null;

  return {
    openIds: state.openIds,
    activeId,
    isOpen: (id) => state.openIds.includes(id),
    isMinimized: (id) => state.minimizedIds.includes(id),
    isMaximized: (id) => state.maximizedIds.includes(id),
    zIndexOf: (id) => state.zIndexes[id] ?? 0,
    open,
    close,
    focus,
    minimize,
    restore,
    toggleMaximize,
    reset,
  };
}
