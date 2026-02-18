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
  textTitle?: string;
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
  textTitle,
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
    <div className="modal-text-wrapper">
      <div className="modal-grid modal-grid-primary">
        <TitleCard
          icon={<FiInfo />}
          textTitle={textTitle}
          modalDescription={modalDescription}
        />

        <Card title="Dla kogo?" icon={<FiUsers />}>
          <CardForWho
            chipsTitle={chipsTitle}
            chips={chips}
            secondaryChipsTitle={secondaryChipsTitle}
            secondaryChips={secondaryChips}
          />
        </Card>

        <Card title="Menu" icon={<FiBookOpen />} src={menuIMG}>
          <CardMenu menu={menu} omakase />
        </Card>
      </div>

      <div className="modal-grid modal-grid-secondary">
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
  );
};
