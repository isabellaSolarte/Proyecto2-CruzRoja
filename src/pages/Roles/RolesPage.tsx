import { CustomButton, CustomText, CustomColumn, DataTable, ManagmentLayout } from "../../components";
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useRolePage } from './hooks/useRolePage';
import CircularProgress from '@mui/material/CircularProgress'; // Importa el indicador de carga

const RolesPage = () => {
  const { t } = useTranslation('commons');
  const { roles, loading, fetchRoles } = useRolePage(); // Obtén el estado de carga desde el hook

  useEffect(() => {
    void fetchRoles();
  }, []);
  console.log(roles)
  const columns = [
    CustomColumn({ field: 'typeRole', headerName: t('usersPages.userTable.roles'), format: 'text', variante: 'texto'}),
    CustomColumn({ field: 'actions', headerName: t('usersPages.userTable.actions'), format: 'button', variante: 'texto'}),
    CustomColumn({ field: 'state', headerName: t('generalButtonText.state'), format: 'switch', variante: 'texto' })
  ];

  return (
    <ManagmentLayout
      title={<CustomText texto={t('pageTitles.roles')} variante="titulo" />}
      actionsContent={
        <CustomButton
          content={t('generalButtonText.create')}
          variant="contained"
          color="success"
          onClick={() => {
          
          }}
          style={{ marginLeft: '10px' }}
        />
      }
      generalContents={
        // Mostrar un indicador de carga si los datos se están obteniendo
        loading ? (
          <CircularProgress />
        ) : (
          // Mostrar la tabla de datos cuando los datos estén disponibles
          <DataTable enableCheckboxSelection={false} dataColumns={columns} dataRows={roles}  />
        )
      }
    />
  );
};

export default RolesPage;
