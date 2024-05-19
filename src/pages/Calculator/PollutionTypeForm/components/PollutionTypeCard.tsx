import { useState, useEffect } from 'react';

import { CustomCard, CustomIconDetails } from '../../../../components';
import { PollutionTypeModel } from '../../../../models';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';

interface PollutionTypeCardProps {
    pollutionType: PollutionTypeModel;
  addedPollutionType: PollutionTypeModel[]; // New prop for the list of added permissions
  positiveAction: (newPollutionType: PollutionTypeModel) => void;
  negativeAction: () => void;
}


const PollutionTypeCard = ({
  pollutionType,
  positiveAction,
  negativeAction,
}: PollutionTypeCardProps) => {
  const [switchState, setSwitchState] = useState(false);

  const isPollutionTypeAdded = () => {
    console.log('PullutionType: ', pollutionType);
    if(pollutionType.state)
      setSwitchState(true);
    
  };

  useEffect(() => {
    isPollutionTypeAdded();
  }, [pollutionType]);

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
      texto1={pollutionType.name}
      texto2={pollutionType.unity}
      sx={{ marginBottom: '1rem', backgroundColor: '#D9D9D9'}}
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
