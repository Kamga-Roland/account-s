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
      className={`${styles.innerWidth} mx-auto mt-20 flex lg:flex-row flex-col-reverse gap-3 lg:gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.4, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TitleText
          title={<><span className="text-[#6a79ff]">Booster son business</span> au pays n'a jamais été aussi simple !</>}
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
        <div className="object-contain justify-center flex-col" style={{ opacity: '1' }}>
          <div
            className="youtube"
          >
            <iframe
              frameBorder="0"
              allowfullscreen="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              title="account's agency"
              src="https://www.youtube.com/embed/NyiIZP6pwhk?enablejsapi=1&amp;origin=https%3A%2F%2Faccount-s-xrm8.vercel.app&amp;widgetid=1"
              id="widget2"
              className="youtube-iframe"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
