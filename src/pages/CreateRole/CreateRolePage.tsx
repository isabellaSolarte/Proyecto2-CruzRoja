// TODO: CREAR EL FORMULARIO CON VALIDACIONES

import DataTable from "../../components/orgamisms/DataTable/DataTable";
import { columns1 } from "../../configs/tablas/Columns";

const CreateRolePage = () => {
  //const { t } = useTranslation('commons');

  return <>
    <DataTable enableCheckboxSelection={false} dataColumns={columns1} />
  </>;
};

export default CreateRolePage;
