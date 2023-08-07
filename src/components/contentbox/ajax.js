import "./contentbox.scss";
import styles from "@/app/page.module.scss";
import Image from "next/image";
import TextBlock from "../textblock";

export default function AjaxBox({}) {
  return (
    <div className="contentBox">
      <Image
        src="/ajax/WorkContentAjax1.png"
        width={400}
        height={228}
        alt="Ajax work image 1"
        className="image"
      />
      <TextBlock
        content={
          <p>
            During my long internship, I had the opportunity to work on Ajax
            business, which led to significant growth in my programming skills.
            Afterwards, I could apply these skills to the portfolio website you
            are currently viewing!
          </p>
        }
      />

      <Image
        src="/ajax/WorkContentAjax2.2.png"
        width={400}
        height={228}
        alt="Ajax work image 2"
        className="image"
      />

      <TextBlock
        content={
          <p>
            In this project, I learned how to set up a React project using
            atomic design. I also worked on creating React components that
            interact with an API. To keep the CSS organized, we used SASS, which
            allows you to add extra structure to your project.
          </p>
        }
      />

      <TextBlock
        content={
          <p>
            Unfortunately, I can&apos;t show much of it yet due to the project
            still being unreleased. If you&apos;re interested in my approach or
            any other technical knowledge I gained during this project, I&apos;d
            be happy to answer questions about it in a conversation
          </p>
        }
      />
    </div>
  );
}
