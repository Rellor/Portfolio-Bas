import Image from "next/image";

import "./media-block.scss";

const DEFAULT_WIDTH = 400;
const DEFAULT_HEIGHT = 228;

/**
 * A screenshot or a video inside a project window.
 *
 * @param {object} props
 * @param {"image"|"video"} [props.type]
 * @param {string} props.src Path inside `/public`.
 * @param {string} [props.alt] Required for images.
 * @param {number} [props.width]
 * @param {number} [props.height]
 */
export default function MediaBlock({
  type = "image",
  src,
  alt = "",
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
}) {
  if (type === "video") {
    return (
      <video width={width} height={height} controls className="image">
        <source src={src} type="video/mp4" />
        <p>Sorry, your browser does not support videos.</p>
      </video>
    );
  }

  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      className="image"
    />
  );
}
