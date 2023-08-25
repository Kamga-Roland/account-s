import { motion } from 'framer-motion';
import { TitleText } from './CustomTexts';
import { staggerContainer, zoomIn } from '../utils/motion';
import styles from '../styles';

const Readycontact = () => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.innerWidth} my-20 mx-auto text-center`}
  >
    <motion.div variants={zoomIn(0.5, 2)} className="p-6">
      <TitleText
        title={<>Prêt à insuffler une <span className="text-[#6a79ff]">nouvelle énergie</span> à votre business ?</>}
      />
      <div className="flex-row mt-10 justify-center md:flex">
        <p className="mt-10  text-[20px] mb-5">Contactez-nous dès maintenant.</p>
        <a
          href="/contact"
          className="px-6 py-1 m-9 text-center cursor-pointer bg-pink-500 text-white font-bold hover:bg-pink-400 rounded-2xl"
        >
          cliquez ici
        </a>
      </div>
    </motion.div>
  </motion.div>
);

export default Readycontact;
