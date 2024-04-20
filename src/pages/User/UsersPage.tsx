import { CustomText, CustomButton, ManagmentLayout, SearchBar, DataTable, CustomColumn } from '../../components';
import { useTranslation } from 'react-i18next';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { PathNames } from '../../core/PathNames'
import { useNavigate } from 'react-router-dom';




// TODO: CREAR EL FORMULARIO CON VALIDACIONES

const UsersPage = () => {
  const { t } = useTranslation('commons');
  const navigate = useNavigate(); // Utilize the useNavigate hook
  const handleEditButtonClick = (rowData: { documentNumber: number }) => {
    console.log('¡Botón de editar clickeado! Implementa tu lógica de formulario aquí.');
    const userId = rowData.documentNumber;
    navigate(`${PathNames.EDIT_USER}/${String(userId)}`); // Convert userId to string
  };

  const handleViewButtonClick = (rowData: { documentNumber: number }) => {
    console.log('¡Botón de ver clickeado! Implementa tu lógica de formulario aquí.');
    const userId = rowData.documentNumber;
    navigate(`${PathNames.VIEW_USER}/${String(userId)}`);
  };
  const columns = [
    CustomColumn({ field: 'names', headerName: t('usersPages.userTable.name'), format: 'text', variante: 'texto'  }),
    CustomColumn({ field: 'rol', headerName: t('usersPages.userTable.rol'),  format: 'text', variante: 'texto'  }),
    CustomColumn({ field: 'actions', headerName: t('usersPages.userTable.actions'), format: 'button', variante: 'texto',  buttonDetails: [
      {
        content: t('generalButtonText.edit'),
        variant: 'contained',
        color: 'info',
        icon: <EditIcon />,
        // onClick: handleEditButtonClick,
      },
      {
        content: t('generalButtonText.view'),
        variant: 'contained',
        color: 'warning',
        icon: <VisibilityIcon />,
        // onClick: handleViewButtonClick,

      }
    ] }),
    CustomColumn({ field: 'state', headerName: t('generalButtonText.state'), format: 'switch', variante: 'texto'})
  ];
  const handleCreateButtonClick = () => {
    navigate(PathNames.VIEW_USER);

  };
  return (
    <ManagmentLayout
      title={<CustomText texto={t('pageTitles.users')} variante="titulo" />}
      actionsContent={
        <CustomButton
          content={t('generalButtonText.create')}
          onClick={handleCreateButtonClick}
          variant="contained"
          color="success"
        />
      }
      inputBar={<SearchBar placeholder={t('generalButtonText.search')} />}
      generalContents={
        <DataTable enableCheckboxSelection={false} dataColumns={columns} dataRows={[]}/>
      }
    />
  );
};

export default UsersPage;