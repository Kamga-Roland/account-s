
import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText } from './CustomTexts';
import { staggerContainer, fadeIn } from '../utils/motion';

const Mission = () => (
  <section className={`${styles.paddings}  relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto`}
    >
      <div className="text-center mb-10">
        <TitleText title={<>Nos <span className="text-[#6a79ff]">missions</span></>} />
      </div>
      <div className=" flex lg:flex-row flex-col gap-8">
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 relative"
        >
          <div className="justify-center">
            <img
              src="mission1.svg"
              alt="mission1"
              className="w-30 h-20 mb-10 px-[30%]"
            />
            <h4 className=" font-bold text-justify sm:leading-[40.32px] leading-[36.32px] text-[#6a79ff]">
              Redonner confiance et assurance aux entrepreneurs internationaux désirant
              investir dans leur pays.
            </h4>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4  relative"
        >
          <img
            src="mission2.svg"
            alt="mission2"
            className="w-30 h-20 mb-10 px-auto"
          />
          <div>
            <h4 className="font-bold text-justify sm:leading-[40.32px] leading-[36.32px] text-[#6a79ff]">
              Garantir une meilleure traçabilité aux investisseurs de la
              diaspora sur leurs business au pays
            </h4>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 relative"
        >
          <img
            src="mission3.svg"
            alt="mission3"
            className="w-30 h-20 mb-10 px-auto"
          />
          <div>
            <h4 className="font-bold text-justify sm:leading-[30.32px] leading-[36.32px] text-[#6a79ff]">
              Booster les business des entrepreneurs de la diaspora au pays tout
              en allégeant leur charge de travail
            </h4>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Mission;
