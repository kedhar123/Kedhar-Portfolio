import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
                style={{
                    backgroundColor: '#0f0f23',
                    backgroundImage: `
                        linear-gradient(45deg, rgba(139, 92, 246, 0.08) 1px, transparent 1px),
                        linear-gradient(-45deg, rgba(139, 92, 246, 0.08) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px'
                }}
            >
                <span className='hash-span' id={idName}>
                    &nbsp;
                </span>

                <Component />
            </motion.section>
        );
    };

export default StarWrapper;