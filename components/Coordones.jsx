import { FaLocationArrow, FaPhone } from 'react-icons/fa';

const Coordones = () => (
  <div>
    <div className="flex-col lg:flex-row">
      <div className="px-[10%] mb-5 flex">
        <FaLocationArrow className="w-20 h-20" />
        <p className="mt-5">
          5643 Douala-Cameroun <br /> 104 Bd Sebastopol, 75003 Paris
        </p>
      </div>
      <div className="flex px-[10%]">
        <FaPhone className="w-20 h-20" />
        <p className="mt-5">
          +237 681 482 249 <br /> +33635 757 498
        </p>
      </div>
    </div>
  </div>
);

export default Coordones;
