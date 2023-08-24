
import {
  Footer,
  Navbar,
  Ourservice,
} from '../components';
import styles from '../styles';

const services = () => (
  <>
    <Navbar />
    <section className={`${styles.paddings} relative z-10`}>
      <Ourservice />
    </section>
    <Footer />
  </>
);

export default services;
