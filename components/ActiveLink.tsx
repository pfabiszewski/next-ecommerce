import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { Children, cloneElement, ReactElement } from 'react';
import clsx from 'clsx';

interface ActiveLinkProps extends LinkProps {
  activeClassName: string;
  children: ReactElement;
}

export const ActiveLink = ({
  activeClassName,
  children,
  ...props
}: ActiveLinkProps) => {
  const { pathname } = useRouter();
  const child = Children.only(children);

  const classes = clsx(child.props.className, {
    [activeClassName]: pathname === props.href,
  });

  return <Link {...props}>{cloneElement(child, { className: classes })}</Link>;
};
