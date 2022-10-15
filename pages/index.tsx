import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <h1>Index page</h1>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
