import { useState, useEffect } from 'react';
import { CustomCard, CustomIconDetails } from '../../../components';
import { PollutionTypeModel } from '../../../models';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';

interface PollutionTypeCardProps {
    pollutionType: PollutionTypeModel;
  addedPollutionType: PollutionTypeModel[]; // New prop for the list of added permissions
  positiveAction: (newPollutionType: PollutionTypeModel) => void;
  negativeAction: () => void;
}

interface PollutionTypeMessageMap {
  [key: number]: string;
}

const pollutionTypeMessages: PollutionTypeMessageMap = {
  100: 'Consumo de carbono',
  101: 'Bagazo',
  102: 'Carbon Mineral',
  103: 'Madera',
};

const PollutionTypeCard = ({
    pollutionType,
  addedPollutionType,
  positiveAction,
  negativeAction,
}: PollutionTypeCardProps) => {
  const [switchState, setSwitchState] = useState(false);

  const isPollutionTypeAdded = () => {
    addedPollutionType?.map(tipoContaminante => {
      if (tipoContaminante.id === pollutionType.id) {
        setSwitchState(true);
      }
    });
  };

  useEffect(() => {
    isPollutionTypeAdded();
  }, [addedPollutionType, pollutionType]);

  const handleSwitch = () => {
    setSwitchState(!switchState);
    if (!switchState) {
      positiveAction(pollutionType);
    } else {
      negativeAction();
    }
  };

  return (
    <CustomCard
      key={pollutionType.id}
      texto1={pollutionTypeMessages[pollutionType.id]}
      texto2={''}
      sx={{ marginBottom: '1rem', backgroundColor: '#D9D9D9' }}
      switchState={switchState}
      handleSwitchState={handleSwitch}
      icon={
        <CustomIconDetails
          description={pollutionType.description}
          icon={<PrivacyTipIcon color={'warning'} />}
        />
      }
    />
  );
};

export default PollutionTypeCard;
