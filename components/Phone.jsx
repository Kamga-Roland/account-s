'use client';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TitleText } from './CustomTexts';

const Phone = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_uhhn85b',
        'template_8xxxaz4',
        form.current,
        'ToMUuCnskH4VLsW11',
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset();
  };

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mt-20 mx-auto`}
      >
        <div className="text-center mb-10">
          <TitleText title={<>Nous <span className="text-[#6a79ff]">Contacter</span></>} />
          <p className="mt-3">Une question ? Besoin d'informations complémentaires ? <br /> Remplissez ce formulaire, notre équipe vous contacte dans les plus brefs délais.</p>
        </div>
        <div className="flex mt-10 lg:flex-row flex-col gap-8">
          <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1)}
            className="flex-[0.95] flex justify-center flex-col"
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="p-5 rounded-2xl shadow-lg shadow-[#6a79ff] justify-center"
            >
              <div className="lg:flex">
                <label className="m-5 text-[#6a79ff]" htmlFor="name">
                  Nom
                  <input
                    placeholder="Kenfack pol"
                    className="h-10 p-5 w-[100%] border-r-4 border-2 shadow-[#6a79ff] shadow-md rounded-3xl "
                    id="name"
                    type="text"
                    name="user_name"
                    required
                  />
                </label>
                <label className="m-5 text-[#6a79ff]" htmlFor="email">
                  Email
                  <input
                    placeholder="kenfackpol@gmail.com"
                    className="h-10 p-5 w-[100%] border-r-4 border-2 shadow-[#6a79ff] shadow-md rounded-3xl "
                    id="email"
                    type="email"
                    name="user_email"
                    required
                  />
                </label>
              </div>
              <div className="lg:flex">
                <label className="m-5 text-[#6a79ff]" htmlFor="number">
                  Téléphone
                  <input
                    placeholder="+237 678..."
                    className="h-10 p-5 w-[100%] border-r-4 border-2 shadow-[#6a79ff] shadow-md rounded-3xl "
                    id="number"
                    type="number"
                    required
                  />
                </label>
                <label className="m-5 text-[#6a79ff]" htmlFor="subject">
                  Sujet
                  <input
                    placeholder="Demande d'assistan.."
                    className="h-10 p-5 w-[100%] border-r-4 border-2 shadow-[#6a79ff] shadow-md rounded-3xl "
                    id="subject"
                    type="text"
                    name="subject"
                    required
                  />
                </label>
              </div>
              <label className="m-5 text-[#6a79ff]" htmlFor="message">
                Message
                <br />
                <textarea
                  placeholder="votre msg.."
                  className="h-20 p-5 w-[100%] lg:w-[70%] border-r-4 border-2 shadow-[#6a79ff] shadow-md rounded-3xl "
                  id="message"
                  type="text"
                  name="message"
                />
              </label>
              <br />
              <button
                className="h-10 my-10 w-[100%] text-center hover:bg-[#959ef2] bg-[#6a79ff] text-white border-r-4 rounded-3xl "
                type="submit"
              >
                envoyer
              </button>
            </form>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className="flex-[0.95] flex justify-center flex-col"
          >
            <img
              src="/callus.svg"
              alt="call us"
              className="w-[90%] h-auto rounded-3xl object-contain "
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Phone;
