import Image from "next/image";

import Text from "@/components/atoms/text";

import "./profile-card.scss";

/**
 * A photo with a few lines of details under it.
 *
 * @param {object} props
 * @param {{src: string, alt: string}} props.photo
 * @param {{label: string, value: string}[]} [props.details]
 */
export default function ProfileCard({ photo, details = [] }) {
  return (
    <>
      <Image
        src={photo.src}
        alt={photo.alt}
        width={250}
        height={250}
        className="profileCard__photo"
      />
      {details.map(({ label, value }) => (
        <Text key={label} variant="body">
          {label}: {value}
        </Text>
      ))}
    </>
  );
}
