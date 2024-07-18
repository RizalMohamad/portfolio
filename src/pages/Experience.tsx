import { motion } from 'framer-motion';
import { IconClockPlay } from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { CommonCard } from '../components/CommonCard';

export const Experience = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'My proffesional career journey';
  // mockup experience data
  const experiences = [
    {
      id: 1,
      image: 'https://cdn.prod.website-files.com/61af164800e38c4f53c60b4e/61af164800e38c11efc60b6d_RevoU.svg',
      name: 'Revo U',
      position: 'Frontend Developer',
      startDate: 'Feb 2024',
      endDate: 'Jul 2024',
      duration: '4 Months',
      location: 'Jakarta',
    }
  ];
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconClockPlay />}
        label="Experience"
        description={sectionDescription}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {experiences.map((experience) => (
          <CommonCard key={experience.id} {...experience} />
        ))}
      </div>
    </motion.section>
  );
};
