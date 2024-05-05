import { useState, useEffect } from 'react';
import { CustomCard, CustomIconDetails } from '../../../components';
import { PermissionModel } from '../../../models';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import { PermissionsList } from '../../../utils/Permissions';

interface PermissionCardProps {
  permission: PermissionModel;
  addedPermissions: PermissionModel[]; // New prop for the list of added permissions
  positiveAction: (newRol: PermissionModel) => void;
  negativeAction: () => void;
}

const PermissionCard = ({
  permission,
  addedPermissions,
  positiveAction,
  negativeAction,
}: PermissionCardProps) => {
  const [switchState, setSwitchState] = useState(false);

  const isPermissionAdded = () => {
    addedPermissions?.map(permiso => {
      if (permiso.id === permission.id) {
        setSwitchState(true);
      }
    });
  };

  useEffect(() => {
    isPermissionAdded();
  }, [addedPermissions, permission]);

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
      texto1={PermissionsList[permission.id]}
      texto2={''}
      sx={{ marginBottom: '1rem', backgroundColor: '#D9D9D9' }}
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

export default PermissionCard;
