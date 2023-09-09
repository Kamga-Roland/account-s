
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
        className=" justify-end  mb-10 sm:p-8 p-4 rounded-[32px] border-[1px] shadow-[#210080] border-r-4  border-white shadow-lg relative"
      >
        <div>
          <h4 className="font-bold sm:text-[22px] text-justify text-[18px] sm:leading-[40.32px] leading-[36.32px] text-blue-800">
            <span className="text-[60px]">" </span> Depuis que j'ai acquis la
            faculté de réflexion, j'ai toujours nourri cette quête :  comment
            pourrais-je influencer positivement ma communauté en mettant en
            lumière mes compétences et mon expertise ?   Account's incarne
            parfaitement ce que je crois pouvoir offrir au monde.
            <br />
            <span className="text-bold text-[14px] md:text-[20px] text-black">
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
          className="text-center mx-[15%] lg:mx-[35%] py-2 px-5 m-10 font-bold rounded-3xl text-white bg-pink-500 text-[11px] md:text-[15px]"
        >
          Découvrez la team Account's
        </button>
      </motion.div>
      <div
        id="apercu"
        className="hidden justify-end gradient-05 mb-10 sm:p-8 p-4 relative"
      >
        <div className="text-center font-bold text-[18px] md:text-[25px] text-[#6a79ff] mb-20">
          Ils sont a l'origine du projet
        </div>
        <div>
          <div className="flex mb-10 justify-center lg:flex-row flex-col gap-8">
            <div className="flex-[0.5] lg:max-w-[600px] border-[2px] flex flex-col rounded-[32px] shadow-[#6a79ff] shadow-xl relative">
              <div className="h-[400px]">
                <div className="h-[3/4]">
                  <img src="/FR.png" alt="Rodney" className="w-[100%] h-80 object-contain" />
                </div>
                <p className="h-[1/4] font-bold text-center">
                  <span class="text-[#6a79ff]">Rodney Fotsing</span> <br /> Associé/ CEO
                </p>
              </div>
            </div>
            <div className=" lg:max-w-[600px] border-[2px] flex flex-col rounded-[32px] shadow-[#6a79ff] shadow-xl relative">
              <div className="h-[400px]">
                <div className="h-[3/4]">
                  <img src="/DJ.png" alt="Duny" className="w-[100%] h-80 object-contain" />
                </div>
                <p className="h-[1/4] font-bold text-center">
                  <span class="text-[#6a79ff]">Jislain Duny</span> <br /> Associé/ Responsable<br /> Activité
                </p>
              </div>
            </div>
            <div className=" lg:max-w-[600px] border-[2px] flex flex-col rounded-[32px] shadow-[#6a79ff] shadow-xl relative">
              <div className="h-[400px]">
                <div className="h-[3/4]">
                  <img src="/DN.png" alt="Noubissi" className="w-100 h-80 object-contain" />
                </div>
                <p className="h-[1/4] font-bold text-center">
                  <span class="text-[#6a79ff]">Noubissi Steve</span> <br /> Associé/ Responsable<br /> Commerciale
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex mb-10 justify-center lg:flex-row flex-col gap-8">
            <div className="flex-[0.5] lg:max-w-[600px] border-[2px] flex flex-col rounded-[32px] shadow-[#6a79ff] shadow-xl relative">
              <div className="h-[400px]">
                <div className="h-[3/4]">
                  <img src="/FB1.png" alt="Rodney" className="w-[100%] h-80 object-contain" />
                </div>
                <p className="h-[1/4] font-bold text-center">
                  <span class="text-[#6a79ff]">Boris Foyet</span> <br /> Associé/ Responsable <br />marketing stratégique
                </p>
              </div>
            </div>
            <div className=" lg:max-w-[600px] border-[2px] flex flex-col rounded-[32px] shadow-[#6a79ff] shadow-xl relative">
              <div className="h-[400px]">
                <div className="h-[3/4]">
                  <img src="/FS.png" alt="Duny" className="w-[100%] h-80 object-contain" />
                </div>
                <p className="h-[1/4] font-bold text-center">
                  <span class="text-[#6a79ff]">Fotso Steve</span> <br /> Associé/ Administratif<br /> et financier
                </p>
              </div>
            </div>
            <div className=" lg:max-w-[600px] border-[2px] flex flex-col rounded-[32px] shadow-[#6a79ff] shadow-xl relative">
              <div className="h-[400px]">
                <div className="h-[3/4]">
                  <img src="/GK.png" alt="Noubissi" className="w-100 h-80 object-contain" />
                </div>
                <p className="h-[1/4] font-bold text-center">
                  <span class="text-[#6a79ff]">Gaetan Keutaze</span> <br /> Rattaché au pole activité
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Support;
