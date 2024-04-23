import { CustomText, CustomButton, ManagmentLayout, SearchBar, DataTable, CustomColumn } from '../../components';
import { useTranslation } from 'react-i18next';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { PathNames } from '../../core/PathNames'
import { useNavigate } from 'react-router-dom';
import useVolunteers from './Hooks/useVolunteers';
import  { useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import CustomDialog from '../../components/orgamisms/CustomDialog/CustomDialog';





// TODO: CREAR EL FORMULARIO CON VALIDACIONES

const UsersPage = () => {
  const { t } = useTranslation('commons');
  type Color = 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [iconDialog, setIconDialog] = useState(<CheckCircleIcon/>);
  const [colorDialog, setColorDialog] = useState('green');
  const [colorButton, setColorButton] = useState<Color>('success');

  interface RowData {
    id: number;
    names: string;
    rol: string;
    switchState: boolean;
    // Agrega más propiedades si es necesario
  }
  const initialRowData: RowData = {
    id: 0, // Por ejemplo, podrías asignar un valor inicial a las propiedades numéricas
    names: '',
    rol: '', // Puedes asignar una cadena vacía como valor inicial a las propiedades de cadena
    switchState: false, // Puedes asignar un valor booleano adecuado como valor inicial
    // Agrega más propiedades si es necesario y proporciona valores iniciales para ellas
  };
  
  const [rowData1, setRowData1] = useState(initialRowData);



  const openDialog = (rowData: RowData) => {
    console.log('datos row', rowData);
    setRowData1(rowData)
    
    const {switchState} = rowData;
    if(switchState){
      setIconDialog(<WarningIcon/>)
      setColorDialog('red')
      setColorButton('error')
      
    }else{
      setIconDialog(<CheckCircleIcon/>)
      setColorDialog('green')
      setColorButton('success')

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
    console.log("Continue button clicked");
    console.log('pruba de datos',rowData1)
    closeDialog();
  };
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
    const {id} = rowData;
    console.log('datos row', rowData);
    //mostrar lo traido
    console.log("EDIT*******id***********",id);
    console.log("ruta: ",PathNames.VIEW_USER.replace(':id', String(id)));
    navigate(PathNames.EDIT_USER.replace(':id', String(id)));
  };

  const handleViewButtonClick = (rowData: any) => {
    const {id} = rowData;
    console.log("View*******id***********",id);
    console.log("ruta: ",PathNames.VIEW_USER.replace(':id', String(id)));
    navigate(PathNames.VIEW_USER.replace(':id', String(id)));
  };
  const columns = [
    CustomColumn({ field: 'names', headerName: t('usersPages.userTable.name'), format: 'text', variante: 'texto', icon: <AccountCircleIcon /> }),
    CustomColumn({ field: 'roles.typeRole', headerName: t('usersPages.userTable.rol'),  format: 'text', variante: 'texto'  }),
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
    CustomColumn({ field: 'state', headerName: t('generalButtonText.state'), format: 'switch', variante: 'texto', onClick: openDialog})
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
        <>
        <DataTable enableCheckboxSelection={false} dataColumns={columns} dataRows={volunteers} loading={loading} />
        <CustomDialog isOpen={isDialogOpen} onClick= {handleCancelButtonClick} title='Alert Dialog' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum placerat faucibus. Nullam quis vulputate purus. Aenean sed purus orci.' buttons={[
          {
            key:'1',
            content: 'Cancel',
            variant: 'contained',
            color: 'inherit',
            onClick: handleCancelButtonClick
        },
        {
          key:'2',
          content: 'Continue',
          variant: 'contained',
          color: colorButton,
          onClick: handleContinueButtonClick
        }
        ]} icon={iconDialog} color={colorDialog} />
        </>
      }
    />
  );
};

export default UsersPage;