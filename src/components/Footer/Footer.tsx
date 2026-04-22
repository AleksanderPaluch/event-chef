import { FiInstagram, FiFacebook, FiMail, FiPhone } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800">
      <div className="flex flex-col items-start justify-between gap-10 px-6 py-12 mx-auto max-w-7xl md:flex-row md:items-center">

        {/* Brand */}
        <p className="text-sm font-light tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-500">
          Event Chef
        </p>

        {/* Contact */}
        <div className="flex flex-col gap-3">
              <a
            href="tel:+48519776124"
            className="flex items-center gap-3 group"
          >
            <FiPhone className="flex-shrink-0 text-sm text-accent" />
            <span className="text-sm transition-colors duration-200 text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100">
              +48 519 776 124
            </span>
          </a>
              <a
            href="mailto:kontakt@eventchef.pl"
            className="flex items-center gap-3 group"
          >
            <FiMail className="flex-shrink-0 text-sm text-accent" />
            <span className="text-sm transition-colors duration-200 text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100">
              kontakt@eventchef.pl
            </span>
          </a>
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-3">
              <a
            href="https://instagram.com/sushichef"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 group"
          >
            <FiInstagram className="text-sm text-accent" />
            <span className="text-sm transition-colors duration-200 text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100">
              Instagram
            </span>
          </a>
          <a
            href="https://facebook.com/sushichef"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 group"
          >
            <FiFacebook className="text-sm text-accent" />
            <span className="text-sm transition-colors duration-200 text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100">
              Facebook
            </span>
          </a>
        </div>

        {/* Legal */}
        <p className="text-xs text-ghost">
          © {new Date().getFullYear()} Event Chef
        </p>

      </div>
    </footer>
  );
};