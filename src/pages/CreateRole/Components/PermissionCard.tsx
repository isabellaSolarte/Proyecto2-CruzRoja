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
interface PermissionMessageMap {
  [key: number]: string;
}

const permissionMessages:PermissionMessageMap = {
  100: 'Listar roles',
  101: 'Crear roles',
  102: 'Actualizar roles',
  103: 'Eliminar roles',
  104: 'Consultar roles',
  105: 'Listar permisos'
};
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
      texto1={permissionMessages[permission.id]}
      texto2={''}
      sx={{marginBottom:'1rem', backgroundColor:'#D9D9D9'}}
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
