import { AccountCircle } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import EditIcon from '@mui/icons-material/Edit';
import { useTranslation } from "react-i18next";
import { ManagmentLayout,CustomButton,CustomText} from "../../components";
import { Box,useTheme } from '@mui/material';
import { Theme } from '@mui/material/styles';


const ViewUserPage  = () => {
  const { t } = useTranslation('commons');
  const theme = useTheme<Theme>();
  return (
    <ManagmentLayout
      title={<CustomText texto={t('pageTitles.userView')} variante="titulo" />}
      actionsContent={
        <CustomButton
            content="Editar"
            onClick={() => {
                console.log('click en boton de informacion');
            }}
            variant="contained"
            color="info"
            icon={<EditIcon />}
            buttonSide="end"
            
        />
      }
      generalContents={
        <Box>
            <CustomText 
                    texto="Vladimir Shmondenko" 
                    variante="subtitulo"
                    icon={<AccountCircle style={{ color: 'green', fontSize: '25px' }} />}
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
                <div style={{ marginRight: '90px' }}>
                    <CustomText texto="anatoly@cruzroja.co" variante="subtitulo" />
                </div>
                <div style={{ marginRight: '160px' }}>
                    <CustomText texto="+57 3120000000" variante="subtitulo" />
                </div>
                <div>
                    <CustomText texto="1002963532" variante="subtitulo" />
                </div>
          </Box>
          
          <Box mt={5} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <CustomText texto="Roles" variante="subtitulo" />
                <CustomButton
                    content="ASIGNAR ROL"
                    onClick={() => {
                    console.log('click en boton de exíto');
                    }}
                    variant="contained"
                    color="success"
                />
                
          </Box>
        
           <Box mt={5}style={{ display: 'flex', justifyContent: 'center' }}>
            <CustomText texto="Sin Roles Asignados" variante="subtitulo" />

           </Box>
           
        </Box>
        
      }
      
    />
  );
};

export default ViewUserPage ;