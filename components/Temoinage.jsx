
import { motion } from 'framer-motion';

import { TitleText } from './CustomTexts';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';

const Temoinage = () => (
  <section className={`${styles.paddings} bg-white relative`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto`}
    >
      <div className="text-center mb-20">
        <TitleText
          title={<><span className="text-[#6a79ff]">Plusieurs entrepreneurs de la diaspora</span>, Nous font déjà Confiance !</>}
        />
      </div>
      <motion.div className="flex mb-10 lg:flex-row flex-col gap-8"
        variants={fadeIn('right', 'tween', 0.2, 1)}

      >
        <div
          className="flex-[0.5] lg:max-w-[600px] flex justify-end flex-col gradient-051 sm:p-8 p-4 rounded-[32px] shadow-[#6a79ff] shadow-xl border-white relative"
        >
          <div className="temoinage-gradient" />
          <div>
            <h6 className="font-bold sm:text-[21px] mb-5 text-[16px] sm:leading-[40.32px] leading-[36.32px] text-[#6a79ff]">
              Marie S.
            </h6>
            <p className="text-justify">
              "Avant de découvrir Account's, j'avais du mal à gérer efficacement mes investissements en Afrique depuis l'étranger. Grâce à leur solution innovante, j'ai désormais une visibilité claire de mes activités et je peux prendre des décisions éclairées en toute confiance. Account's a vraiment transformé ma façon de faire des affaires."
            </p>
          </div>
        </div>
        <div
          className="flex-[0.5] lg:max-w-[600px] flex justify-end flex-col gradient-051 sm:p-8 p-4 rounded-[32px] border-[1px] border-white shadow-xl shadow-[#6a79ff] relative"
        >
          <div className="temoinage-gradient" />
          <div>
            <h6 className="font-bold sm:text-[21px] mb-5 text-[16px] sm:leading-[40.32px] leading-[36.32px] text-[#6a79ff]">
              Ahmed K.
            </h6>
            <p className="text-justify">
              "En tant qu'entrepreneur de la diaspora, j'ai toujours eu des doutes sur la gestion de mes projets au pays. Account's m'a apporté la tranquillité d'esprit en assurant un suivi précis et en instaurant une confiance totale dans la gestion de mes opérations. Leur équipe compétente est toujours à mes côtés pour garantir la réussite de mes projets."
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div className="flex mb-10 lg:flex-row flex-col gap-8"
        variants={fadeIn('right', 'tween', 0.2, 1)}
      >
        <div
          className="flex-[0.5] lg:max-w-[600px] flex justify-end flex-col gradient-051 sm:p-8 p-4 rounded-[32px] border-[1px] border-white shadow-[#6a79ff] shadow-xl relative"
        >
          <div className="temoinage-gradient" />
          <div>
            <h6 className="font-bold sm:text-[21px] mb-5 text-[16px] sm:leading-[40.32px] leading-[36.32px] text-[#6a79ff]">
              Aïcha N.
            </h6>
            <p className="text-justify">
              "Account's a été un partenaire précieux dans mon parcours entrepreneurial. Leur solution m'a permis de superviser mes activités à distance, sans les tracas habituels. Je peux désormais me concentrer sur le développement de mon entreprise en toute sérénité, sachant que Account's veille à ce que tout se passe bien sur le terrain."
            </p>
          </div>
        </div>
        <div
          className="flex-[0.5] lg:max-w-[600px] flex justify-end flex-col gradient-051 sm:p-8 p-4 rounded-[32px] border-[1px] border-white shadow-[#6a79ff] shadow-xl relative"
        >
          <div className="temoinage-gradient" />
          <div>
            <h6 className="font-bold sm:text-[21px] mb-5 text-[16px] sm:leading-[40.32px] leading-[36.32px] text-[#6a79ff]">
              Jean-Pierre B
            </h6>
            <p className="text-justify">
              "La confiance était un obstacle majeur pour moi en tant qu'investisseur de la diaspora. Account's a su résoudre ce problème en mettant en place un suivi rigoureux et une traçabilité complète de mes opérations. Leur approche transparente et leur équipe dévouée ont fait de moi un entrepreneur plus confiant et prospère."
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Temoinage;
