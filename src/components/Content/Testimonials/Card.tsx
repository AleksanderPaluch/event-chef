import { MdStar, MdStarHalf, MdStarBorder } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

interface CardProps {
  img?: string;
  name: string;
  info: string;
  rating: number; // 0 – 5 (може бути 4.5)
  createdAt: string; // ISO date: "2025-01-20"
}

const pluralizeWeeksPL = (n: number) => {
  if (n === 1) return "tydzień";

  const mod10 = n % 10;
  const mod100 = n % 100;

  if (mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14)) {
    return "tygodnie";
  }

  return "tygodni";
};


const getRelativeDatePL = (dateString: string) => {
  const date = new Date(`${dateString}T12:00:00`);
  const now = new Date();

  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (isNaN(diffDays)) return "";

  if (diffDays < 1) return "dzisiaj";
  if (diffDays < 7) return `${diffDays} dni temu`;

  const weeks = Math.floor(diffDays / 7);
  if (weeks < 5)
    return `${weeks} ${pluralizeWeeksPL(weeks)} temu`;

  return `${date.toLocaleDateString("pl-PL", {
    month: "long",
    year: "numeric",
  })}`;
};


export const Card = ({ img, name, info, rating, createdAt }: CardProps) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div
      className="
        w-[320px] md:w-[420px]
        bg-white rounded-xl border border-gray-200
        p-4 shadow-sm
        transition-all duration-200
        hover:scale-[1.02] hover:shadow-md
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          {img ? (
            <img
              src={img}
              alt={name}
              className="object-cover w-10 h-10 rounded-full"
            />
          ) : (
            <div className="flex items-center justify-center w-10 h-10 text-sm font-semibold text-gray-600 bg-gray-200 rounded-full">
              {name[0]}
            </div>
          )}

          <div>
            <p className="text-sm font-semibold leading-none text-gray-900">
              {name}
            </p>
            <p className="text-xs text-gray-500">
              {getRelativeDatePL(createdAt)}
            </p>
          </div>
        </div>

        <FcGoogle className="text-2xl" />
      </div>

      {/* Stars */}
      <div className="flex items-center gap-0.5 mb-2">
        {[...Array(fullStars)].map((_, i) => (
          <MdStar key={`full-${i}`} className="text-lg text-yellow-400" />
        ))}

        {hasHalfStar && <MdStarHalf className="text-lg text-yellow-400" />}

        {[...Array(emptyStars)].map((_, i) => (
          <MdStarBorder
            key={`empty-${i}`}
            className="text-lg text-yellow-400"
          />
        ))}
      </div>

      {/* Review text */}
      <p className="text-sm leading-relaxed text-gray-700">{info}</p>
    </div>
  );
};
