import { Card } from "./Card";
import { CardAccess } from "./Cards/CardAccess";
import { CardForWho } from "./Cards/CardForWho";
import { CardMenu } from "./Cards/CardMenu";
import { CardOrganization } from "./Cards/CardOrganization";
import { CardProcess } from "./Cards/CardProcess";
import { TitleCard } from "./Cards/TitleCard";

import {
  FiBookOpen,
  FiInfo,
  FiUsers,
  FiWatch,
  FiSettings,
  FiMapPin,
} from "react-icons/fi";

interface ModalTextProps {
  modalDescription: string;
  menu: string[];
  menuIMG: string;
  modalProcess?: ProcessItem[];
  organization: string[];
  chipsTitle?: string;
  chips?: string[];
  secondaryChipsTitle?: string;
  secondaryChips?: string[];
}

interface ProcessItem {
  time: string;
  label: string;
}

export const ModalText: React.FC<ModalTextProps> = ({
  modalDescription,
  menu,
  menuIMG,
  modalProcess,
  organization,
  chipsTitle,
  chips,
  secondaryChipsTitle = "",
  secondaryChips = [],
}) => {
  return (
    <>
      <div className="p-4 pt-14 md:p-18 lg:pt-12">
        <div className="grid grid-cols-1 mx-auto border divide-y max-w-7xl divide-neutral-700 border-neutral-700 md:grid-cols-3 md:divide-x md:divide-y-0">
          <TitleCard icon={<FiInfo />} modalDescription={modalDescription} />
          <Card title="Dla kogo?" icon={<FiUsers />}>
            <CardForWho
              chipsTitle={chipsTitle}
              chips={chips}
              secondaryChipsTitle={secondaryChipsTitle}
              secondaryChips={secondaryChips}
            />
          </Card>
          <Card title="Menu" icon={<FiBookOpen />} src={menuIMG}>
            <CardMenu menu={menu} />
          </Card>
        </div>
        <div className="grid grid-cols-1 mx-auto border-b divide-y max-w-7xl divide-neutral-700 border-x border-neutral-700 md:grid-cols-3 md:divide-x md:divide-y-0">
          <Card title="Organizacja" icon={<FiSettings />}>
            <CardOrganization items={organization} />
          </Card>

          <Card title="Przebieg" icon={<FiWatch />}>
            <CardProcess modalProcess={modalProcess} />
          </Card>

          <Card title="Dojazd" icon={<FiMapPin />}>
            <CardAccess />
          </Card>
        </div>
      </div>
    </>
  );
};
