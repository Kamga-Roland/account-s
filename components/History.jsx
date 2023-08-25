
import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText } from './CustomTexts';
import { staggerContainer, fadeIn } from '../utils/motion';

const showMore = () => {
  const hide = document.getElementById('btn');
  const more = document.getElementById('notrehist');

  hide.style.display = 'none';
  more.style.display = 'block';
};

const History = () => (
  <section className={`${styles.paddings} bg-white relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto gap-8`}
    >
      <div className="flex mb-10 lg:flex-row flex-col-reverse gap-8">
        <motion.div
          variants={fadeIn('right', 'linear', 0.2, 1)}
          className="flex-[0.95] flex justify-center flex-col"
        >
          <TitleText title={<><span className="text-[#6a79ff]">La merveilleuse</span> histoire de Account's</>} />
          <div className="mt-[20px] text-justify text-[18px]">
            Plongez dans l'origine de notre initiative et faites connaissance
            avec l'équipe talentueuse derrière Account's. Vous y trouverez notre
            perspective unique sur l'entrepreneuriat africain, au sein de la
            diaspora.
          </div>
          <button
            id="btn"
            type="submit"
            onClick={showMore}
            className="justify-start text-pink-500 pb-[0.5px] underline md:w-[23%] mt-5 text-center"
          >
            En savoir plus
          </button>
        </motion.div>

        <motion.div
          variants={fadeIn('left', 'linear', 0.2, 1)}
          className="flex-[0.95] my-10 md:mb-0 flex justify-center flex-col"
        >
          <img
            src="/qsn.png"
            alt="qui somme nous"
            className="w-[80%] h-auto rounded-3xl object-contain"
          />
        </motion.div>
      </div>
      <motion.div
        id="notrehist"
        variants={fadeIn('right', 'linear', 0.2, 1)}
        className="hidden justify-center gradient-06"
      >
        <div className="mt-[5px] text-justify text-[18px]">
          Dans un monde où les rêves semblaient lointains, un groupe de jeunes
          Africains avait une idée : aider les gens de la diaspora à
          entreprendre en Afrique sans souci.
          <br />
          <br />
          <h2 className="font-bold">Why ?</h2>
          Ils ont remarqué que beaucoup de gens hésitaient à investir ou
          entreprendre en Afrique à cause des problèmes de confiance et de
          suivi. Alors, ils ont décidé de changer ça. c'est ainsi qu'est né
          "Account's"
          <br />
          <br />
          <h2 className="font-bold">How ?</h2>
          Avec beaucoup de travail et d'idées intelligentes, ils ont construit
          quelque chose de spécial. Ils ont créé une façon plus facile pour les
          gens de suivre leur business à distance. Et devinez quoi ? Cela marche
          ! Les gens commencent à entreprendre sur le continent en toute
          confiance.
          <br />
          <br />
          Aujourd'hui, Account's n'est pas seulement une entreprise. C'est une
          preuve que lorsqu'on résout un problème, des œuvres plus grandes
          suivent. Ils ont montré que l'investissement peut aider l'Afrique à
          grandir.
          <br />
          <br />
          L'histoire d'Account's montre que même les petits changements peuvent
          avoir un grand impact. De plus en plus de gens osent investir, et
          c'est un pas de plus vers un avenir brillant pour l'Afrique.
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default History;
