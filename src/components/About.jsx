import React from "react";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-[350px]'>
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div options={{
        max: 45,
        scale: 1,
        speed: 450
      }} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center ">{title}</h3>
      </div>

    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="m-2 p-4"
      >

        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview:</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className=" mx-3 p-2 mt-4 max-w-7xl text-white text-[20px] leading-[30px]"
      >
        Hello , Everyone I am Kedhar Bhoomani from Gitam University , I am a 4th
        Year Btech Student in CSE Branch , I am a Web Developer who uses JS
        Frameworks ReactJs , Nextjs and TailwindCss for frontend development and
        for backend Development I use Nodejs & Express Js . I am a Web Deveopler
        Intern at Revive EcoTech ,I have worked on Multiple projects like
        Calorie Based tracker , Movie app and Sri Badrinath Enterprises Website
        (Which is an business startup of cable tray in Secunderabad). If anyone
        reading this portfolio and want to work with me or want to give me work
        then please contact me at my email address : bkedhar10@gmail.com. please
      </motion.p>
      <div className=" mt-2 py-2 flex flex-wrap gap-10 mt-30 ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
