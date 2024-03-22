import Nav from '../components/nav';
import Hero from '../components/home/hero'
import Footer from '../components/home/footer';
import Modal from '../components/modal';

const Home: React.FC = () => {

  return (
    <>
      <Nav />
      <Hero />
      <Modal />
      <Footer />
    </>
  );
};

export default Home;