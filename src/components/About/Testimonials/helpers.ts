 const pluralizeWeeksPL = (n: number) => {
  if (n === 1) return "tydzień";

  const mod10 = n % 10;
  const mod100 = n % 100;

  if (mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14)) {
    return "tygodnie";
  }

  return "tygodni";
};


export const getRelativeDatePL = (dateString: string) => {
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
