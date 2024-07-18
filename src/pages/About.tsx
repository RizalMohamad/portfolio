import { IconLeaf } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { SectionHeader } from "../components/SectionHeader";
import { SectionMotion } from "../common/motion/Section";

export const About = () => {
  const { section } = SectionMotion;
  const sectionDescription = "A short story of me";
  return (
    <motion.section initial={section.initial} animate={section.animated} transition={section.transition} className="space-y-6">
      <SectionHeader icon={<IconLeaf />} label="About" description={sectionDescription} />
      <div className="flex gap-2 text-md lg:text-xl font-medium">
        <h2 className="font-semibold">Hello, i'm Rizal</h2>
        <div className="ml-1 animate-waving-hand">👋</div>
      </div>
      <p>I am a 6th semester Information Technology student at Universitas Insan Pembangunan Indonesia. Currently, I live in Tangerang, Banten. </p>
      <p>
        I am a Frontend Developer who uses JavaScript programming language and can work with popular frameworks such as React JS, Next JS, Vue JS, and Nuxt JS. I am enthusiastic about creating clean and efficient code, automating testing
        processes, and applying modern design principles for intuitive user experiences. With my technical skills, I can create high-performance and elegant solutions that are easy to maintain and enhance. I am always eager to learn new
        technologies and improve my skills."
      </p>
    </motion.section>
  );
};
