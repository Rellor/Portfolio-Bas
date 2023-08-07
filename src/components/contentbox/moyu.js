import "./contentbox.scss";
import styles from "@/app/page.module.scss";
import Image from "next/image";
import TextBlock from "../textblock";

export default function MoyuBox({}) {
  return (
    <div className="contentBox">
      <Image
        src="/moyu/WorkContentMoyu.png"
        width={400}
        height={228}
        alt="Moyu work image 1"
        className="image"
      />
      <TextBlock
        content={
          <p>
            During my work period at Moyu, I gained experience in using Shopify,
            a powerful tool that enables sellers to build professional online
            webshops. My involvement in managing and optimizing the webshop
            contributed to enhancing the customer experience.
          </p>
        }
      />

      <Image
        src="/moyu/SanityImage.png"
        width={400}
        height={228}
        alt="Moyu work image 2"
        className="image"
      />

      <TextBlock
        content={
          <p>
            In collaboration with other talented programmers, I contributed to
            setting up a content management system using Sanity. Through
            effective teamwork and careful implementation, we managed and
            published content, significantly simplifying website functionality
            and content updates.
          </p>
        }
      />

      <Image
        src="/moyu/WorkContentMoyu3.png"
        width={400}
        height={228}
        alt="Moyu work image 3"
        className="image"
      />

      <TextBlock
        content={
          <p>
            I designed various aspects of the new website and developed them
            into a cohesive and attractive whole. My contribution to creating an
            engaging website positively impacted user interaction and
            strengthened the company&apos;s brand identity.
          </p>
        }
      />
    </div>
  );
}
