import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto flex items-center justify-center overflow-hidden'>
      {/* Grid Background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundColor: '#0f0f23',
          backgroundImage: `
            linear-gradient(45deg, rgba(139, 92, 246, 0.08) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(139, 92, 246, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      <div className={`${styles.paddingX} absolute inset-0 max-w-7xl top-[120px] mx-auto flex flex-row items-start gap-6`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
          {/* Add your hero content */}
        </div>
        <div className={`${styles.heroHeadText} text-white-100 `}> Hi , I'm&nbsp;<span className="text-[#915eff]">Kedhar Bhoomani</span>
          <p className={`${styles.heroSubText} mt-2 text-white`}> I am a B.Tech student  I am a passionate learner who enjoys developing skills in various areas of Computer Science, including Web Development, Machine Learning, and Artificial Intelligence. This portfolio showcases my skillset and the projects I have worked on in recent months.</p>

        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-5 bottom-8 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[32px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
            <motion.dev
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className='w-3 h-3 rounded-full bg-white mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero;