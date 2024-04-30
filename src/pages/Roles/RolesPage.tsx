import {
  CustomButton,
  CustomText,
  CustomColumn,
  DataTable,
  ManagmentLayout,
  CustomDialog,
} from '../../components';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useRolePage } from './hooks/useRolePage';
import { useNavigate } from 'react-router-dom';
import { PathNames } from '../../core';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { GridRenderCellParams } from '@mui/x-data-grid';
import WarningIcon from '@mui/icons-material/Warning';
import { putRol } from '../../services/AxiosRequests/Roles/roleRequest';

const RolesPage = () => {
  const { t } = useTranslation('commons');
  const { roles, fetchRoles } = useRolePage();
  const navigate = useNavigate();

  useEffect(() => {
    void fetchRoles();
  }, []);

  const handleEditButtonClick = (roleId: string) => {
    navigate(PathNames.EDIT_ROLE.replace(':id', roleId));
  };

  const handleCreateButtonClick = () => {
    navigate(PathNames.CREATE_ROLE);
  };

  type Color = 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [iconDialog, setIconDialog] = useState(<CheckCircleIcon />);
  const [colorDialog, setColorDialog] = useState('green');
  const [colorButton, setColorButton] = useState<Color>('success');
  const [rowData1, setRowData1] = useState({} as GridRenderCellParams['row']);

  const openDialog = (rowData: GridRenderCellParams['row']) => {
    setRowData1(rowData);

    const { switchState } = rowData;
    if (switchState) {
      setIconDialog(<WarningIcon />);
      setColorDialog('red');
      setColorButton('error');
    } else {
      setIconDialog(<CheckCircleIcon />);
      setColorDialog('green');
      setColorButton('success');
    }
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const handleCancelButtonClick = () => {
    closeDialog();
  };

  const handleContinueButtonClick = () => {
    const { id, state } = rowData1;
    const updatedRoleData = {
      ...rowData1,
      state: !state,
    };
    putRol(updatedRoleData, id)
      .then(response => {
        fetchRoles();
      })
      .catch(error => {
        console.error('Error al actualizar el estado del rol:', error);
      })
      .finally(() => {
        closeDialog();
      });
  };

  const columns = [
    CustomColumn({
      field: 'typeRole',
      headerName: t('usersPages.userTable.roles'),
      format: 'text',
      variante: 'texto',
    }),
    CustomColumn({
      field: 'actions',
      headerName: t('usersPages.userTable.actions'),
      format: 'button',
      variante: 'texto',
      buttonDetails: [
        {
          content: t('generalButtonText.edit'),
          variant: 'contained',
          color: 'info',
          icon: <EditIcon />,
          onClick: (rowData: { id: string }) => handleEditButtonClick(rowData.id),
        },
      ],
    }),
    CustomColumn({
      field: 'state',
      headerName: t('generalButtonText.state'),
      format: 'switch',
      variante: 'texto',
      onClick: openDialog,
    }),
  ];

  return (
    <ManagmentLayout
      title={<CustomText texto={t('pageTitles.roles')} variante="titulo" />}
      actionsContent={
        <CustomButton
          content={t('generalButtonText.create')}
          variant="contained"
          color="success"
          onClick={handleCreateButtonClick}
          style={{ marginLeft: '10px' }}
        />
      }
      generalContents={
        <>
          <DataTable enableCheckboxSelection={false} dataColumns={columns} dataRows={roles} />
          <CustomDialog
            isOpen={isDialogOpen}
            onClick={handleCancelButtonClick}
            title="Alerta"
            content="¿Estás seguro que deseas cambiar el estado del rol?"
            buttons={[
              {
                key: '1',
                content: 'Cancelar',
                variant: 'contained',
                color: 'inherit',
                onClick: handleCancelButtonClick,
              },
              {
                key: '2',
                content: 'Continuar',
                variant: 'contained',
                color: colorButton,
                onClick: handleContinueButtonClick,
              },
            ]}
            icon={iconDialog}
            color={colorDialog}
          />
        </>
      }
    />
  );
};

export default RolesPage;
