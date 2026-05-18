import { useLanguage } from "../../Translations/LanguageContext";
import { StickyCardsTranslations } from "../../Translations/StickyCardsTranslations";

export const CardAccess = () => {
  const { lang } = useLanguage();
  const t = StickyCardsTranslations[lang].access;

  return (
    <div className="flex flex-col items-center justify-between w-full max-w-md py-6 mx-auto mb-16 lg:py-6 md:flex-row">
      <div className="flex flex-col items-center gap-1 py-4 w-[300px]">
        <span className="text-lg uppercase tracking-[0.25em] text-heading">
          {t.city}
        </span>
        <span className="text-sm lg:text-xs uppercase tracking-[0.2em] font-semibold text-muted opacity-70 dark:opacity-60">
          {t.cityLabel}
        </span>
      </div>

      <div className="w-6 h-px mx-4 md:w-px md:h-6 shrink-0 bg-amber-500 dark:bg-amber-400" />

      <div className="flex flex-col items-center gap-1 px-2 py-4 w-[300px]">
        <span className="text-lg uppercase tracking-[0.25em] text-heading">
          {t.country}
        </span>
        <span className="text-sm lg:text-xs uppercase tracking-[0.2em] font-semibold text-muted opacity-70 dark:opacity-60 ">
          {t.countryLabel}
        </span>
      </div>
    </div>
  );
};