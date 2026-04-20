import { FiInstagram, FiFacebook, FiMail, FiPhone } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="w-full px-4 py-8 border-t border-zinc-200 dark:border-zinc-900">
      <div className="flex flex-col max-w-2xl gap-10 mx-auto lg:max-w-xl">
        {/* <p className="text-lg lg:text-xl text-center uppercase tracking-[0.25em] pb-2 opacity-90">
          Event Chef
        </p> */}


<div className="flex flex-col items-center justify-between w-full max-w-3xl gap-6 px-12 md:flex-row">
   <div className="flex flex-col gap-4 ">
          <a href="tel:+48519776124" className="flex items-center gap-3 group">
            <FiPhone className="text-base text-amber-500 dark:text-amber-400 shrink-0" />
            <span className="text-sm lg:text-xs font-semibold uppercase tracking-[0.2em] opacity-50 group-hover:opacity-90 transition-opacity duration-200">
              +48 519 776 124
            </span>
          </a>
         

          <a
            href="mailto:kontakt@eventchef.pl"
            className="flex items-center gap-3 group"
          >
            <FiMail className="text-base text-amber-500 dark:text-amber-400 shrink-0" />
            <span className="text-sm lg:text-xs font-semibold uppercase tracking-[0.2em] opacity-50 group-hover:opacity-90 transition-opacity duration-200">
              kontakt@eventchef.pl
            </span>
          </a>
        </div>
{/* 
        <div className="w-12 h-px mx-auto md:w-px md:h-12 bg-amber-500 dark:bg-amber-400" /> */}

        <div className="flex gap-4 md:flex-col">
          <a
            href="https://instagram.com/sushichef"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 group"
          >
            <FiInstagram className="text-base text-amber-500 dark:text-amber-400" />
            <span className="text-sm lg:text-xs font-semibold uppercase tracking-[0.2em] opacity-50 group-hover:opacity-90 transition-opacity duration-200">
              Instagram
            </span>
          </a>

     

          <a
            href="https://facebook.com/sushichef"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 group"
          >
            <FiFacebook className="text-base text-amber-500 dark:text-amber-400" />
            <span className="text-sm lg:text-xs font-semibold uppercase tracking-[0.2em] opacity-50 group-hover:opacity-90 transition-opacity duration-200">
              Facebook
            </span>
          </a>
        </div>
</div>
    
     

        <p className="text-xs text-center lg:text-xs font-semibold uppercase tracking-[0.2em]  opacity-30 px-8">
      Wszelkie prawa zastrzeżone   <br />  © {new Date().getFullYear()} Event Chef 
        </p>
      </div>
    </footer>
  );
};
