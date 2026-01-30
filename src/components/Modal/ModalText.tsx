interface ModalTextProps {
  chipsTitle?: string;
  chips?: string[];
  secondaryChipsTitle?: string;
  secondaryChips?: string[];
}

export const ModalText: React.FC<ModalTextProps> = ({
  chipsTitle,
  chips,
  secondaryChipsTitle = "",
  secondaryChips = [],
}) => {
  return (
    <>
    
        <div className=" h-[1000px] bg-zinc-950 mt-10 p-3">
      <p>{chipsTitle}</p>
      <p>{chips}</p>
      <p>{secondaryChipsTitle}</p>
      <p>{secondaryChips}</p>
    </div>


    
    
    </>

  );
};
