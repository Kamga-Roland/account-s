import { Footer, Navbar, Readycontact, Temoinage } from '../components';
import { About, Explore, Hero, WhatsNew } from '../sections';

const Home = () => (
  <div className="bg-primary-black lg:px-[5%] overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <Temoinage />
    <div />
    <Readycontact />
    <div className="mt-5" />
    <Footer />
  </div>
);

export default Home;
