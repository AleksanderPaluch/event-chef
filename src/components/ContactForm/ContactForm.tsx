// ContactForm.tsx
import { useState } from "react";
import { AnimatePresence, motion, easeInOut } from "framer-motion";

import { Motion } from "../Motion/Motion";
import { FormTranslations } from "../Translations/FormTranslations";
import { FormSelect } from "./FormSelect";
import { DateField } from "./Calendar/DateField";
import { CustomSelect } from "./Calendar/CustomSelect";
import homeSushi from "../../assets/home_sushi.jpg";
import officeSushi from "../../assets/office_sushi.jpg";
import { Controller, useForm } from "react-hook-form";
import SubmitButton from "../Button/SubmitButton";
import { useLanguage } from "../Translations/LanguageContext";

type RepresentType = "company" | "individual";

const BASE_TRANSITION = { duration: 0.4, ease: easeInOut };

const inputClass =
  "w-full bg-transparent border-b lg:min-w-[270px] border-zinc-200 dark:border-zinc-800 py-2 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-300 dark:placeholder:text-zinc-600 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-500 transition-colors duration-200";

const labelClass = "block text-base text-zinc-400 dark:text-zinc-300 mb-0";

// ─── Images ───────────────────────────────────────────────────────────────────

const Images = ({ selected }: { selected: RepresentType }) => (
  <div className="relative overflow-hidden rounded-lg w-full min-h-[220px] lg:min-h-full">
    <motion.div
      initial={false}
      animate={{ x: selected === "individual" ? "0%" : "100%" }}
      transition={{ ease: "anticipate", duration: 0.75 }}
      className="absolute inset-0 bg-center bg-cover"
      style={{ backgroundImage: `url(${homeSushi})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
    </motion.div>
    <motion.div
      initial={false}
      animate={{ x: selected === "company" ? "0%" : "-100%" }}
      transition={{ ease: "anticipate", duration: 0.75 }}
      className="absolute inset-0 bg-center bg-cover"
      style={{ backgroundImage: `url(${officeSushi})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
    </motion.div>
  </div>
);

// ─── Form ─────────────────────────────────────────────────────────────────────

type SubmitStatus = "idle" | "sending" | "success" | "error";

type FormValues = {
  name: string;
  email: string;
  company: string;
  eventType: string;
  guests: string;
  location: string;
  message: string;
  date: Date | null;
  consent: boolean;
};

const ErrorMsg = ({ message }: { message?: string }) =>
  message ? <p className="mt-1 text-sm text-red-800">{message}</p> : null;

const Form = ({
  selected,
  setSelected,
}: {
  selected: RepresentType;
  setSelected: (v: RepresentType) => void;
}) => {
  const { lang } = useLanguage();
  const t = FormTranslations[lang];
  const e = t.errors;

  const eventOptions = [
    { value: "live", label: t.eventTypes.live },
    { value: "corporate", label: t.eventTypes.corporate },
    { value: "masterclass", label: t.eventTypes.masterclass },
    { value: "omakase", label: t.eventTypes.omakase },
    { value: "wedding", label: t.eventTypes.wedding },
    { value: "bachelorette", label: t.eventTypes.bachelorette },
    { value: "other", label: t.eventTypes.other },
  ];

  const [status, setStatus] = useState<SubmitStatus>("idle");

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      eventType: "",
      guests: "",
      location: "",
      message: "",
      date: null,
      consent: false,
    },
  });

  // ── Submit ───────────────────────────────────────────────────────────────
  const onSubmit = async (data: FormValues) => {
    setStatus("sending");
    const eventLabel =
      eventOptions.find((o) => o.value === data.eventType)?.label ??
      data.eventType;
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          eventType: eventLabel,
          date: data.date ? data.date.toLocaleDateString("pl-PL") : null,
          representType: selected,
          lang, // ✅
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  // ── Success state ────────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <p className="text-2xl font-semibold">✅ Zapytanie wysłane!</p>
        <p className="text-zinc-400">
          Dziękujemy — odpiszemy do Ciebie w ciągu 24 godzin.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-6"
    >
      {/* Name + Represent */}
      <div className="flex flex-col gap-6 md:flex-row md:justify-between">
        <div>
          <label className={labelClass}>{t.nameLabel}</label>
          <input
            type="text"
            placeholder={t.namePlaceholder}
            className={`${inputClass} ${errors.name ? "border-red-500" : ""}`}
            {...register("name", { required: e.name })}
          />
          <ErrorMsg message={errors.name?.message} />
        </div>
        <div>
          <label className={labelClass}>{t.representLabel}</label>
          <FormSelect
            selected={selected}
            setSelected={setSelected}
            lang={lang}
          />
        </div>
      </div>

      {/* Company (conditional) */}
      <AnimatePresence>
        {selected === "company" && (
          <motion.div
            initial={{ marginTop: -80, opacity: 0 }}
            animate={{ marginTop: 0, opacity: 1 }}
            exit={{ marginTop: -80, opacity: 0 }}
            transition={BASE_TRANSITION}
          >
            <label className={labelClass}>{t.companyNameLabel}</label>
            <input
              type="text"
              autoComplete="organization"
              placeholder={t.companyNamePlaceholder}
              className={`${inputClass} ${errors.company ? "border-red-500" : ""}`}
              {...register("company", {
                validate: (val) =>
                  selected !== "company" || !!val.trim() || e.company,
              })}
            />
            <ErrorMsg message={errors.company?.message} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Email */}
      <div>
        <label className={labelClass}>{t.emailLabel}</label>
        <input
          type="email"
          placeholder={t.emailPlaceholder}
          className={`${inputClass} ${errors.email ? "border-red-500" : ""}`}
          {...register("email", {
            required: e.email,
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: e.emailInvalid,
            },
          })}
        />
        <ErrorMsg message={errors.email?.message} />
      </div>

      {/* Event type + Guests */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className={labelClass}>{t.eventTypeLabel}</label>
          <Controller
            name="eventType"
            control={control}
            rules={{ required: e.eventType }}
            render={({ field }) => (
              <CustomSelect
                options={eventOptions}
                value={field.value}
                onChange={field.onChange}
                placeholder={t.eventTypes.label}
              />
            )}
          />
          <ErrorMsg message={errors.eventType?.message} />
        </div>
        <div>
          <label className={labelClass}>{t.guestsLabel}</label>
          <input
            type="text"
            placeholder={t.guestsPlaceholder}
            className={`${inputClass} ${errors.guests ? "border-red-500" : ""}`}
            {...register("guests", { required: e.guests })}
          />
          <ErrorMsg message={errors.guests?.message} />
        </div>
      </div>

      {/* Date + Location */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className={labelClass}>{t.dateLabel}</label>
          <Controller
            name="date"
            control={control}
            rules={{ required: e.date }}
            render={({ field }) => (
              <DateField
                value={field.value}
                lang={lang}
                onChange={field.onChange}
              />
            )}
          />
          <ErrorMsg message={errors.date?.message} />
        </div>
        <div>
          <label className={labelClass}>{t.locationLabel}</label>
          <input
            type="text"
            autoComplete="address-level2"
            placeholder={t.locationPlaceholder}
            className={`${inputClass} ${errors.location ? "border-red-500" : ""}`}
            {...register("location", { required: e.location })}
          />
          <ErrorMsg message={errors.location?.message} />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className={labelClass}>{t.messageLabel}</label>
        <textarea
          placeholder={t.messagePlaceholder}
          rows={3}
          className={`${inputClass} resize-none ${errors.message ? "border-red-500" : ""}`}
          {...register("message")}
        />
        <ErrorMsg message={errors.message?.message} />
      </div>

      {/* Consent + Submit */}
      <div className="flex flex-col gap-2 pt-2">
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="consent"
              className="flex-shrink-0 w-4 h-4 mt-1 accent-white dark:accent-black"
              {...register("consent", { required: e.consent })}
            />
            <label
              htmlFor="consent"
              className="text-lg leading-relaxed md:text-base text-zinc-400 dark:text-zinc-500"
            >
              {t.agreements.contact}
            </label>
          </div>
          <SubmitButton text={t.submit} status={status} />
        </div>
        <ErrorMsg message={errors.consent?.message} />
        {status === "error" && (
          <p className="text-sm text-red-500">{e.sendError}</p>
        )}
      </div>
    </form>
  );
};

export default Form;

// ─── Section ──────────────────────────────────────────────────────────────────

export const ContactForm = () => {
  const [selected, setSelected] = useState<RepresentType>("individual");

  return (
    <section id="contact" className="px-6 py-24 mx-auto lg:py-32 max-w-7xl">
      <div className="mb-8 lg:mb-20">
        <Motion>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-amber-700 dark:text-amber-400 mb-4">
            Kontakt
          </p>
          <h2 className="mb-6 text-4xl font-light tracking-tight md:text-5xl text-zinc-900 dark:text-zinc-100">
            Indywidualna wycena
          </h2>
        </Motion>
        <Motion>
          <p className="max-w-md text-base leading-relaxed text-zinc-400 dark:text-zinc-500">
            Opisz swoje wydarzenie — a my zajmiemy się resztą. W ciągu 24 godzin
            prześlemy propozycję dopasowaną do Twoich potrzeb.
          </p>
        </Motion>
      </div>

      <div className="w-full h-px mb-8 lg:mb-16 bg-zinc-200 dark:bg-zinc-800" />
      <div className="grid items-stretch grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-28">
        <div className="order-2 lg:order-1">
          <Form selected={selected} setSelected={setSelected} />
        </div>
        <div className="order-1 lg:order-2">
          <Images selected={selected} />
        </div>
      </div>
      <div className="w-full h-px mt-4 lg:mt-8 bg-zinc-200 dark:bg-zinc-800" />
      <p className="max-w-full mt-6 text-xs leading-relaxed text-justify text-zinc-300 dark:text-zinc-600">
        Administratorem danych osobowych jest Event Chef. Dane osobowe
        przetwarzane są w celu obsługi zapytania. Podanie danych jest
        dobrowolne, ale niezbędne do udzielenia odpowiedzi. Przysługuje Ci prawo
        dostępu do danych, ich poprawiania, usunięcia, ograniczenia
        przetwarzania oraz cofnięcia zgody w dowolnym momencie. Szczegóły
        znajdują się w Polityce Prywatności.
      </p>
    </section>
  );
};
