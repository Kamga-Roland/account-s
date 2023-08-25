
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Discover = () => {
  const view = document.getElementById('apercu');
  const hide = document.getElementById('btn');

  view.style.display = 'block';
  hide.style.display = 'none';
};

const Support = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'linear', 0.2, 1)}
        className=" justify-end mb-10 sm:p-8 p-4 rounded-[32px] border-[1px] shadow-[#210080] border-r-4  border-white shadow-xl relative"
      >
        <div>
          <h4 className="font-bold sm:text-[22px] text-justify text-[18px] sm:leading-[40.32px] leading-[36.32px] text-blue-800">
            <span className="text-[60px]">" </span> Depuis que j'ai acquis la
            faculté de réflexion, j'ai toujours nourri cette quête: comment
            pourrais-je influencer positivement ma communauté en mettant en
            lumière mes compétences et mon expertise ?  Account's incarne
            parfaitement ce que je crois pouvoir offrir au monde. <span className="text-[30px]">" </span>
            <br />
            <span className="text-bold text-[14px] md:text-[18px] text-black">
              Rodney Fotsing, CEO de Account's
            </span>
          </h4>
          <br />
        </div>
      </motion.div>
      <motion.div variants={zoomIn(0.5, 2)} className="mb-5">
        <button
          id="btn"
          type="submit"
          onClick={Discover}
          className="text-center mx-[15%] lg:mx-[35%] py-2 px-5 m-10 rounded-3xl text-white bg-pink-500 text-[11px] md:text-[15px]"
        >
          découvrez la team Account's
        </button>
      </motion.div>
      <motion.div
        id="apercu"
        variants={fadeIn('right', 'linear', 0.2, 1)}
        className="hidden justify-end gradient-05 mb-10 sm:p-8 p-4 relative"
      >
        <div className="text-center font-bold text-[18px] md:text-[25px] text-[#6a79ff] mb-20">
          Ils sont a l'origine du projet
        </div>
        <div className=" md:flex space-y-6 mx-auto mb-20 space-x-6 ">
          <div className="w-[350px] shadow-[#6a79ff] h-[400px] lg:mt-5 rounded-[32px] border-[3px] shadow-2xl text-blue-900">
            <div className="h-[300px]">
              <img src="/FR.png" alt="FR" className="h-[95%] w-full " />
            </div>
            <div className="p-5 text-center">
              <h2 className="text-[#210080] font-semibold">Rodney Fotsing</h2>
              <h4 className="text-[#210080] font-semibold">Associé/CEO</h4>
            </div>
          </div>
          <div className="w-[350px] shadow-[#6a79ff] h-[400px] rounded-[32px] border-[3px] shadow-2xl text-blue-900">
            <div className="h-[300px]">
              <img src="/DJ.png" alt="DJ" className="h-[95%] w-full" />
            </div>
            <div className="p-5 text-center">
              <h2 className="text-[#210080] font-semibold">Jislain Duny</h2>
              <h4 className="text-[#210080] font-semibold">Associé/ Responsable Activité </h4>
            </div>
          </div>
          <div className="w-[350px] shadow-[#6a79ff] h-[400px] rounded-[32px] border-[3px] shadow-2xl text-blue-900">
            <div className="h-[300px]">
              <img src="/DN.png" alt="NS" className="h-[95%] w-full " />
            </div>
            <div className="p-5 text-center">
              <h2 className="text-[#210080] font-semibold">Noubissi Steve</h2>
              <h4 className="text-[#210080] font-semibold">Associé/Responsable Commerciale</h4>
            </div>
          </div>
        </div>
        <div className=" md:flex space-y-6 mx-auto mb-20 space-x-6">
          <div className="w-[350px] shadow-[#6a79ff] h-[400px] lg:mt-5 rounded-[32px] border-[3px] shadow-2xl text-blue-900">
            <div className="bg-white h-[300px]">
              <img src="/FB1.png" alt="FB" className="h-[95%] w-full" />
            </div>
            <div className="p-5 text-center ">
              <h2 className="text-[#210080] font-semibold">Boris Foyet</h2>
              <h4 className="text-[#210080] font-semibold">Associé/Responsable Marketing et Stratégique </h4>
            </div>
          </div>
          <div className="w-[350px] shadow-[#6a79ff] h-[400px] rounded-[32px] border-[3px] shadow-2xl text-blue-900">
            <div className="h-[300px]">
              <img src="/FS.png" alt="FS" className="h-[95%] w-full" />
            </div>
            <div className="p-5 text-center">
              <h2 className="text-[#210080] font-semibold">Frank Steve</h2>
              <h4 className="text-[#210080] font-semibold">Associé/Responsable Administratif et Financier</h4>
            </div>
          </div>
          <div className="w-[350px] shadow-[#6a79ff] h-[400px] rounded-[32px] border-[3px] shadow-2xl text-blue-900">
            <div className="h-[300px]">
              <img src="/GK.png" alt="GK" className="h-[95%] w-full" />
            </div>
            <div className="p-5 text-center">
              <h2 className="text-[#210080] font-semibold">Gaetan Keutaze</h2>
              <h4 className="text-[#210080] font-semibold">Associé/ Rattaché au pole Activité</h4>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Support;
