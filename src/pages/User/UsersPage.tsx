import { CustomText, CustomButton, ManagmentLayout, SearchBar, DataTable, CustomColumn } from '../../components';
import { useTranslation } from 'react-i18next';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { PathNames } from '../../core/PathNames'
import { useNavigate } from 'react-router-dom';
import useVolunteers from './Hooks/useVolunteers';




// TODO: CREAR EL FORMULARIO CON VALIDACIONES

const UsersPage = () => {
  const { t } = useTranslation('commons');
  const navigate = useNavigate(); // Utilize the useNavigate hook
  const { volunteers, loading } = useVolunteers();
  const rows = [
    { "id": 1, "documentNumber": 1, "names": "Tony Stark", "rol": "Admin", "switchState": true },
    { "id": 2, "documentNumber": 2, "names": "Tyrion Lannister", "rol": "User", "switchState": false },
    { "id": 3, "documentNumber": 3, "names": "Daenerys Targaryen", "rol": "User", "switchState": true },
    { "id": 4, "documentNumber": 4, "names": "Robert Baratheon", "rol": "User", "switchState": false },
    { "id": 5, "documentNumber": 5, "names": "Theon Greyjoy", "rol": "User", "switchState": false },
    { "id": 6, "documentNumber": 6, "names": "Margaery Tyrell", "rol": "User", "switchState": true },
    { "id": 7, "documentNumber": 7, "names": "Oberyn Martell", "rol": "User", "switchState": false },
    { "id": 8, "documentNumber": 8, "names": "Jon Arryn", "rol": "User", "switchState": false },
    { "id": 9, "documentNumber": 9, "names": "Catelyn Stark", "rol": "User", "switchState": true },
    { "id": 10, "documentNumber": 10, "names": "Walder Frey", "rol": "User", "switchState": true },
    { "id": 11, "documentNumber": 11, "names": "Ramsay Bolton", "rol": "User", "switchState": false },
    { "id": 12, "documentNumber": 12, "names": "Eddard Stark", "rol": "User", "switchState": false },
    { "id": 13, "documentNumber": 13, "names": "Jaime Lannister", "rol": "User", "switchState": true },
    { "id": 14, "documentNumber": 14, "names": "Yara Greyjoy", "rol": "User", "switchState": true },
    { "id": 15, "documentNumber": 15, "names": "Olenna Tyrell", "rol": "User", "switchState": false },
    { "id": 16, "documentNumber": 16, "names": "Doran Martell", "rol": "User", "switchState": true },
    { "id": 17, "documentNumber": 17, "names": "Robin Arryn", "rol": "User", "switchState": true },
    { "id": 18, "documentNumber": 18, "names": "Edmure Tully", "rol": "User", "switchState": true },
  ];
  const handleEditButtonClick = (rowData: any) => {
    const {documentNumber} = rowData;
    //mostrar lo traido
    console.log("EDIT*******documentNumber***********",documentNumber);
    navigate(`${PathNames.EDIT_USER}/${String(documentNumber)}`); // Convert userId to string
  };

  const handleViewButtonClick = (rowData: any) => {
    const {documentNumber} = rowData;
    console.log("View*******documentNumber***********",documentNumber);
    navigate(`${PathNames.VIEW_USER}/${String(documentNumber)}`);
  };
  const columns = [
    CustomColumn({ field: 'names', headerName: t('usersPages.userTable.name'), format: 'text', variante: 'texto', icon: <AccountCircleIcon /> }),
    CustomColumn({ field: 'rol', headerName: t('usersPages.userTable.rol'),  format: 'text', variante: 'texto'  }),
    CustomColumn({ field: 'actions', headerName: t('usersPages.userTable.actions'), format: 'button', variante: 'texto',  buttonDetails: [
      {
        content: t('generalButtonText.edit'),
        variant: 'contained',
        color: 'info',
        icon: <EditIcon />,
        onClick: handleEditButtonClick,
      },
      {
        content: t('generalButtonText.view'),
        variant: 'contained',
        color: 'warning',
        icon: <VisibilityIcon />,
        onClick: handleViewButtonClick,

      }
    ] }),
    CustomColumn({ field: 'state', headerName: t('generalButtonText.state'), format: 'switch', variante: 'texto'})
  ];
  const handleCreateButtonClick = () => {
    navigate(PathNames.REGISTER_USER);

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
        <DataTable enableCheckboxSelection={false} dataColumns={columns} dataRows={rows} loading={loading} />
      }
    />
  );
};

export default UsersPage;