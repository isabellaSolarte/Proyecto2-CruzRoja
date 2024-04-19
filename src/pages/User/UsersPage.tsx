import { Grid } from '@mui/material';
import { CustomText, CustomButton, ManagmentLayout, SearchBar, DataTable, CustomColumn } from '../../components';
import { useTranslation } from 'react-i18next';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';



// TODO: CREAR EL FORMULARIO CON VALIDACIONES

const UsersPage = () => {
  const { t } = useTranslation('commons');
  const columns = [
    CustomColumn({ field: 'names', headerName: t('usersPages.userTable.name'), width: 250, format: 'text', variante: 'texto', content: '', buttonDetails: []  }),
    CustomColumn({ field: 'rol', headerName: t('usersPages.userTable.rol'), width: 150, format: 'text', variante: 'texto', content: '', buttonDetails: []  }),
    CustomColumn({ field: 'actions', headerName: t('usersPages.userTable.actions'), width:350, format: 'button', variante: 'texto', content: '', buttonDetails: [
      {
        content: t('generalButtonText.edit'),
        variant: 'contained',
        color: 'info',
        icon: <EditIcon />
      },
      {
        content: t('generalButtonText.view'),
        variant: 'contained',
        color: 'warning',
        icon: <VisibilityIcon />
      }
    ] }),
    CustomColumn({ field: 'state', headerName: t('generalButtonText.state'), format: 'switch', variante: 'texto', content: '', buttonDetails: [] })
  ];
  
  return (
    <ManagmentLayout
      title={<CustomText texto={t('pageTitles.users')} variante="titulo" />}
      actionsContent={
        <CustomButton
          content={t('generalButtonText.create')}
          onClick={() => {}}
          variant="contained"
          color="success"
        />
      }
      inputBar={<SearchBar placeholder={t('generalButtonText.search')} />}
      generalContents={
        <DataTable enableCheckboxSelection={false} dataColumns={columns} />
      }
    />
  );
};

export default UsersPage;
