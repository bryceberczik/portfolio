import byteclub from "../images/byteclub.png";
import stellabyte from "../images/stellabyte.png";
import ragbot from "../images/ragbot.png";
import projectc from "../images/projectc.png";

import MobileLink from "./MobileLink";

export const MobileHoverImageLinks = () => {
  return (
    <section className="p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        <MobileLink
          heading="Byte Club"
          subheading="AI-driven food rewards start up"
          imgSrc={byteclub}
          href="https://docs.google.com/presentation/d/1iOjyOw4eTKpZ7pYSLlNu0btY9SRFsKFRHFo1cMeUjzg/edit"
          link=""
        />
        <MobileLink
          heading="Stellabyte"
          subheading="Cloud storage with a cosmic twist using AWS"
          imgSrc={stellabyte}
          href="https://stellabyte-production.up.railway.app"
          link="https://github.com/ZVKubajak/Stellabyte"
        />
        <MobileLink
          heading="RAG Chatbot"
          subheading="A vector database–powered chatbot for semantic responses."
          imgSrc={ragbot}
          href="https://rag-chatbot-production-ffa2.up.railway.app/"
          link="https://github.com/ZVKubajak/rag-chatbot"
        />
        <MobileLink
          heading="Project C"
          subheading="My very first app. Used for helping with my finances."
          imgSrc={projectc}
          href="https://bryceberczik.github.io/project-c/"
          link="https://github.com/bryceberczik/project-c"
        />
      </div>
    </section>
  );
};
