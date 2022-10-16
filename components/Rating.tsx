interface RatingProps {
  rating: number;
}

export const Rating = ({ rating }: RatingProps) => {
  return <p>{rating}</p>;
};
