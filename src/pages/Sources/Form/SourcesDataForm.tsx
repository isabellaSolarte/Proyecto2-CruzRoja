import { Box } from "@mui/material";
import { CustomButton, CustomCard } from "../../../components";
import {useFuentesForm} from '../hooks';
import { FuentesCard } from "../Components";

/*Ejemplo para usar
    <CustomCard 
      texto1="Crear empresa"
      icon={<SearchIcon />}
      sx={{ backgroundColor: theme.backgroundContentColors?.green}}
      switchState={switchState}
      handleSwitchState={handleSwitchState}
      sx={{ marginBottom: '1rem', backgroundColor: '#D9D9D9' }}
    />*/
const SourcesDataForm = () => {
    const {
        handleSubmit,
        onSubmit,
        register,
    } = useFuentesForm();
    return (
        <Box>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <Box mt={4}>
                    <FuentesCard/>
                    <CustomCard
                        texto1="Fuentes de emisión"
                        texto2="Motos, autos, camiones, etc."
                        switchState={true}
                        handleSwitchState={() => {}}
                        sx={{ marginBottom: '1rem', backgroundColor: '#D9D9D9' }}
                        props={register('source')}
                    />
                </Box>
                <Box mt={4} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <CustomButton
                        content="Atras"
                        onClick={() => {}}
                    />
                    <CustomButton
                        content="Siguiente"
                        type='submit'
                        variant="contained"
                        color="success"
                    />
                </Box>
            </form>
        </Box>
    );
};

export default SourcesDataForm;