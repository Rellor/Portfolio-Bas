import "./crt-overlay.scss";

/**
 * A full-screen "old monitor" effect: scanlines, a darkened rim and a faint
 * flicker. It never intercepts clicks, so the site stays usable underneath.
 *
 * @param {object} props
 * @param {boolean} props.enabled
 */
export default function CrtOverlay({ enabled }) {
  if (!enabled) return null;

  return <div className="crtOverlay" aria-hidden="true" />;
}
