/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { CustomCard, CustomIconDetails } from '../../../components';
import { PermissionModel } from '../../../models';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';

interface PermissionCardProps {
  permission: PermissionModel;
  positiveAction: (newRol: PermissionModel) => void;
  negativeAction: () => void;
}

const RoleCard = ({ permission, positiveAction, negativeAction }: PermissionCardProps) => {
  const [switchState, setSwitchState] = useState(false);

  const handleSwitch = () => {
    setSwitchState(!switchState);
    if (!switchState) {
      positiveAction(permission);
    } else {
      negativeAction();
    }
  };
  return (
    <CustomCard
      key={permission.id}
      texto1={permission.name}
      texto2={''}
      sx={{marginBottom:'1rem'}}
      switchState={switchState}
      handleSwitchState={handleSwitch}
      icon={
        <CustomIconDetails
          description={permission.description}
          icon={<PrivacyTipIcon color={'warning'} />}
        />
      }
    />
  );
};

export default RoleCard;
