/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { CustomCard, CustomIconDetails } from '../../../components';
import { RoleModel } from '../../../models';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';

interface RoleCardProps {
  rol: RoleModel;
  positiveAction: (newRol: RoleModel) => void;
  negativeAction: () => void;
}

const RoleCard = ({ rol, positiveAction, negativeAction }: RoleCardProps) => {
  const [switchState, setSwitchState] = useState(false);

  const handleSwitch = () => {
    setSwitchState(!switchState);
    if (!switchState) {
      positiveAction(rol);
    } else {
      negativeAction();
    }
  };
  return (
    <CustomCard
      key={rol.idRole}
      texto1={rol.typeRole}
      texto2={''}
      switchState={switchState}
      handleSwitchState={handleSwitch}
      icon={
        <CustomIconDetails
          description={rol.permissions.map(details => `• ${details.description}`).join('\n')}
          icon={<PrivacyTipIcon color={'warning'} />}
        />
      }
    />
  );
};

export default RoleCard;
