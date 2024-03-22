import Nav from '../components/nav';
import Hero from '../components/home/hero'
import Footer from '../components/home/footer';
import Grid from '../components/home/grid';

const Home: React.FC = () => {

  return (
    <>
      <Nav />
      <Hero />
      <Grid />
      <Footer />
    </>
  );
};

export default Home;