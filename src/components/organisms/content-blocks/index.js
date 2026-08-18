import MediaBlock from "@/components/molecules/media-block";
import TextBlock from "@/components/molecules/text-block";

import "./content-blocks.scss";

// Every block type a project can use. Add a molecule here to make it
// available to the content files.
const BLOCK_COMPONENTS = {
  text: TextBlock,
  image: MediaBlock,
  video: MediaBlock,
};

/**
 * Renders the body of a project window from a list of content blocks.
 *
 * @param {object} props
 * @param {{type: keyof BLOCK_COMPONENTS}[]} props.blocks
 */
export default function ContentBlocks({ blocks = [] }) {
  return (
    <div className="contentBlocks">
      {blocks.map((block, index) => {
        const Component = BLOCK_COMPONENTS[block.type];

        if (!Component) {
          return null;
        }

        return <Component key={`${block.type}-${index}`} {...block} />;
      })}
    </div>
  );
}
