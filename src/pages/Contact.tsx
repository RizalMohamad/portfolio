import { motion } from 'framer-motion';
import {
  IconBrandWhatsapp,
  IconBrandCampaignmonitor,
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandLinkedin,
  IconHeadphones,
} from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { ContactCard } from '../components/ContactCard';

export const Contact = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'Feel free to contact me';
  const iconStyles = { width: '100%', height: '100%' };
  const contacts = [
    {
      id: 1,
      name: 'Whatsapp',
      image: <IconBrandWhatsapp style={iconStyles} />,
      description: '+6281574663852',
      link: 'https://wa.me/+6281574663852',
    },
    {
      id: 2,
      name: 'Email',
      image: <IconBrandCampaignmonitor style={iconStyles} />,
      description: 'rizalmohamad740',
      link: 'mailto:rizalmohamad740@gmail.com',
    },
    {
      id: 3,
      name: 'Instagram',
      image: <IconBrandInstagram style={iconStyles} />,
      description: '_rizaa.l',
      link: 'https://www.instagram.com/_rizaa.l/',
    },
    {
      id: 4,
      name: 'Github',
      image: <IconBrandGithub style={iconStyles} />,
      description: 'RizalMohamad',
      link: 'https://github.com/RizalMohamad',
    },
    {
      id: 5,
      name: 'Linkedin',
      image: <IconBrandLinkedin style={iconStyles} />,
      description: 'moahamad-rizal-prasetyo',
      link: 'https://www.linkedin.com/in/mohamad-rizal-prasetyo-792350242/',
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
        icon={<IconHeadphones />}
        label="Contact"
        description={sectionDescription}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} {...contact} />
        ))}
      </div>
    </motion.section>
  );
};
