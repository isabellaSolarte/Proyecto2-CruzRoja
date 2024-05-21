import { useState, useEffect } from 'react';
import { CustomCard, CustomIconDetails } from '../../../../components';
import SourcesType from '../types/SourcesType';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';

interface SourcesCardProps {
  source: SourcesType;
  handleSwitchState: () => void;
}

const SourcesCard = (
    { source, handleSwitchState }: SourcesCardProps
) => {
  const [switchState, setSwitchState] = useState(false);

  useEffect(() => {
    setSwitchState(switchState);
  }, [switchState]);

  const handleSwitch = () => {
    setSwitchState(!switchState);
    handleSwitchState();
  };

  return (
    <CustomCard
      key={source.id}
      texto1={source.name}
      sx={{ marginBottom: '1rem', backgroundColor: '#D9D9D9' }}
      switchState={source.state}
      handleSwitchState={handleSwitch}
      icon={
        <CustomIconDetails
            description={source.description}
            icon={<PrivacyTipIcon color={'warning'} />}
          />
        }
    />
  );
};

export default SourcesCard;
