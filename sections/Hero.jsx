
import { motion } from 'framer-motion';
import YouTube from 'react-youtube';
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
      className={`${styles.innerWidth} mx-auto mt-20 flex lg:flex-row flex-col-reverse gap-3 lg:gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.4, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TitleText
          title={<><span className="text-[#6a79ff]">Booster Son Business</span> au pays n'a jamais été Aussi Simple !</>}
        />
        <div className="mt-[20px] text-justify text-[18px]">
          Entrepreneurs de la diaspora, donnez une nouvelle dimension à votre
          business. Gagner en rentabilité grâce à la solution Account's, l'outil
          de contrôle et de supervision qui répond à votre besoin de confiance
          et de traçabilité au pays.
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.4, 1)}
        className="flex-[0.95] mx-auto object-contain flex justify-center flex-col"
      >
        <YouTube
          videoId="NyiIZP6pwhk"
          className="youtube"
          style={{
            borderRadius: '16px', width: '100%', height: 'auto',
          }}
          onReady={(event) => event.target.pauseVideo()}
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
