import { FiLoader, FiCheck } from "react-icons/fi";

type SubmitStatus = "idle" | "sending" | "success" | "error";

const SubmitButton = ({
  text,
  status = "idle",
}: {
  text: string;
  status?: SubmitStatus;
}) => {
  return (
    <button
      type="submit"
      disabled={status === "sending" || status === "success"}
      className="flex items-center gap-2 text-lg underline transition-colors md:text-base underline-offset-4 decoration-zinc-300 dark:decoration-zinc-600 hover:decoration-zinc-900 dark:hover:decoration-zinc-100 text-zinc-700 dark:text-zinc-400 disabled:opacity-50 disabled:pointer-events-none w-fit"
    >
      {status === "sending" && (
        <FiLoader className="flex-shrink-0 animate-spin text-zinc-400" />
      )}
      {status === "success" && (
        <FiCheck className="flex-shrink-0 text-green-600" />
      )}
      <span>
        {status === "sending"
          ? "Wysyłanie..."
          : status === "success"
          ? "Wysłano!"
          : status === "error"
          ? "Spróbuj ponownie"
          : text}
      </span>
    </button>
  );
};

export default SubmitButton;
