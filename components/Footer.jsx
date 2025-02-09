
import { motion } from 'framer-motion';
import { FaEnvelope, FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} bg-[#0d012f] w-full py-8 relative`}
  >
    <div className="flex flex-row gap-8 justify-center ">
      <div className="w-5/6 lg:w-2/6 text-justify items-center justify-center flex-wrap">
        <img src="/logoF.png" alt="logo" className="w-40 h-auto mb-3" />
        <p className="text-white opacity-40">
          Account's est une startup de la Fintech dédiée aux esprits ambitieux de la
          diaspora africaine. Notre solution innovante offre une maîtrise totale
          et une surveillance continue de vos activités commerciales en Afrique,
          sans contraintes géographiques. Notre mission, répondre à votre soif
          de traçabilité et de confiance, tout en libérant le potentiel
          entrepreneurial africain.
        </p>
      </div>
      <div className="w-1/6 hidden lg:block items-center justify-center flex-wrap">
        <h2 className="font-bold text-white mb-3">Notre solution</h2>
        <p className="text-white opacity-40">
          <a className="cursor-pointer hover:text-pink-500" href="/">Collecte des données,</a><br /> <a className="cursor-pointer hover:text-pink-500" href="/">Analyse dynamique,</a><br /> <a className="cursor-pointer hover:text-pink-500" href="/">Production des rapports,</a><br />
          <a className="cursor-pointer hover:text-pink-500" href="/">Contrôle permanent,</a><br /> <a className="cursor-pointer hover:text-pink-500" href="/">Pourquoi investir en Afrique ?</a>
        </p>
      </div>
      <div className="w-1/6 hidden lg:block items-center justify-center flex-wrap">
        <h2 className="font-bold text-white mb-3">Qui sommes-nous</h2>
        <p className="text-white opacity-40">
          <a className="cursor-pointer hover:text-pink-500" href="/about"> Notre Histoire</a>
          <br /> <a className="cursor-pointer hover:text-pink-500" href="/about">Notre Team</a>
          <br /> <a className="cursor-pointer hover:text-pink-500" href="/about">Notre Vision</a>
          <br /> <a className="cursor-pointer hover:text-pink-500" href="/about">Notre Mission</a>
          <br /> <a className="cursor-pointer hover:text-pink-500" href="/about">Nos Valeurs</a>
          <br /> <a className="cursor-pointer hover:text-pink-500" href="/about">Notre Slogan</a>
        </p><br />
        <a href="/contact" className="p-2 text-[14px] hover:bg-pink-400 font-bold rounded-2xl bg-pink-500 text-white">Contactez-nous</a>
      </div>
      <div className="w-2/6 hidden lg:block items-center justify-center flex-wrap">
        <h2 className="font-bold text-white mb-3">Nos Services</h2>
        <p className="text-white opacity-40">
          <a className="cursor-pointer hover:text-pink-500" href="/services">Recherche et gestion des talents</a>
          <br /><a className="cursor-pointer hover:text-pink-500" href="/services">Gestion à distance et supervision</a>
          <br /><a className="cursor-pointer hover:text-pink-500" href="/services">Networking et facilitation des relations</a>
          <br /><a className="cursor-pointer hover:text-pink-500" href="/services">Gestion financière</a>
          <br /> <a className="cursor-pointer hover:text-pink-500" href="/services">Conseil en investissements et création d'entités</a>
          <br /> <a className="cursor-pointer hover:text-pink-500" href="/services">Marketing et communication</a>
        </p>
      </div>
      <div className="w-1/6 hidden lg:block rounded-lg items-center justify-center flex-wrap">
        <h2 className="font-bold text-white text-center mb-3">Nos Partenaires</h2>
        <div className="flex gap-4">
          <img src="ea.png" alt="cinaf" className="w-20 h-20" />
          <img src="/ea5.png" alt="50AFC" className="w-20 h-20" />
        </div><br />
        <div className="flex gap-4">
          <img src="/ea2.png" alt="mbc" className="w-20 h-20" />
          <img src="/ea4.png" alt="nadosso" className="w-20 h-20" />
        </div>
        <div className="w-50 h-20 my-5">
          <img src="/ea3.png" alt="AFROPN" className="object-contain" />
        </div>
      </div>
    </div>
    <div className="md:flex items-center text-center gap-8 justify-center mt-10">
      <div className="items-center justify-between flex-wrap gap-4">
        <p className="text-white mt-3 lg:mt-0 opacity-50">Politique de confidentialité</p>
        <p className="text-white mt-3 lg:mt-0 opacity-50">Conditions d'utilisation</p>
      </div>
      <div>
        <p className="text-white mt-3 lg:mt-0 opacity-50">Copyright 2023</p>
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
          <a href="mailto:Contact@accounts-diaspo.com">
            <FaEnvelope className="w-6 h-6 fill-white" />
          </a>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
