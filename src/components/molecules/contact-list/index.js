import Link from "@/components/atoms/link";

import "./contact-list.scss";

/**
 * The list of ways to reach me.
 *
 * @param {object} props
 * @param {{label: string, value: string, href: string}[]} props.entries
 */
export default function ContactList({ entries }) {
  return (
    <ul className="contactList">
      {entries.map(({ label, value, href }) => (
        <li key={href}>
          <Link href={href} variant="body">
            {label}: <span className="contactList__value">{value}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
