
import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText } from './CustomTexts';
import { staggerContainer, fadeIn } from '../utils/motion';

const Values = () => (
  <section className={`${styles.paddings} bg-white relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto`}
    >
      <div className="text-center mb-10">
        <TitleText title={<><span className="text-[#6a79ff]">Les Valeurs</span> que nous partageons</>} />
      </div>
      <div className="flex mb-10 lg:flex-row flex-col-reverse gap-8">
        <motion.div
          variants={fadeIn('right', 'linear', 0.2, 1)}
          className="flex-[0.95] flex justify-center flex-col"
        >
          <TitleText title={<>Confiance :</>} />
          <div className="mt-[20px] text-justify text-[18px]">
            La confiance est au cœur de nos équipes chez Account's. Elle crée
            une synergie fluide, permettant une collaboration harmonieuse et
            productive. Cette confiance s'étend également à nos clients, formant
            les bases solides de nos relations. La transparence est notre guide,
            nous partageons ouvertement des informations pertinentes pour
            établir un environnement sûr et informé. Cette confiance nourrit
            également notre approche collaborative, valorisant les contributions
            individuelles pour des solutions plus novatrices. Chez Account's, la
            confiance est l'élément clé qui façonne notre travail au quotidien.
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('right', 'linear', 0.2, 1)}
          className="flex-[0.95] flex justify-center flex-col"
        >
          <img
            src="/confiance.png"
            alt="confiance"
            className="w-[90%] self-center h-auto border-r-2 rounded-3xl object-contain"
          />
        </motion.div>
      </div><br /><br />
    </motion.div>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto mb-10 flex lg:flex-row flex-col gap-2`}
    >
      <motion.div
        variants={fadeIn('right', 'linear', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <img
          src="/collaboration.png"
          alt="collaboration"
            className="w-[100%] self-center h-auto border-r-2 rounded-3xl object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('right', 'linear', 0.2, 1)}
        className="flex-[0.95] mt-6 mb-10 flex justify-center flex-col"
      >
        <TitleText title={<>Collaboration :</>} />
        <div className="mt-[20px] text-justify text-[18px]">
          Chez Account's, la collaboration est l'épicentre de notre succès.
          Notre équipe diversifiée fusionne ses compétences pour créer des
          solutions uniques. La communication transparente et la confiance
          règnent, à la fois en interne et avec nos clients. Ensemble, nous
          construisons un avenir prospère.
        </div><br /><br />
      </motion.div>
    </motion.div>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto mb-10 flex lg:flex-row flex-col-reverse gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'linear', 0.2, 1)}
        className="flex-[0.95] mb-10 flex justify-center flex-col"
      >
        <TitleText title={<>Réalité :</>} />
        <div className="mt-[20px] text-justify text-[18px]">
          La réalité chez Account's est le fruit d'un engagement sans faille
          envers nos valeurs. Chaque jour, nous nous efforçons de créer des
          solutions concrètes qui répondent aux besoins de nos clients. Notre
          équipe dévouée et compétente est la pierre angulaire de cette réalité.
          Ensemble, nous traduisons les aspirations en actions, apportant une
          valeur réelle à chaque étape de notre parcours. Chez Account's, la
          réalité que nous créons se reflète dans chaque projet que nous
          entreprenons et dans chaque client que nous guidons vers le succès.
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn('right', 'linear', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <img
          src="/réalité.png"
          alt="réalité"
          className="w-[80%] h-auto self-center rounded-3xl object-contain"
        />
      </motion.div><br /><br />
    </motion.div>
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
          src="/exactitude.png"
          alt="exactitude"
          className="w-[80%] h-auto self-center rounded-3xl object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('right', 'linear', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TitleText title={<>Exactitude :</>} />
        <div className="mt-[20px] text-justify text-[18px]">
          L'exactitude est une vertu incontournable chez Account's. Nous avons
          à cœur de garantir une précision méticuleuse dans chaque aspect de
          notre travail. De la gestion des données à la mise en œuvre de nos
          solutions, chaque étape est minutieusement examinée pour garantir une
          conformité rigoureuse. Notre engagement envers l'exactitude se traduit
          par des résultats fiables et des services de haute qualité pour nos
          clients. Chez Account's, nous considérons l'exactitude comme une norme
          intangible qui guide notre démarche et assure la confiance envers nos
          partenaires.
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Values;
