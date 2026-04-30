import { useState } from "react";
import { AnimatePresence, motion, easeInOut } from "framer-motion";
import { Controller, useForm } from "react-hook-form";

import { FormTranslations } from "../Translations/FormTranslations";
import { RepresentationSelector } from "./RepresentationSelector";
import { DateField } from "./Calendar/DateField";
import { EventSelector } from "./Calendar/EventSelector";
import SubmitButton from "../Button/SubmitButton";
import { useLanguage } from "../Translations/LanguageContext";
import { type RepresentType, type SubmitStatus, type FormValues } from "./types";

const BASE_TRANSITION = { duration: 0.4, ease: easeInOut };

const inputClass =
  "w-full bg-transparent border-b lg:min-w-[270px] border-zinc-200 dark:border-zinc-800 py-2 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-300 dark:placeholder:text-zinc-600 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-500 transition-colors duration-200";

const labelClass = "block text-base text-zinc-400 dark:text-zinc-300 mb-0";

const ErrorMsg = ({ message }: { message?: string }) =>
  message ? <p className="mt-1 text-sm text-red-800">{message}</p> : null;

export const Form = ({
  selected,
  setSelected,
  sectionRef,
}: {
  selected: RepresentType;
  setSelected: (v: RepresentType) => void;
  sectionRef: React.RefObject<HTMLElement | null>;
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
    mode: "onSubmit",
    reValidateMode: "onSubmit",
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
          lang,
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
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
          <RepresentationSelector
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
              <EventSelector
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
