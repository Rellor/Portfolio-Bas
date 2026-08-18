import Image from "next/image";

const DEFAULT_SIZE = 70;

/**
 * A square pixel-art icon, as used by the desktop shortcuts.
 *
 * @param {object} props
 * @param {string} props.src Path inside `/public`.
 * @param {string} props.alt Description for screen readers.
 * @param {number} [props.size] Rendered width and height in pixels.
 */
export default function Icon({ src, alt, size = DEFAULT_SIZE, className }) {
  if (!src) return null;

  return (
    <Image
      src={src}
      width={size}
      height={size}
      alt={alt}
      className={className}
    />
  );
}
