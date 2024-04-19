// TODO: CREAR EL FORMULARIO CON VALIDACIONES

import DataTable from "../../components/orgamisms/DataTable/DataTable";
import { columns1 } from "../../configs/tablas/Columns";
import { esES } from '@mui/material/locale';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme(
  {
    // Aquí puedes añadir personalizaciones adicionales de tu tema si lo necesitas
  },
  esES  // Aplica el locale español a todos los componentes de MUI
);

const CreateRolePage = () => {
  // const { t } = useTranslation('commons');

  return <ThemeProvider theme={theme}>
    <DataTable enableCheckboxSelection={false} dataColumns={columns1} />
  </ThemeProvider>;
};

export default CreateRolePage;
