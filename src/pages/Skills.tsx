import { motion } from 'framer-motion';
import {
  IconCodeCircle,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandVue,
  IconBrandNuxt,
  IconBrandNodejs,
  IconBrandBootstrap,
  IconBrandTailwind,
  IconBrandSass,
  IconBrandMongodb,
  IconSql,
} from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { SkillCard } from '../components/SkillCard';

export const Skills = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'List of my skills';
  // mockup skills data
  const skills = [
    { label: 'React Js', icon: <IconBrandReact /> },
    { label: 'Next Js', icon: <IconBrandNextjs /> },
    { label: 'Vue Js', icon: <IconBrandVue /> },
    { label: 'Nuxt Js', icon: <IconBrandNuxt /> },
    { label: 'Node Js', icon: <IconBrandNodejs /> },
    { label: 'Sass', icon: <IconBrandSass /> },
    { label: 'Bootstrap CSS', icon: <IconBrandBootstrap /> },
    { label: 'Tailwind CSS', icon: <IconBrandTailwind /> },
    { label: 'MongoDB', icon: <IconBrandMongodb /> },
    { label: 'SQL', icon: <IconSql /> },
  ];
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconCodeCircle />}
        label="Skills"
        description={sectionDescription}
      />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
        {skills.map((skill) => (
          <SkillCard key={skill.label} icon={skill.icon} label={skill.label} />
        ))}
      </div>
    </motion.section>
  );
};
