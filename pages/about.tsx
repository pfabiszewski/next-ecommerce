import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Main } from '../components/Main';

const AboutPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Main>
        <h1>About page</h1>
      </Main>
      <Footer />
    </div>
  );
};

export default AboutPage;
