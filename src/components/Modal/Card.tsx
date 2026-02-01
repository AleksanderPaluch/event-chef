import type { ReactNode } from "react";

interface CardProps {
  title: string;
  icon: ReactNode;
  children?: ReactNode;
  src?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  icon,
  children,
  src,
}) => {
  return (
    <div className="relative flex flex-col h-56 p-2 overflow-hidden transition-colors md:h-80 group hover:bg-black/40">
      

      <div className="z-10 flex items-center justify-between text-zinc-300 group-hover:text-zinc-50">
        <p className="text-lg font-medium">{title}</p>
        <span className="text-2xl">{icon}</span>
      </div>


      <div className="relative z-10 flex-1 mt-4 md:mt-16 ">
        {children}
      </div>


      {src && (
        <div
          className="absolute inset-0 transition opacity-0 group-hover:opacity-40"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

      <Corners />
    </div>
  );
};


const Corners = () => (
  <>
    <span className="absolute left-[1px] top-[1px] z-10 h-3 w-[1px] origin-top scale-0 bg-zinc-300 transition-all duration-500 group-hover:scale-100" />
    <span className="absolute left-[1px] top-[1px] z-10 h-[1px] w-3 origin-left scale-0 bg-zinc-300 transition-all duration-500 group-hover:scale-100" />
    <span className="absolute bottom-[1px] right-[1px] z-10 h-3 w-[1px] origin-bottom scale-0 bg-zinc-300 transition-all duration-500 group-hover:scale-100" />
    <span className="absolute bottom-[1px] right-[1px] z-10 h-[1px] w-3 origin-right scale-0 bg-zinc-300 transition-all duration-500 group-hover:scale-100" />
    <span className="absolute bottom-[1px] left-[1px] z-10 h-3 w-[1px] origin-bottom scale-0 bg-zinc-300 transition-all duration-500 group-hover:scale-100" />
    <span className="absolute bottom-[1px] left-[1px] z-10 h-[1px] w-3 origin-left scale-0 bg-zinc-300 transition-all duration-500 group-hover:scale-100" />
    <span className="absolute right-[1px] top-[1px] z-10 h-3 w-[1px] origin-top scale-0 bg-zinc-300 transition-all duration-500 group-hover:scale-100" />
    <span className="absolute right-[1px] top-[1px] z-10 h-[1px] w-3 origin-right scale-0 bg-zinc-300 transition-all duration-500 group-hover:scale-100" />
  </>
);
