import { Navbar, Footer } from '../components';
import styles from '../styles';

const Blog = () => (
  <div>
    <Navbar />
    <section className={`${styles.paddings} relative z-10`}>
      <div className={`${styles.xPaddings}`}>
        <div className="text-center mt-20 text-[#6a79ff] font-extrabold">
          Aucune publication disponible.
        </div>
        <div className={`${styles.paddings}`}>
          <img src="/blog.svg" className="mt-2 mx-auto px-6 items-center justify-center w-40 " />
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Blog;
