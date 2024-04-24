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
import VolunteerInfoType from './types/VolunteerInfoType';
import { putVolunteer } from '../../services';






// TODO: CREAR EL FORMULARIO CON VALIDACIONES

const UsersPage = () => {
  const { t } = useTranslation('commons');
  type Color = 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [iconDialog, setIconDialog] = useState(<CheckCircleIcon/>);
  const [colorDialog, setColorDialog] = useState('green');
  const [colorButton, setColorButton] = useState<Color>('success');

  const initialRowData: VolunteerInfoType = {
    id: 0, // Por ejemplo, podrías asignar un valor inicial a las propiedades numéricas
    names: '',
    roles: '', // Puedes asignar una cadena vacía como valor inicial a las propiedades de cadena
    switchState: false, // Puedes asignar un valor booleano adecuado como valor inicial
    // Agrega más propiedades si es necesario y proporciona valores iniciales para ellas
  };
  
  const [rowData1, setRowData1] = useState(initialRowData);



  const openDialog = (rowData: VolunteerInfoType) => {
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
    console.log('prueba de datos', rowData1);
    console.log('datos row', rowData1);
    const { id } = rowData1;
  
    // Find the volunteer in volunteerInfo based on the id
    const selectedVolunteer = volunteers.find((volunteer) => volunteer.id === id);
    if (selectedVolunteer) {
      console.log('Selected Volunteer:', selectedVolunteer);
  
      // Preparar los datos actualizados para enviar a la API
      const updatedVolunteerData = {
        ...selectedVolunteer,
        state: !selectedVolunteer.state,
      };
  
      // Realizar la solicitud PUT para actualizar el estado del voluntario
      putVolunteer(updatedVolunteerData)
        .then((response) => {
          console.log('Response PUT:', response);
          // Actualizar el estado local de los voluntarios después de una respuesta exitosa
          const updatedVolunteers = volunteers.map((volunteer) =>
            volunteer.id === id ? { ...volunteer, state: !volunteer.state } : volunteer
          );
          console.log('Updated Volunteers:', updatedVolunteers);
          updateVolunteerInfo(updatedVolunteers); // Actualizar la información de los voluntarios en la interfaz de usuario
        })
        .catch((error: unknown) => {
          console.error('Error al actualizar el estado del voluntario:', error);
          // Manejar errores aquí (por ejemplo, mostrar un mensaje de error al usuario)
        })
        .finally(() => {
          closeDialog(); // Cerrar el diálogo después de completar la acción, tanto si tiene éxito como si falla
        });
    } else {
      closeDialog(); // Cerrar el diálogo si no se encuentra el voluntario seleccionado
    }
  };
  
  const navigate = useNavigate(); // Utilize the useNavigate hook
  const { volunteers, loading, volunteerInfo, updateVolunteerInfo } = useVolunteers();
 
  const handleEditButtonClick = (rowData: VolunteerInfoType) => {
    const {id} = rowData;
    console.log('datos row', rowData);
    //mostrar lo traido
    console.log("EDIT*******id***********",id);
    console.log("ruta: ",PathNames.VIEW_USER.replace(':id', String(id)));
    navigate(PathNames.EDIT_USER.replace(':id', String(id)));
  };

  const handleViewButtonClick = (rowData: VolunteerInfoType) => {
    const {id} = rowData;
    console.log("View*******id***********",id);
    console.log("ruta: ",PathNames.VIEW_USER.replace(':id', String(id)));
    navigate(PathNames.VIEW_USER.replace(':id', String(id)));
  };
  const columns = [
    CustomColumn({ field: 'names', headerName: t('usersPages.userTable.name'), format: 'text', variante: 'texto', icon: <AccountCircleIcon /> }),
    CustomColumn({ field: 'roles', headerName: t('usersPages.userTable.roles'),  format: 'text', variante: 'texto'  }),
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
      // inputBar={<SearchBar placeholder={t('generalButtonText.search')} />}
      generalContents={
        <>
        <DataTable enableCheckboxSelection={false} dataColumns={columns} dataRows={volunteerInfo} loading={loading} />
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