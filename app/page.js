import { Footer, Navbar } from '../components';
import { About, Explore, Hero, WhatsNew } from '../sections';

const Page = () => (
  <div className="overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative about">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <Footer />
  </div>
);

export default Page;
