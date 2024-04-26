import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import EditIcon from '@mui/icons-material/Edit';
import { useTranslation } from "react-i18next";
import { ManagmentLayout,CustomButton,CustomText, CustomInput, CustomColumn, DataTable} from "../../components";
import { Box,Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteIcon from '@mui/icons-material/Delete';
import { useUserPage } from './Hooks/useUserPage';

interface ViewUserProps{
    id:string

}
const ViewUserPage  = ({id}:ViewUserProps) => {
  const { t } = useTranslation('commons');
  const [disableInput, setDisableInput] = useState(true);
  const handleInput = () => {
    setDisableInput(!disableInput);
  };
  
  useEffect(() =>{
    loadIdVolunteerData();
  },[id] );

  const {volunteerData, volunteerInfo, loadIdVolunteerData} = useUserPage(id);

  const columns = [
    CustomColumn({ field: 'names', headerName: t('usersPages.userTable.name'), format: 'text', variante: 'texto', icon: <AccountCircleIcon /> }),
    CustomColumn({ field: 'actions', headerName: t('usersPages.userTable.actions'), format: 'button', variante: 'texto',  buttonDetails: [
        {
          content: t('generalButtonText.Eliminar'),
          variant: 'contained',
          color: 'error',
          icon: <DeleteIcon />
        },
        
      ]
    }),
]
 
  return (
    <ManagmentLayout
      title={<CustomText texto={t('pageTitles.userView')} variante="titulo" />}
      actionsContent={
        <CustomButton content="EDITAR" onClick={handleInput} variant="contained" color="info" icon={<EditIcon />} />
        
      }
      generalContents={
        <Box>
                {!disableInput && (
                    <Box  sx={{  display: 'flex', justifyContent: 'flex-end', alignItems: 'center',marginRight: '54px'  }}>
                        <CustomButton content="CANCELAR" onClick={handleInput} variant="contained" color="warning"  style={{ marginRight: '40px' }} icon={<CancelIcon />} />
                        <CustomButton content="ACTUALIZAR" onClick={() => {
                            console.log('click en boton de exíto');
                            }} variant="contained" color="success" icon={<SaveAsIcon />} />
                    </Box>
                )}
                
                <CustomText 
                    texto={"Vladimir"} 
                    variante="subtitulo"
                    icon={<AccountCircleIcon style={{ color: 'green', fontSize: '25px' }} />}
                />
                <CustomText texto="Sin roles asignados" variante="pequeño"  />
                <CustomText texto="@anatoly" variante="pequeño"  />
                <Box mt={5} style={{ display: 'flex', flexDirection: 'row' }}>
            
                    <div style={{ marginRight: '200px' }}>
                        <CustomText
                            texto="Email" 
                            variante="subtitulo"
                            icon={<EmailIcon />}
                        />
                    </div>
                    <div style={{ marginRight: '200px' }}>
                        <CustomText
                            texto="Teléfono" 
                            variante="subtitulo"
                            icon={<ContactPhoneIcon />}
                        />
                    </div>
                    <div>
                        <CustomText
                            texto="Número de identificación" 
                            variante="subtitulo"
                            icon={<PermContactCalendarIcon />}
                        />
                    </div>
            </Box>

            <Box mt={1} style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ marginRight: '60px' }}>
                <CustomInput
                    placeholder="Correo electrónico"
                    size="small"
                    updateText={() => {}}
                    value="anatoly@cruzroja.co"
                    props={{ disabled: disableInput }}
                    />
                </div>
                <div style={{ marginRight: '98px' }}>
                    <CustomInput
                    placeholder="Teléfono"
                    size="small"
                    updateText={() => {}}
                    value="+57 3120000000"
                    props={{ disabled: disableInput }}
                    />
                </div>
                <div style={{ marginRight: '160px' }}>
                    <CustomInput
                    placeholder="Cédula"
                    size="small"
                    updateText={() => {}}
                    value="1002963532"
                    props={{ disabled: disableInput }}
                    />
                </div>
                    
            </Box>
            {!disableInput && (
                <Box mt={5} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' ,  marginRight: '52px' }}>
                        <CustomText texto="Roles" variante="subtitulo" />
                        <CustomButton
                            content="ASIGNAR ROL"
                            onClick={() => {
                            console.log('click en boton de exíto');
                            }}
                            variant="contained"
                            color="info"
                        />

                </Box>
            )}
            <Box>
                <DataTable enableCheckboxSelection={false} dataColumns={columns} dataRows={[]} />
            </Box>
           
        </Box>
        
      }
      
    />
  );
};

export default ViewUserPage ;

