import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Main } from '../components/Main';
import { Product } from '../components/Product';

const DATA = {
  href: '/',
  thumbnailUrl:
    'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2680&q=80',
  thumbnailAlt: 'Black sports shoes',
  description:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, vero?',
  rating: 4.5,
};

const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Main>
        <h1>Index page</h1>
        <Product data={DATA} />
      </Main>
      <Footer />
    </div>
  );
};

export default HomePage;
