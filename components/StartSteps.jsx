import styles from '../styles';

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#210080]`}
    >
      <p className="font-bold text-[20px] text-white">
        {number}
      </p>
    </div>
    <p className="font-extrabold flex-1 ml-[30px] text-[20px] text-[#210080] leading-[32.4px]">
      {text}
    </p>
  </div>
);

export default StartSteps;
