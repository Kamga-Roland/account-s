
import styles from '../styles';
import { TitleText } from '../components/CustomTexts';

const Explore = () => (
  <section className={`${styles.paddings} bg-white relative z-10`}>
    <div
      className={`${styles.innerWidth} mx-auto`}
    >
      <div id="disc" className="text-center mb-20">
        <TitleText
          title={
            <><span className="text-justify text-[#6a79ff]">Découvrez notre solution</span>, pour obtenir au quotidien une visibilité claire de son activité au pays, <span className="text-[#6A79FF]">sans faire d'effort.</span> </>
          }
        />
      </div>
      <div className="flex mb-10 pt-10 lg:flex-row flex-col gap-8">
        <div
          className="flex-[0.5] lg:max-w-[600px] flex justify-end flex-col w-50 h-40 sm:p-8 p-4 relative"
        >
          <div className="bg-white" />
          <div>
            <img
              src="/phase1.svg"
              alt="phase1"
              className="object-contain md:pl-[50%] w-50 h-40"
            />
          </div>
        </div>
        <div
          className="flex-[0.5] lg:max-w-[600px] flex justify-end flex-col w-50 h-40 sm:p-8 p-4 relative"
        >
          <div className="bg-white" />
          <div>
            <h6 className="font-bold sm:text-[21px]  mb-5 text-[16px] sm:leading-[30.32px] leading-[36.32px] text-[#6a79ff]">
              <span className="px-2 rounded-[50%] bg-[#210080] text-white">1</span> Collecte des données sur le terrain.
            </h6>
            <p className="text-justify">
              Notre outil collecte de manière automatique et complètement
              sécurisée les traces des opérations effectuées au sein de votre
              entité par vos collaborateurs.
            </p>
          </div>
        </div>
      </div>
      <div className="flex mb-10 lg:flex-row flex-col-reverse gap-8">
        <div
          className="flex-[0.5] lg:max-w-[600px] flex justify-end flex-col w-50 h-40 sm:p-8 p-4 relative"
        >
          <div className="bg-white" />
          <div>
            <h6 className="font-bold sm:text-[21px] mb-5 text-[16px] sm:leading-[30.32px] leading-[36.32px] text-[#6a79ff]">
              <span className="px-2 rounded-[50%] bg-[#210080] text-white">2</span> Analyse Dynamique
            </h6>
            <p className="text-justify">
              Notre solution à l'aide de sa composante IA, traite les données
              collectées sur le terrain pour en faire une information utile pour
              le processus de prise de décision.
            </p>
          </div>
        </div>
        <div
          className="flex-[0.5] lg:max-w-[600px] flex justify-end flex-col w-50 h-40 sm:p-8 p-4 relative"
        >
          <div className="bg-white" />
          <div>
            <img
              src="/phase2.svg"
              alt="phase2"
              className="object-contain w-50 h-40"
            />
          </div>
        </div>
      </div>
      <div className="flex mb-10 pt-10 lg:flex-row flex-col gap-8">
        <div
          className="flex-[0.5] lg:max-w-[600px] flex justify-end flex-col w-50 h-40 sm:p-8 p-4 relative"
        >
          <div className="bg-white" />
          <div>
            <img
              src="/phase3.svg"
              alt="phase3"
              className="object-contain md:pl-[50%] w-50 h-40"
            />
          </div>
        </div>
        <div
          className="flex-[0.5] lg:max-w-[600px] flex justify-end flex-col w-50 h-40 sm:p-8 p-4 relative"
        >
          <div className="bg-white" />
          <div>
            <h6 className="font-bold sm:text-[21px]  mb-5 text-[16px] sm:leading-[30.32px] leading-[36.32px] text-[#6a79ff]">
              <span className="px-2 rounded-[50%] bg-[#210080] text-white">3</span> Production de Rapports et Tableaux de bords
            </h6>
            <p className="text-justify">
              Les informations obtenues à l'issu du processus, sont organisées
              sous forme de graphes, de chiffres et complétées par des
              commentaires et avis pertinents.
            </p>
          </div>
        </div>
      </div>
      <div className="flex mb-10 lg:flex-row flex-col-reverse gap-8">
        <div
          className="flex-[0.5] lg:max-w-[600px] flex justify-end flex-col w-50 h-40 sm:p-8 p-4 relative"
        >
          <div className="bg-white" />
          <div>
            <h6 className="font-bold sm:text-[21px] mb-5 text-[16px] sm:leading-[30.32px] leading-[36.32px] text-[#6a79ff]">
              <span className="px-2 rounded-[50%] bg-[#210080] text-white">4</span> Contrôle permanent et alerte
            </h6>
            <p className="text-justify">
              Nos équipes se déplacent régulièrement sur le terrain pour auditer
              les informations mises à votre disposition.
            </p>
          </div>
        </div>
        <div
          className="flex-[0.5] lg:max-w-[600px] flex justify-end flex-col w-50 h-40 sm:p-8 p-4 relative"
        >
          <div className="bg-white" />
          <div>
            <img
              src="/phase4.svg"
              alt="phase4"
              className="object-contain w-50 h-40"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Explore;
