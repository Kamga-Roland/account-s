
import {
  Footer,
  History,
  Mission,
  Navbar,
  Slogan,
  Support,
  Values,
  Vision,
} from '../components';
import { World } from '../sections';
import styles from '../styles';

const about = () => (
  <>
    <Navbar />
    <section className={`${styles.paddings} lg:px-[5%] relative z-10`}>
      <History />
      <Support />
      <World />
      <Vision />
      <Mission />
      <Values />
      <Slogan />
    </section>
    <Footer />
  </>
);

export default about;
