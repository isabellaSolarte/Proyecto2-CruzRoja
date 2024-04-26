import { CustomButton, CustomText, CustomColumn, DataTable, ManagmentLayout } from "../../components";
import { useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import { useRolePage } from './hooks/useRolePage';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router-dom";
import { PathNames } from "../../core";
import EditIcon from '@mui/icons-material/Edit';

const RolesPage = () => {
  const { t } = useTranslation('commons');
  const { roles, loading, fetchRoles } = useRolePage();
  const navigate = useNavigate();

  useEffect(() => {
    void fetchRoles();
  }, []);

  const handleEditButtonClick = (roleId: string) => {
    console.log("ruta: ",PathNames.EDIT_ROLE.replace(':id', roleId))
    navigate(PathNames.EDIT_ROLE.replace(':id', roleId));
    
  };

  const handleCreateButtonClick = () => {
    navigate(PathNames.CREATE_ROLE);
    console.log("ruta: ",PathNames.CREATE_ROLE);
  };

  const columns = [
    CustomColumn({ field: 'typeRole', headerName: t('usersPages.userTable.roles'), format: 'text', variante: 'texto'}),
    CustomColumn({ field: 'actions', headerName: t('usersPages.userTable.actions'), format: 'button', variante: 'texto',  buttonDetails: [
      {
        content: t('generalButtonText.edit'),
        variant: 'contained',
        color: 'info',
        icon: <EditIcon />,
        onClick: (rowData: { id: string }) => handleEditButtonClick(rowData.id),
      }
    ] }),
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
