import { motion } from 'framer-motion';
import { LeaveCard } from '../components/LeaveCard';
import { HomeMotion } from '../common/motion/Home';
import { Link } from 'react-router-dom';

export const Home = () => {
  const { description, resume, wrapImg, image } = HomeMotion;
  return (
    <section className="flex flex-col lg:flex-row h-full px-6 py-4 items-center min-h-[100vh] gap-4">
      <motion.div
        className="flex flex-1 flex-col space-y-6 items-center md:items-start"
        initial={description.initial}
        animate={description.animated}
        transition={description.transition}
      >
        <div className="flex gap-2 text-md lg:text-2xl font-medium font-sora">
          <span>Hi there!</span>{' '}
          <div className="ml-1 animate-waving-hand">👋</div>
        </div>
        <h1 className="text-white font-extrabold text-4xl md:text-6xl">
          Rizal Mohamad
        </h1>
        <h2 className="text-teal-500 font-bold text-xl md:text-3xl">
          Frontend Developer
        </h2>
        <p className="text-center md:text-start text-xs md:text-base">
        I am a frontend developer who uses JavaScript programming language (React Js and Next Js)
        </p>
        <Link to="#">
          <motion.div
            initial={resume.initial}
            animate={resume.animated}
            transition={resume.transition}
            className="rounded-3xl w-max border px-4 py-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-black hover:border-teal-500"
          >
            Download Resume
          </motion.div>
        </Link>
      </motion.div>
      <motion.div
        initial={wrapImg.initial}
        animate={wrapImg.animated}
        transition={wrapImg.transition}
        className="flex flex-1 items-center justify-center bg-gradient-to-bl from-emerald-500 via-emerald-900 to-black overflow-hidden gap-20"
      >
        <motion.img
          initial={image.initial}
          animate={image.animated}
          transition={image.transition}
          src="/Foto_Rizal-removebg1.png"
          alt="profile"
          width="90%"
          height="100%"
        />
      </motion.div>

      <LeaveCard label="Frontend Dev" />
    </section>
  );
};
