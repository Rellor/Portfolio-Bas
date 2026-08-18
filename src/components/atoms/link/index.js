import NextLink from "next/link";

import "./link.scss";

const EXTERNAL_PROTOCOLS = ["http:", "https:", "mailto:", "tel:"];

const isExternal = (href = "") =>
  EXTERNAL_PROTOCOLS.some((protocol) => href.startsWith(protocol));

/**
 * A link. External links always get `rel="noopener noreferrer"` so the target
 * page can never reach back into this one through `window.opener`.
 *
 * @param {object} props
 * @param {string} props.href
 * @param {React.ReactNode} props.children
 * @param {"inherit"|"body"|"accent"} [props.variant]
 * @param {boolean} [props.newTab] Open in a new tab. Defaults to true for
 *   external links.
 */
export default function Link({
  href,
  children,
  variant = "accent",
  newTab,
  className = "",
}) {
  const external = isExternal(href);
  const openInNewTab = newTab ?? external;
  const classNames = ["link", `link--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  const targetProps = openInNewTab
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  // next/link only adds value for internal routes; plain files and external
  // destinations are better served by a regular anchor.
  if (external || href?.startsWith("/oldWork")) {
    return (
      <a className={classNames} href={href} {...targetProps}>
        {children}
      </a>
    );
  }

  return (
    <NextLink className={classNames} href={href} {...targetProps}>
      {children}
    </NextLink>
  );
}
