
import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText } from './CustomTexts';
import { staggerContainer, fadeIn } from '../utils/motion';

const Vision = () => (
  <section className={`${styles.paddings} bg-white relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-2`}
    >
      <motion.div
        variants={fadeIn('right', 'linear', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <img
          src="/vision.svg"
          alt="notre vision"
          className="w-[70%] h-auto rounded-3xl object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('right', 'linear', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TitleText title={<><span className="text-[#6a79ff]">La vision</span> qui est la Nôtre</>} />
        <div className="mt-[20px] text-justify text-[18px]">
          L'ambition d'Account's réside dans sa volonté de donner aux africains de la diaspora les moyens d'entreprendre dans n'importe quel pays africain, avec une simplicité maximale et la certitude qu'une équipe de confiance est sur place pour assurer une traçabilité optimale et renforcer la confiance.
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Vision;
