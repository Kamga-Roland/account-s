
import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText } from './CustomTexts';
import { staggerContainer, fadeIn } from '../utils/motion';

const Ourservice = () => (
  <section className={`${styles.paddings} bg-white relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto`}
    >
      <div className="flex mb-10 lg:flex-row flex-col-reverse gap-8">
        <motion.div
          variants={fadeIn('right', 'linear', 0.2, 1)}
          className="flex-[0.95] flex justify-center flex-col"
        >
          <TitleText
            title={
              <>1. <span className="text-[#6a79ff]">Recherche et Gestion</span> des Talents </>
            }
          />
          <div className="mt-[38px] text-[18px]">
            <h2 className="text-[#6a79ff]">Description :</h2>
            <p className="text-justify">
              Analyse des besoins en compétences des clients, élaboration et
              mise en œuvre de stratégies de recrutement, suivi continu des
              nouveaux employés pendant 3 à 6 mois.
            </p>
          </div>
          <br />
          <h2 className="text-[#6a79ff]">Défis :</h2>
          <div>
            <p className="text-justify">
              L'équipe locale actuelle souffre de problèmes d'incompétence et de
              méfiance, entravant ainsi la fiabilité opérationnelle.
            </p>
          </div>
          <br />
          <a className="text-pink-500 underline" href="/contact">
            Contactez-nous
          </a>
        </motion.div>

        <motion.div
          variants={fadeIn('left', 'linear', 0.2, 1)}
          className="flex-[0.95] flex justify-center flex-col"
        >
          <img
            src="/rh.svg"
            alt="resource humaine"
            className="w-[90%] h-auto rounded-3xl object-contain"
          />
        </motion.div>
      </div>
      <br />
      <br />
    </motion.div>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto mb-[80px] flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.4, 2)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <img
          src="/gad.svg"
          alt="gestion a distance"
          className="w-[90%] h-auto rounded-3xl object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'linear', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TitleText
          title={
            <>2. <span className="text-[#6a79ff]">Gestion à Distance</span> et Supervision </>
          }
        />
        <div className="mt-[38px] text-[18px]">
          <h2 className="text-[#6a79ff]">Description :</h2>
          <p className="text-justify">
            Mise en œuvre d'une solution novatrice pour permettre aux
            entrepreneurs établis à l'étranger de gérer leurs entreprises à
            distance avec efficacité. Cette solution totalement numérique, offre
            une surveillance sécurisée et fiable de l'évolution de l'activité,
            24h/24.
          </p>
        </div>
        <br />
        <h2 className="text-[#6a79ff]">Défis :</h2>
        <div>
          <p className="text-justify">
            Assurer un suivi transparent des opérations effectuées au sein de
            leur entreprise au pays (problème de traçabilité).
          </p>
        </div>
        <br />
        <a className="text-pink-500 underline" href="/contact">
          Contactez-nous
        </a>
      </motion.div>
    </motion.div>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto mb-[80px] flex lg:flex-row flex-col-reverse gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'linear', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TitleText
          title={
            <>3. <span className="text-[#6a79ff]">Networking et</span> Facilitation des Relations </>
          }
        />
        <div className="mt-[38px] text-[18px]">
          <h2 className="text-[#6a79ff]">Description :</h2>
          <p className="text-justify">
            Grâce à notre vaste réseau de partenaires locaux et internationaux,
            nous sommes là pour vous guider dans la quête de partenariats
            stratégiques. Notre objectif est de développer votre réseau
            d'affaires et de stimuler une croissance rapide et soutenue de vos
            profits, tout en solidifiant votre réputation sur le long terme.
          </p>
        </div>
        <br />
        <h2 className="text-[#6a79ff]">Défis :</h2>
        <div>
          <p className="text-justify">
            Surmonter les problèmes de fiabilité des partenaires (fournisseurs,
            prestataires, etc.) et combler le manque d'informations concernant
            les opportunités et partenaires disponibles, que ce soit localement
            ou ailleurs.
          </p>
        </div>
        <br />
        <a className="text-pink-500 underline" href="/contact">
          Contactez-nous
        </a>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'linear', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <img
          src="/net.svg"
          alt="gestion a distance"
          className="w-[90%] h-auto rounded-3xl object-contain"
        />
      </motion.div>
    </motion.div>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex mb-[80px] lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'linear', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <img
          src="/gf.svg"
          alt="gestion ficancier"
          className="w-[90%] h-auto rounded-3xl object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'linear', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TitleText
          title={
            <>4. <span className="text-[#6a79ff]">Gestion</span> Financière </>
          }
        />
        <div className="mt-[38px] text-[18px]">
          <h2 className="text-[#6a79ff]">Description :</h2>
          <p className="text-justify">
            Notre soutien aux entrepreneurs englobe : l'amélioration de leur
            flux de trésorerie, la gestion de leur comptabilité, des conseils
            en gestion globale, ainsi que l'optimisation de leurs aspects
            fiscaux.
          </p>
        </div>
        <br />
        <h2 className="text-[#6a79ff]">Défis :</h2>
        <div>
          <p className="text-justify">
            Dépasser les problèmes résultant d'une gestion défaillante par les
            gestionnaires locaux (erreurs de gestion entraînant des difficultés
            financières) : fraudes, abus de biens sociaux, détournements,
            pressions sur la trésorerie, enjeux fiscaux à redresser .
          </p>
        </div>
        <br />
        <a className="text-pink-500 underline" href="/contact">
          Contactez-nous
        </a>
      </motion.div>
    </motion.div>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto mb-[80px] flex lg:flex-row flex-col-reverse gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'linear', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TitleText
          title={
            <>5. <span className="text-[#6a79ff]">Conseil en Investissement</span> et Création d'entités. </>
          }
        />
        <div className="mt-[38px] text-[18px]">
          <h2 className="text-[#6a79ff]">Description :</h2>
          <p className="text-justify">
            À travers des entretiens réguliers, notre équipe se familiarise avec
            vos idées d'investissement et vous guide tout au long du processus
            de concrétisation, passant de la simple notion à un projet solide.
            Une fois votre projet défini avec précision, nous prenons en charge
            les démarches administratives, juridiques et fiscales nécessaires à
            sa création.
          </p>
        </div>
        <br />
        <h2 className="text-[#6a79ff]">Défis :</h2>
        <div className="text-justify">
          Surmonter les difficultés liées à l'évaluation de la faisabilité d'un
          projet dans le contexte local et trouver des moyens pour réduire les
          coûts associés à la création d'une société sur place.
        </div>
        <br />
        <a className="text-pink-500 underline" href="/contact">
          Contactez-nous
        </a>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'linear', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <img
          src="/cei.svg"
          alt="conseille en investissement"
          className="w-[100%] h-auto rounded-3xl object-contain"
        />
      </motion.div>
    </motion.div>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'linear', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <img
          src="/mec.svg"
          alt="marketing et communication"
          className="w-[90%] h-auto border-r-2 rounded-3xl object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'linear', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TitleText
          title={
            <>6. <span className="text-[#6a79ff]">Marketing et</span> communication. </>
          }
        />
        <div className="mt-[38px] text-[18px]">
          <h2 className="text-[#6a79ff]">Description :</h2>
          <p className="text-justify">
            Permettez-nous de créer et mettre en œuvre vos plans marketing et
            stratégies de communication, en assurant également un suivi
            attentif.
          </p>
        </div>
        <br />
        <h2 className="text-[#6a79ff]">Défis :</h2>
        <div className="text-justify">
          Surmonter les difficultés liées à une approche inefficace pour attirer
          des clients localement, améliorer la communication locale et résoudre
          les obstacles aux ventes via les réseaux sociaux.
        </div>
        <br />
        <a className="text-pink-500 underline" href="/contact">
          Contactez-nous
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Ourservice;
