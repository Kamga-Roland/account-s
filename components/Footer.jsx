
import { motion } from 'framer-motion';
import { FaEnvelope, FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} bg-[#0d012f] py-8 relative`}
  >
    <div className="flex flex-row gap-8 justify-center ">
      <div className="w-5/6 lg:w-2/6 text-justify items-center justify-center flex-wrap">
        <img src="/logo.svg" alt="logo" className="w-40 h-auto mb-3" />
        <p className="text-white opacity-40">
          Account's est une startup Fintech dédiée aux esprits ambitieux de la
          diaspora africaine. Notre solution innovante offre une maîtrise totale
          et une surveillance continue de vos activités commerciales en Afrique,
          sans contraintes géographiques. Notre mission ? Répondre à votre soif
          de traçabilité et de confiance, tout en libérant le potentiel
          entrepreneurial africain.
        </p>
      </div>
      <div className="w-1/6 hidden lg:block items-center justify-center flex-wrap">
        <h2 className="font-bold text-white mb-3">Accueil</h2>
        <p className="text-white opacity-40">
          Collecte des données, Analyse dynamique, Production des rapports,
          Contrôle permanent, Pourquoi investir en Afrique ?
        </p>
      </div>
      <div className="w-1/6 hidden lg:block items-center justify-center flex-wrap">
        <h2 className="font-bold text-white mb-3">Qui sommes-nous</h2>
        <p className="text-white opacity-40">
          Notre Histoire
          <br /> Notre Team
          <br /> Notre Vision
          <br /> Notre Mission
          <br /> Nos Valeurs
          <br /> Notre Slogan
        </p>
      </div>
      <div className="w-2/6 hidden lg:block items-center justify-center flex-wrap">
        <h2 className="font-bold text-white mb-3">Nos Services</h2>
        <p className="text-white opacity-40">
          Recherche et gestion des talents
          <br /> Gestion à distance et supervision
          <br />
          Networking et facilitation des relations
          <br /> Gestion financière
          <br /> Conseil en investissements et création d'entités
          <br /> Marketing et communication
        </p>
      </div>
      <div className="w-1/6 hidden lg:block items-center justify-center flex-wrap">
        <h2 className="font-bold text-white mb-3">Nos Partenaires</h2>
        <div className="flex">
          <img src="/50AFC.png" alt="50AFC" className="w-20 h-20" />
          <img src="/AFROPN.png" alt="AFROPN" className="w-20 h-10 my-5" />
        </div>
        <div className="flex">
          <img src="/MbC.png" alt="mbc" className="w-20 h-20" />
          <img src="/NADOSSO.png" alt="nadosso" className="w-20 h-20" />
        </div>
        <img src="cinaf.png" alt="cinaf" className="w-10 h-10" />
      </div>
    </div>
    <div className="md:flex items-center text-center gap-8 justify-center mt-10">
      <div className="items-center justify-between flex-wrap gap-4">
        <p className="text-white mt-3 lg:mt-0 opacity-50">Politique de confidentialité</p>
        <p className="text-white mt-3 lg:mt-0 opacity-50">Conditions d'utilisation</p>
      </div>
      <div>
        <p className="text-white mt-3 lg:mt-0 opacity-50">Copyright....</p>
        <p className="text-white mt-3 lg:mt-0 opacity-50">All rights reserved.</p>
      </div>
      <div>
        <div className="flex justify-center mt-3 lg:mt-0 gap-4">
          <a href="https://www.linkedin.com/company/account-s-agency/">
            <FaLinkedin className="w-6 h-6 fill-white " />
          </a>
          <a href="https://bit.ly/3pxTgzp">
            <FaFacebook className="w-6 h-6 fill-white" />
          </a>
          <a href="https://wa.me/+33635757498">
            <FaWhatsapp className="w-6 h-6 fill-white" />
          </a>
          <a href="mailto:Acc.agencycameroun@gmail.com">
            <FaEnvelope className="w-6 h-6 fill-white" />
          </a>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
