import React from "react";
import { Tilt } from "react-tilt";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index,
  name,
  description,
  tags,
  image,
  source_code_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-white p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end card-img_hover">
            <div onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />


            </div>

          </div>

        </div>
        <div className="mt-5">
          <h3 className="text-black font-bold text-[24px]">{name}</h3>
          <p className="text-black mt-2 text-[15px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-4 ">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}

        </div>
      </Tilt>
    </motion.div>
  )


}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant}>

        <p className={styles.sectionSubText}>My Works</p>
        <h2 className={styles.sectionHeadText}>Projects:</h2>

      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-gray-300 text-[19px] leading-[30px] max-w-3xl"
        >
          Following Projects are some real time projects that I have worked on and some basic projects for the knowledge of the technology
          While building these projects I have learned a lot about these technologies , how to implement them correctly and making out the best result or output ,these projects
          are proof that I am a learner who just likes to learn about tech and grow through them and I am always looking forward to learn more and make the best use of it.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(Works, "");