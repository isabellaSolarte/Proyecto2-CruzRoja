import { useState, useEffect } from 'react';
import { CustomCard } from '../../../components';
import SourcesType from '../types/SourcesType';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';

interface SourcesCardProps {
  Sources: SourcesType;
  handleSwitchState: () => void;
}

const SourcesCard = (
    { Sources, handleSwitchState }: SourcesCardProps
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
      key={Sources.id}
      texto1={Sources.name}
      sx={{ marginBottom: '1rem', backgroundColor: '#D9D9D9' }}
      switchState={Sources.state}
      handleSwitchState={handleSwitch}
      icon={<PrivacyTipIcon color={'warning'} />}
    />
  );
};

export default SourcesCard;
