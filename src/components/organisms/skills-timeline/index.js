import "./skills-timeline.scss";

/**
 * A grid of the tools used per year. A filled block means the tool shows up
 * in that year. It is a real table, so screen readers get the same answer.
 *
 * @param {object} props
 * @param {number[]} props.years Column headings, oldest first.
 * @param {{id: string, title: string, color: string, skills: {name: string, years: number[]}[]}[]} props.groups
 */
export default function SkillsTimeline({ years, groups }) {
  return (
    <div className="skills">
      <table className="skills__table">
        <caption className="skills__caption">
          Tools used per year, based on GitHub
        </caption>
        <thead>
          <tr>
            <th scope="col" className="skills__corner">
              <span className="skills__sr">Tool</span>
            </th>
            {years.map((year) => (
              <th key={year} scope="col" className="skills__year">
                {String(year).slice(2)}
                <span className="skills__sr">{year}</span>
              </th>
            ))}
          </tr>
        </thead>
        {groups.map((group) => (
          <tbody key={group.id} className={`skills__group skills__group--${group.color}`}>
            <tr>
              <th scope="colgroup" colSpan={years.length + 1} className="skills__groupTitle">
                {group.title}
              </th>
            </tr>
            {group.skills.map((skill) => (
              <tr key={skill.name}>
                <th scope="row" className="skills__name">
                  {skill.name}
                </th>
                {years.map((year) => {
                  const used = skill.years.includes(year);
                  return (
                    <td
                      key={year}
                      className={used ? "skills__cell skills__cell--on" : "skills__cell"}
                      title={used ? `${skill.name} in ${year}` : undefined}
                    >
                      <span className="skills__sr">{used ? "used" : "not used"}</span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        ))}
      </table>
    </div>
  );
}
