import Icon from "@/components/atoms/icon";

import "./skills-overview.scss";

/**
 * The tools that were used, grouped, each with a small pixel icon.
 *
 * @param {object} props
 * @param {{id: string, title: string, color: string, skills: {name: string, icon?: {src: string, alt: string}}[]}[]} props.groups
 */
export default function SkillsOverview({ groups }) {
  return (
    <div className="skills">
      {groups.map((group) => (
        <section key={group.id} className={`skills__group skills__group--${group.color}`}>
          <h3 className="skills__groupTitle">{group.title}</h3>
          <ul className="skills__list">
            {group.skills.map((skill) => (
              <li key={skill.name} className="skills__item">
                {skill.icon ? (
                  <Icon
                    src={skill.icon.src}
                    alt={skill.icon.alt}
                    size={24}
                    className="skills__icon"
                  />
                ) : null}
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
