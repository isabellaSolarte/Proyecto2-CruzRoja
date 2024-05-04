import { useState, useEffect } from 'react';
import { CustomCard, CustomIconDetails } from '../../../components';
import { PermissionModel } from '../../../models';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';

interface PermissionCardProps {
  permission: PermissionModel;
  addedPermissions: PermissionModel[]; // New prop for the list of added permissions
  positiveAction: (newRol: PermissionModel) => void;
  negativeAction: () => void;
}

interface PermissionMessageMap {
  [key: number]: string;
}

const permissionMessages: PermissionMessageMap = {
  100: 'Listar roles',
  101: 'Crear roles',
  102: 'Actualizar roles',
  103: 'Eliminar roles',
  104: 'Consultar roles',
  105: 'Listar permisos',
  200: 'Listar voluntarios',
  201: 'Crear voluntarios',
  202: 'Actualizar voluntarios',
  203: 'Consultar voluntarios',
  204: 'Actualizar posición voluntario',
  300: 'Listar empresas',
  301: 'Crear empresa',
  302: 'Actualizar empresa',
  303: 'Consultar empresa',
  304: 'Consultar documento de empresa'
};

const PermissionCard = ({ permission, addedPermissions, positiveAction, negativeAction }: PermissionCardProps) => {
  const [switchState, setSwitchState] = useState(false);

  const isPermissionAdded = () => {
    addedPermissions?.map((permiso)=> {
      if (permiso.id === permission.id){
        setSwitchState(true)
      }
    })
  };

  useEffect(() => {
    isPermissionAdded()
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
      texto1={permissionMessages[permission.id]}
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
