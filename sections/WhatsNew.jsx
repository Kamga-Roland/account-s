
import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText } from '../components';

const showMore = () => {
  const hide = document.getElementById('btn1');
  const more = document.getElementById('croissance');

  more.style.display = 'block';
  hide.style.display = 'none';
};

const showMore1 = () => {
  const hide = document.getElementById('btn2');
  const more = document.getElementById('diversite');

  more.style.display = 'block';
  hide.style.display = 'none';
};

const showMore2 = () => {
  const hide = document.getElementById('btn3');
  const more = document.getElementById('demographie');

  more.style.display = 'block';
  hide.style.display = 'none';
};

const showMore3 = () => {
  const hide = document.getElementById('btn4');
  const more = document.getElementById('innovation');

  more.style.display = 'block';
  hide.style.display = 'none';
};

const showMore4 = () => {
  const hide = document.getElementById('btn5');
  const more = document.getElementById('social');

  more.style.display = 'block';
  hide.style.display = 'none';
};

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] mb-10 flex justify-center flex-col"
      >
        <TitleText
          title={<>Pourquoi devriez-vous<span className="text-[#6a79ff]">investir en Afrique ?</span></>}
        />
        <div>
          <div className={`${styles.flexCenter} mt-5 flex-row`}>
            <div
              className={`${styles.flexCenter} w-[40px] h-[40px] rounded-[24px] bg-[#210080]`}
            >
              <p className="font-bold text-[20px] text-white">1</p>
            </div>
            <p className="font-extrabold flex-1 ml-[30px] text-[20px] text-[#210080] leading-[32.4px]">
              Des opportunités de Croissance Économique
            </p>
          </div>
          <button
            id="btn1"
            type="submit"
            onClick={showMore}
            className=" text-pink-500 pb-[0.5px] ml-20 border-b-[1px] w-[40%] md:w-[23%] mt-1 text-center border-b-pink-500"
          >
            En savoir plus
          </button>
          <p id="croissance" className="hidden mt-5 pl-5 text-justify">
            L'Afrique est en plein essor économique, offrant des marchés en
            expansion dans divers secteurs tel que l'énergie, la technologie, l'agro-industrie et les
            services financiers. Investir maintenant peut vous positionner avantageusement
            pour profiter de cette croissance continue.
          </p>
        </div>
        <div>
          <div className={`${styles.flexCenter} mt-5 flex-row`}>
            <div
              className={`${styles.flexCenter} w-[40px] h-[40px] rounded-[24px] bg-[#210080]`}
            >
              <p className="font-bold text-[20px] text-white">2</p>
            </div>
            <p className="font-extrabold flex-1 ml-[30px] text-[20px] text-[#210080] leading-[32.4px]">
              Une diversité des Ressources Naturelles
            </p>
          </div>
          <button
            id="btn2"
            type="submit"
            onClick={showMore1}
            className=" text-pink-500 pb-[0.5px] ml-20 border-b-[1px] w-[40%] md:w-[23%] mt-1 text-center border-b-pink-500"
          >
            En savoir plus
          </button>
          <p id="diversite" className="hidden mt-5 pl-5 text-justify">
            Le continent africain est riche en ressources naturelles, allant des minéraux précieux aux terres agricoles fertiles. L'investissement dans l'exploitation durable de ces ressources peut génér des rendements substantiels tout en favorisant le développement durable.
          </p>
        </div>
        <div>
          <div className={`${styles.flexCenter} mt-5 flex-row`}>
            <div
              className={`${styles.flexCenter} w-[40px] h-[40px] rounded-[24px] bg-[#210080]`}
            >
              <p className="font-bold text-[20px] text-white">3</p>
            </div>
            <p className="font-extrabold flex-1 ml-[30px] text-[20px] text-[#210080] leading-[32.4px]">
              Une démographie et un marché en expansion
            </p>
          </div>
          <button
            id="btn3"
            type="submit"
            onClick={showMore2}
            className=" text-pink-500 pb-[0.5px] ml-20 border-b-[1px] w-[40%] md:w-[23%] mt-1 text-center border-b-pink-500"
          >
            En savoir plus
          </button>
          <p id="demographie" className="hidden mt-5 pl-5 text-justify">
            Avec une population jeune et en croissance rapide, l'Afrique offre un marché vast et diversifié pour vos produits et services. En investissant aujourd'hui, vous avez la possibilité de capturer une part du marché en pleine expansion.
          </p>
        </div>
        <div>
          <div className={`${styles.flexCenter} mt-5 flex-row`}>
            <div
              className={`${styles.flexCenter} w-[40px] h-[40px] rounded-[24px] bg-[#210080]`}
            >
              <p className="font-bold text-[20px] text-white">4</p>
            </div>
            <p className="font-extrabold flex-1 ml-[30px] text-[20px] text-[#210080] leading-[32.4px]">
              Des innovation et technologie émergentes
            </p>
          </div>
          <button
            id="btn4"
            type="submit"
            onClick={showMore3}
            className=" text-pink-500 pb-[0.5px] ml-20 border-b-[1px] w-[40%] md:w-[23%] mt-1 text-center border-b-pink-500"
          >
            En savoir plus
          </button>
          <p id="innovation" className="hidden mt-5 pl-5 text-justify">
            De nombreux pays africains adoptent rapidement les nouvelles technologies pour résoudre les défis économiques et sociaux. En investissant dans des solutions technologiques innovantes, vous pouvez contribuer au développement de l'écosystème numérique et en récolter les bénéfices.
          </p>
        </div>
        <div>
          <div className={`${styles.flexCenter} mt-5 flex-row`}>
            <div
              className={`${styles.flexCenter} w-[40px] h-[40px] rounded-[24px] bg-[#210080]`}
            >
              <p className="font-bold text-[20px] text-white">5</p>
            </div>
            <p className="font-extrabold flex-1 ml-[30px] text-[20px] text-[#210080] leading-[32.4px]">
              Un Impact Social et Environnemental
            </p>
          </div>
          <button
            id="btn5"
            type="submit"
            onClick={showMore4}
            className=" text-pink-500 pb-[0.5px] ml-20 border-b-[1px] w-[40%] md:w-[23%] mt-1 text-center border-b-pink-500"
          >
            En savoir plus
          </button>
          <p id="social" className="hidden mt-5 pl-5 text-justify">
            L'investissement en Afrique ne se limite pas aux profits. Il offre également une chance de créer un impact positif en stimulant l'emploi, en soutenant le développement local et en contribuant à des initiatives durables qui améliorent la qualité de vie des communautés africaines.
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <img
          src="/pourquoi.svg"
          alt="resource humaine"
          className="w-[90%] h-auto rounded-3xl object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
