import { Card } from "./Card";
import { CardForWho } from "./Cards/CardForWho";
import { TitleCard } from "./TitleCard";

import {
  FiBookOpen,
  FiInfo,
  FiUsers,
  FiActivity,
  FiSettings,
  FiMapPin,
} from "react-icons/fi";

interface ModalTextProps {
  modalDescription: string;
  menu: string[];
  menuIMG: string;
  modalProcess: string[];
  organization: string[];
  access: string[];
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
  access,
  chipsTitle,
  chips,
  secondaryChipsTitle = "",
  secondaryChips = [],
}) => {
  return (
    <>
      <div className="p-4 pt-14 md:p-18 lg:pt-20">
        <div className="grid grid-cols-1 mx-auto border divide-y max-w-7xl divide-neutral-700 border-neutral-700 md:grid-cols-3 md:divide-x md:divide-y-0">
          <TitleCard icon={<FiInfo />} />

          <Card title="Menu" src={menuIMG} icon={<FiBookOpen />} />
                    <Card title="Dla kogo?" icon={<FiUsers />}>
            <CardForWho
              chipsTitle={chipsTitle}
              chips={chips}
              secondaryChipsTitle={secondaryChipsTitle}
              secondaryChips={secondaryChips}
            />
          </Card>
        </div>
        <div className="grid grid-cols-1 mx-auto border-b divide-y max-w-7xl divide-neutral-700 border-x border-neutral-700 md:grid-cols-3 md:divide-x md:divide-y-0">
          <Card title="Organizacja" icon={<FiSettings />} />
          <Card title="Przebieg" icon={<FiActivity />} />
          <Card title="Dojazd" icon={<FiMapPin />} />
        </div>
      </div>
    </>
  );
};
