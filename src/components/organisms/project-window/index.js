import ContentBlocks from "@/components/organisms/content-blocks";
import EmbedBlock from "@/components/molecules/embed-block";
import TitleBlock from "@/components/molecules/title-block";
import Window from "@/components/organisms/window";

/**
 * A window describing one project, built entirely from its entry in
 * src/content/projects.jsx.
 *
 * @param {object} props
 * @param {import("@/content/projects").Project} props.project
 * @param {number} props.zIndex
 * @param {() => void} props.onClose
 * @param {() => void} props.onFocus
 */
export default function ProjectWindow({ project, zIndex, onClose, onFocus }) {
  const { title, windowTitle, heading, meta, layout, embed, blocks } = project;

  return (
    <Window
      title={windowTitle ?? title}
      layout={layout}
      zIndex={zIndex}
      onClose={onClose}
      onFocus={onFocus}
    >
      <TitleBlock title={heading ?? title} meta={meta} />
      {embed ? <EmbedBlock {...embed} /> : null}
      <ContentBlocks blocks={blocks} />
    </Window>
  );
}
