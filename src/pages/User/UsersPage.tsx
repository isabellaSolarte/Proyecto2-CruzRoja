import { CustomText, CustomButton, ManagmentLayout, SearchBar, DataTable, CustomColumn, TabsAtomComponent } from '../../components';
import { useTranslation } from 'react-i18next';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { PathNames } from '../../core/PathNames'
import { useNavigate } from 'react-router-dom';
import useVolunteers from './Hooks/useVolunteers';
import useCompanyUser from './Hooks/useCompanyUser';
import  { useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import CustomDialog from '../../components/orgamisms/CustomDialog/CustomDialog';
import { putVolunteer, putUserCompany } from '../../services';
import { GridRenderCellParams } from '@mui/x-data-grid';






// TODO: CREAR EL FORMULARIO CON VALIDACIONES

const UsersPage = () => {
  const { t } = useTranslation('commons');
  const navigate = useNavigate(); // Utilize the useNavigate hook
  const { volunteers, setVolunteers, loading, volunteerInfo, updateVolunteerInfo } = useVolunteers();
  const { companyUsers, setCompanyUsers,  loadingcompanyUsers, companyUserInfo, updateCompanyUserInfo } = useCompanyUser();


  type Color = 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [iconDialog, setIconDialog] = useState(<CheckCircleIcon/>);
  const [colorDialog, setColorDialog] = useState('green');
  const [colorButton, setColorButton] = useState<Color>('success');

  
  const [rowData1, setRowData1] = useState({} as GridRenderCellParams['row']);



  const openDialog = (rowData: GridRenderCellParams['row']) => {
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
    const { id, companyName } = rowData1;
    // Quiero identificar si es un usuario de la empresa o un voluntario
    if (companyName) {
      console.log('User is a company user');
      // Find the company user in companyUsers based on the id
      const selectedCompanyUser = companyUsers.find((companyUser) => companyUser.id === id);
      if (selectedCompanyUser) {
        console.log('Selected Company User:', selectedCompanyUser);
    
        // Preparar los datos actualizados para enviar a la API
        const updatedCompanyUserData = {
          ...selectedCompanyUser,
          state: !selectedCompanyUser.state,
        };
        console.log('Updated Company User Data:', updatedCompanyUserData);
        // Realizar la solicitud PUT para actualizar el estado del usuario de la empresa
        putUserCompany(updatedCompanyUserData)
          .then((response) => {
            console.log('Response PUT:', response);
            // Actualizar el estado local de los usuarios de la empresa después de una respuesta exitosa
            const updatedCompanyUsers = companyUsers.map((companyUser) =>
              companyUser.id === id ? { ...companyUser, state: !companyUser.state } : companyUser
            );
            setCompanyUsers(updatedCompanyUsers);
            console.log('Updated Company Users:', updatedCompanyUsers);
            updateCompanyUserInfo(updatedCompanyUsers); // Actualizar la información de los usuarios de la empresa en la interfaz de usuario
          })
          .catch((error: unknown) => {
            console.error('Error al actualizar el estado del usuario de la empresa:', error);
            // Manejar errores aquí (por ejemplo, mostrar un mensaje de error al usuario)
          })
          .finally(() => {
            closeDialog(); // Cerrar el diálogo después de completar la acción, tanto si tiene éxito como si falla
          });
  
      } else {
        closeDialog(); // Cerrar el diálogo si no se encuentra el usuario de la empresa seleccionado
      }
    } else { 
      console.log('User is a volunteer');
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
            setVolunteers(updatedVolunteers);
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
    }

  };
  
 
 
  const handleEditButtonClick = (rowData: GridRenderCellParams['row']) => {
    const {id} = rowData;
    console.log('datos row', rowData);
    //mostrar lo traido
    console.log("EDIT*******id***********",id);
    console.log("ruta: ",PathNames.VIEW_USER.replace(':id', String(id)));
    navigate(PathNames.EDIT_USER.replace(':id', String(id)));
  };

  const handleViewButtonClick = (rowData: GridRenderCellParams['row']) => {
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
  const columnsCompanyUsers = [
    CustomColumn({ field: 'names', headerName: t('usersPages.userTable.name'), format: 'text', variante: 'texto', icon: <AccountCircleIcon /> }),
    CustomColumn({ field: 'companyName', headerName: t('usersPages.userTable.companyName'),  format: 'text', variante: 'texto'  }),
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
        {/* <TabsAtomComponent tabContentItem={[t("usersPages.tabs.volunteer"), t("usersPages.tabs.CompanyUser")]} /> */}
        <DataTable enableCheckboxSelection={false} dataColumns={columns} dataRows={volunteerInfo} loading={loading} />
        <DataTable enableCheckboxSelection={false} dataColumns={columnsCompanyUsers} dataRows={companyUserInfo} loading={loadingcompanyUsers} />
        
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