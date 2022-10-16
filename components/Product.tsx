import Link from 'next/link';
import { Rating } from './Rating';

interface ProductProps {
  data: {
    href: string;
    thumbnailUrl: string;
    thumbnailAlt: string;
    description: string;
    rating: number;
  };
}

export const Product = ({ data }: ProductProps) => {
  return (
    <Link href={data.href}>
      <a>
        <img src={data.thumbnailUrl} alt={data.thumbnailAlt} />
        <p>{data.description}</p>
        <Rating rating={data.rating} />
      </a>
    </Link>
  );
};
