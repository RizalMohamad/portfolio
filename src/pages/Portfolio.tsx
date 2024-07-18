import { motion } from 'framer-motion';
import { IconBrandCodepen } from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';

export const Portfolio = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'List of my portfolio projects';
  const portfolios = [
    {
      id: 1,
      name: 'Todo List',
      image: '/todo_website.png',
      link: 'https://rizalmohamad.github.io/todo/',
    },
    {
      id: 2,
      name: 'Portfolio Project',
      image: '/portfolio_website.png',
      link: '#',
    },
    {
      id: 3,
      name: 'Dashboard Website',
      image: '/dashboard_website.png',
      link: 'https://kampus-merdeka-software-engineering.github.io/km-feb24-jakarta-21/',
    },
  ];
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconBrandCodepen />}
        label="Portfolio"
        description={sectionDescription}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolios.map((portfolio) => (
          <ProjectCard key={portfolio.id} {...portfolio} />
        ))}
      </div>
    </motion.section>
  );
};
