import { TitleText } from './CustomTexts';
import styles from '../styles';

const Readycontact = () => (
  <div
    className={`${styles.innerWidth} my-20 mx-auto text-center`}
  >
    <div>
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
    </div>
  </div>
);

export default Readycontact;
