import { ActiveLink } from './ActiveLink';

const routes = [
  { href: '/', name: 'Home' },
  { href: '/about', name: 'About' },
];

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          {routes.map((route) => {
            return (
              <li key={route.href}>
                <ActiveLink activeClassName="text-pink-500" href={route.href}>
                  <a>{route.name}</a>
                </ActiveLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
