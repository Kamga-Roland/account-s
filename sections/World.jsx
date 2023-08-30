
import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} bg-white relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TitleText
        title={
          <>De <span className="text-[#6a79ff]">nombreuses entités</span> à travers le monde nous Font Confiance.</>
        }
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative md:mt-[120px] flex w-full md:h-[200px]"
      >
        <ul className="md:flex md:mx-auto md:space-x-3">
          <li className="w-20 ml-20 md:w-[20%] mt-5 md:mr-[8%] h-40 md:h-[50%]">
            <img src="/cinaf.png" className=" w-full h-full object-contain" />
          </li>
          <li className="md:w-[70%] h-40 md:h-[70%]">
            <img src="/AFROPN.png" className=" w-full h-full object-contain" />
          </li>
          <li className="md:w-[70%] h-40 md:h-[70%]">
            <img src="/50AFC.png" className=" w-full h-full object-contain" />
          </li>
          <li className="md:w-[70%] md:h-[70%]">
            <img src="/MbC.png" className=" w-full h-full object-contain" />
          </li>
          <li className=" md:w-[25%] mt-4 h-40 md:h-[50%]">
            <img src="/NADOSSO.png" className=" w-full h-full object-contain" />
          </li>
        </ul>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
