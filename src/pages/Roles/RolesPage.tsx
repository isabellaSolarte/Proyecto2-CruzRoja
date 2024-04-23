import { CustomButton, CustomText, CustomColumn, DataTable, ManagmentLayout } from "../../components";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRolePage } from './hooks/useRolePage';
import CircularProgress from '@mui/material/CircularProgress'; // Importa el indicador de carga
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from "react-router-dom";
import { PathNames } from "../../core";
import EditIcon from '@mui/icons-material/Edit';

const RolesPage = () => {
  const { t } = useTranslation('commons');
  const { roles, loading, fetchRoles } = useRolePage(); // Obtén el estado de carga desde el hook

  useEffect(() => {
    void fetchRoles();
  }, []);
  console.log(roles)


  
  const navigate = useNavigate(); // Utilize the useNavigate hookk
  
  const handleEditButtonClick = (rowData: any) => {

  };

  const handleCreateButtonClick = () => {
    navigate(PathNames.CREATE_ROLE); // Navega a la ruta PathNames.CREATE_ROLE al hacer clic en el botón
  };
  const columns = [
    CustomColumn({ field: 'typeRole', headerName: t('usersPages.userTable.roles'), format: 'text', variante: 'texto'}),
    CustomColumn({ field: 'actions', headerName: t('usersPages.userTable.actions'), format: 'button', variante: 'texto',  buttonDetails: [
      {
        content: t('generalButtonText.edit'),
        variant: 'contained',
        color: 'info',
        icon: <EditIcon />,
        onClick: handleEditButtonClick,
      }
    ] }),
    CustomColumn({ field: 'state', headerName: t('generalButtonText.state'), format: 'switch', variante: 'texto' })
  ];
  
  type Color = 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [iconDialog, setIconDialog] = useState(<CheckCircleIcon/>);
  const [colorDialog, setColorDialog] = useState('green');
  const [colorButton, setColorButton] = useState<Color>('success');


 

  return (
    <ManagmentLayout
      title={<CustomText texto={t('pageTitles.roles')} variante="titulo" />}
      actionsContent={
        <CustomButton
          content={t('generalButtonText.create')}
          variant="contained"
          color="success"
          onClick= {handleCreateButtonClick}
          style={{ marginLeft: '10px' }}
        />
      }
      generalContents={
        loading ? (
          <CircularProgress />
        ) : (
          <DataTable enableCheckboxSelection={false} dataColumns={columns} dataRows={roles}  />
        )
      }
    />
  );
};

export default RolesPage;
