import { MdStar, MdStarHalf, MdStarBorder } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { getRelativeDatePL } from "./helpers.ts";

interface CardProps {
  img?: string;
  name: string;
  title?: string; 
  info: string;
  rating: number;
  createdAt: string;
}

export const ReviewCard = ({ img, name, info, rating, createdAt }: CardProps) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
  <div className="review-card">

  <div className="review-header">
    <div className="review-user">

      {img ? (
        <img
          src={img}
          alt={name}
          className="review-avatar"
        />
      ) : (
        <div className="review-avatar-fallback">
          {name[0]}
        </div>
      )}

      <div>
        <p className="review-name">{name}</p>
        <p className="review-date">
          {getRelativeDatePL(createdAt)}
        </p>
      </div>
    </div>

    <FcGoogle className="text-2xl" />
  </div>

  <div className="review-stars">
    {[...Array(fullStars)].map((_, i) => (
      <MdStar key={`full-${i}`} className="text-lg text-yellow-400" />
    ))}

    {hasHalfStar && (
      <MdStarHalf className="text-lg text-yellow-400" />
    )}

    {[...Array(emptyStars)].map((_, i) => (
      <MdStarBorder
        key={`empty-${i}`}
        className="text-lg text-yellow-400"
      />
    ))}
  </div>

  <p className="review-text">
    {info}
  </p>
</div>
  );
};
