import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: '#fff'
      }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white font-bold text-[30px]">{experience.title}</h3>
        <p className="text-gray-300 font-semibold text-[18px] ">{experience.company_name}</p>
      </div>
      <ul className="mt-5 list-disc ml-1 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[15px] pl-1 tracking-wide">
            {point}
          </li>
        ))}

      </ul>

    </VerticalTimelineElement>

  );
}



const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant}>

        <p className={styles.sectionSubText}>What Have I done So Far</p>
        <h2 className={styles.sectionHeadText}>Experience:</h2>

      </motion.div>
      <div className="mt-20 flex flex-col ">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience ${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>

      </div>

    </>
  )
}

export default SectionWrapper(Experience, "work");