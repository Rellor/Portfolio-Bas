import "./embed-block.scss";

const DEFAULT_WIDTH = 206;
const DEFAULT_HEIGHT = 165;

/**
 * A third party embed, currently used for the itch.io game players. Which
 * origins may be framed is restricted by the Content Security Policy in
 * next.config.js.
 *
 * @param {object} props
 * @param {string} props.src Embed url.
 * @param {string} props.title Describes the embed for screen readers.
 * @param {{href: string, label: string}} [props.fallback] Shown when the
 *   browser cannot render the frame.
 * @param {number} [props.width]
 * @param {number} [props.height]
 */
export default function EmbedBlock({
  src,
  title,
  fallback,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
}) {
  return (
    <div className="embed">
      <iframe
        src={src}
        title={title}
        width={width}
        height={height}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      >
        {fallback ? (
          <a href={fallback.href} target="_blank" rel="noopener noreferrer">
            {fallback.label}
          </a>
        ) : null}
      </iframe>
    </div>
  );
}
