
import styles from '../styles';
import { TitleText } from '../components';

const Hero = () => (
  <section className={`${styles.paddings} bg-white relative z-10`}>
    <div
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-2`}
    >
      <div
        className="flex-[0.95] flex justify-center flex-col"
      >
        <img
          src="/proche (1).png"
          alt="gestion a distance"
          className="w-[80%] h-auto rounded-3xl object-contain"
        />
      </div>
      <div
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TitleText title={<>Plus besoin de <span className="text-[#6a79ff]">Laisser un Proche</span> gérer vos Affaires au pays.</>} />
        <div className="mt-[20px] text-justify text-[18px]">
          Account's vous accompagne dans la gestion de votre business à distance , grâce à ses équipes
          compétentes, son réseau de partenaires locaux et internationaux et sa solution 100% digitalisée,
          fiable et complétement sécurisée.
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
