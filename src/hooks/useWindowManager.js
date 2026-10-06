"use client";

import { useCallback, useState } from "react";

const createState = (openIds) => ({
  openIds: [...openIds],
  zIndexes: {},
  topZIndex: 0,
  minimizedIds: [],
  maximizedIds: [],
  // Windows snapped to one half of the desktop: { [id]: "left" | "right" }.
  snapped: {},
});

const without = (list, id) => list.filter((item) => item !== id);
const withoutKey = (object, id) =>
  Object.fromEntries(Object.entries(object).filter(([key]) => key !== id));

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
      snapped: withoutKey(current.snapped, id),
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

  // The maximize button also brings a snapped window back to its own size.
  const toggleMaximize = useCallback((id) => {
    setState((current) =>
      bringToFront(
        current.snapped[id]
          ? { ...current, snapped: withoutKey(current.snapped, id) }
          : {
              ...current,
              maximizedIds: current.maximizedIds.includes(id)
                ? without(current.maximizedIds, id)
                : [...current.maximizedIds, id],
            },
        id,
      ),
    );
  }, []);

  /** Snap a window to the "left" or "right" half, or "top" to maximize it. */
  const snap = useCallback((id, zone) => {
    setState((current) =>
      bringToFront(
        zone === "top"
          ? {
              ...current,
              snapped: withoutKey(current.snapped, id),
              maximizedIds: current.maximizedIds.includes(id)
                ? current.maximizedIds
                : [...current.maximizedIds, id],
            }
          : {
              ...current,
              maximizedIds: without(current.maximizedIds, id),
              snapped: { ...current.snapped, [id]: zone },
            },
        id,
      ),
    );
  }, []);

  /**
   * Bring the next (or previous) open window to the front, like Alt+Tab.
   * A minimized window comes back.
   */
  const cycle = useCallback((direction = 1) => {
    setState((current) => {
      const ids = current.openIds;
      if (ids.length === 0) return current;
      const frontId = ids
        .filter((id) => !current.minimizedIds.includes(id))
        .reduce(
          (top, id) =>
            (current.zIndexes[id] ?? 0) >= (current.zIndexes[top] ?? 0) ? id : top,
          null,
        );
      const from = frontId === null ? -1 : ids.indexOf(frontId);
      const next = ids[(from + direction + ids.length) % ids.length];
      return bringToFront(
        { ...current, minimizedIds: without(current.minimizedIds, next) },
        next,
      );
    });
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
    snapOf: (id) => state.snapped[id] ?? null,
    zIndexOf: (id) => state.zIndexes[id] ?? 0,
    open,
    close,
    focus,
    minimize,
    restore,
    toggleMaximize,
    snap,
    cycle,
    reset,
  };
}
