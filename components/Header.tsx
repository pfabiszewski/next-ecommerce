import Link from 'next/link';

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
                <Link href={route.href}>
                  <a>{route.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
