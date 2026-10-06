import "./definition-list.scss";

/**
 * Rows of "label: value", for example a list of tools.
 *
 * @param {object} props
 * @param {{label: string, value: string}[]} props.rows
 */
export default function DefinitionList({ rows }) {
  return (
    <dl className="definitionList">
      {rows.map(({ label, value }) => (
        <div key={label} className="definitionList__row">
          <dt className="definitionList__label">{label}</dt>
          <dd className="definitionList__value">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
