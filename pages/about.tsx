import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <h1>About page</h1>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
