import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";

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
  message ? <p className="mt-1 text-sm text-red-500">{message}</p> : null;

const Form = ({
  selected,
  setSelected,
}: {
  selected: RepresentType;
  setSelected: (v: RepresentType) => void;
}) => {
  const lang = "pl";
  const t = FormTranslations[lang];

  const eventOptions = [
    { value: "live", label: t.eventTypes.live },
    { value: "corporate", label: t.eventTypes.corporate },
    { value: "masterclass", label: t.eventTypes.masterclass },
    { value: "omakase", label: t.eventTypes.omakase },
    { value: "wedding", label: t.eventTypes.wedding },
    { value: "bachelorette", label: t.eventTypes.bachelorette },
    { value: "other", label: t.eventTypes.other },
  ];

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

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
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          date: data.date ? data.date.toLocaleDateString("pl-PL") : null,
          representType: selected,
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
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">

      {/* Name + Represent */}
      <div className="grid grid-cols-1 gap-6 lg:gap-28 md:grid-cols-2">
        <div>
          <label className={labelClass}>{t.nameLabel}</label>
          <input
            type="text"
            placeholder={t.namePlaceholder}
            className={`${inputClass} ${errors.name ? "border-red-500" : ""}`}
            {...register("name", { required: "Imię i nazwisko jest wymagane" })}
          />
          <ErrorMsg message={errors.name?.message} />
        </div>
        <div>
          <label className={labelClass}>{t.representLabel}</label>
          <FormSelect selected={selected} setSelected={setSelected} lang={lang} />
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
                  selected !== "company" || !!val.trim() || "Nazwa firmy jest wymagana",
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
            required: "E-mail jest wymagany",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Podaj poprawny adres e-mail",
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
            rules={{ required: "Wybierz typ eventu" }}
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
            {...register("guests", { required: "Podaj liczbę gości" })}
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
            rules={{ required: "Wybierz datę eventu" }}
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
            {...register("location", { required: "Podaj lokalizację" })}
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
          {...register("message", { required: "Wiadomość jest wymagana" })}
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
              {...register("consent", { required: "Zgoda jest wymagana" })}
            />
            <label
              htmlFor="consent"
              className="text-lg leading-relaxed md:text-base text-zinc-400 dark:text-zinc-500"
            >
              {t.agreements.contact}
            </label>
          </div>

          <Button
            variant="submit"
            text={status === "sending" ? "Wysyłanie..." : t.submit}
          />
        </div>
        <ErrorMsg message={errors.consent?.message} />
        {status === "error" && (
          <p className="text-sm text-red-500">
            Coś poszło nie tak. Spróbuj ponownie lub napisz bezpośrednio na kontakt@eventchef.pl
          </p>
        )}
      </div>

    </form>
  );
};

export default Form;
