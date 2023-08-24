
import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText } from './CustomTexts';
import { staggerContainer, fadeIn } from '../utils/motion';

const Slogan = () => (
  <section className={`${styles.paddings} bg-white relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'linear', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TitleText title={<>Fertiliseur de <span className="text-[#6a79ff]">l'entrepreneuriat africain</span>, pour la diaspora.</>} />
        <div className="mt-[20px] text-justify text-[18px]">
          Account's incarne une plateforme innovante et engagée. Notre objectif est de fertiliser les aspirations entrepreneuriales des membres de la diaspora africaine en facilitant leurs investissements et en renforçant leur impact dans leur pays d'origine.
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn('right', 'linear', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <img
          src="/fertiliseur.png"
          alt="get-started"
          className="w-[80%] h-auto rounded-3xl object-contain "
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Slogan;
