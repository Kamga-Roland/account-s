
import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const Hero = () => (
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
          src="/proche.svg"
          alt="gestion a distance"
          className="w-[80%] h-auto rounded-3xl object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'linear', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TitleText title={<>Plus besoin de <span className="text-[#6a79ff]">Laisser un Proche</span> gérer vos Affaires au pays.</>} />
        <div className="mt-[20px] text-justify text-[18px]">
          Account's vous accompagne dans la gestion de votre business à distance , grâce à ses équipes
          compétentes, son réseau de partenaires locaux et internationaux et sa solution 100% digitalisée,
          fiable et complétement sécurisée.
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
