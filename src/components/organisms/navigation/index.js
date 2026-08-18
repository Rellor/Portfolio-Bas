import Text from "@/components/atoms/text";

import "./navigation.scss";

/**
 * The bar across the top of the screen.
 *
 * @param {object} props
 * @param {string} props.title
 */
export default function Navigation({ title }) {
  return (
    <nav className="navigation">
      <ul className="navlist">
        <li className="name">
          <Text>{title}</Text>
        </li>
      </ul>
    </nav>
  );
}
