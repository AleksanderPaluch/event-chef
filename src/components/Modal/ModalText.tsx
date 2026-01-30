interface ModalTextProps {
  modalDescription: string;
  menu: string[];
  menuIMG: string;
  modalProcess: string[];
  organization: string[];
  Access: string[];
  chipsTitle?: string;
  chips?: string[];
  secondaryChipsTitle?: string;
  secondaryChips?: string[];
}

export const ModalText: React.FC<ModalTextProps> = ({
  modalDescription,
  menu,
  menuIMG,
  modalProcess,
  organization,
  Access,
  chipsTitle,
  chips,
  secondaryChipsTitle = "",
  secondaryChips = [],
}) => {
  return (
    <>
      <div className=" h-[1000px] bg-zinc-950 mt-10 p-3">
        <p>{modalDescription}</p>
        <p>{menu}</p>
        <img src={menuIMG} alt="" width="400px" />
        <p>{modalProcess}</p>
        <p>{organization}</p>
        <p>{Access}</p>
        <p>{chipsTitle}</p>
        <p>{chips}</p>
        <p>{secondaryChipsTitle}</p>
        <p>{secondaryChips}</p>
      </div>
    </>
  );
};
