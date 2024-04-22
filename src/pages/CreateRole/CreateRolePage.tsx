// TODO: CREAR EL FORMULARIO CON VALIDACIONES


import { columns1, rows1 } from "../../configs/tablas/Columns";

import  { useState } from 'react';
import CustomDialog from "../../components/orgamisms/CustomDialog/CustomDialog";
/* import AccountCircle from '@mui/icons-material/AccountCircle'; */
import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import {ManagmentLayout, DataTable, CustomText } from '../../components';




const CreateRolePage = () => {
  // const { t } = useTranslation('commons');
  type Color = 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [iconDialog, setIconDialog] = useState(<CheckCircleIcon/>);
  const [colorDialog, setColorDialog] = useState('green');
  const [colorButton, setColorButton] = useState<Color>('success');


  interface RowData {
    id: number;
    companyName: string;
    names: string;
    switchState: boolean;
    // Agrega más propiedades si es necesario
  }

  const openDialog = (rowData: RowData) => {
    console.log('datos row', rowData);
    
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
  
  const handleContinueButtonClick = (rowData: RowData) => {
    console.log("Continue button clicked");
    const {id} = rowData;
    console.log("Editar clickeado", id);
    closeDialog();
  };

  const handleEditar = (rowData: RowData) => {
    // Lógica para manejar la acción de editar
    const {id} = rowData;
    console.log("Editar clickeado", id);
  };

  const handleDetails = () => {
    // Lógica para manejar la acción de observar
    setIsDialogOpen(true);

    console.log("Observar clickeado");
  };
  const handleSwitchState = (rowData: RowData) => {
    // TODO hacer la peticion actulizar estado
    const {switchState} = rowData;
    console.log("Switch clickeado", switchState);
    /* console.log("Switch clickeado", rowData);
    rowData.switchState = !switchState;
    console.log("Switch clickeado", rowData); */
  };

  return <ManagmentLayout 
  title={<CustomText texto='ss' variante="titulo" />}
  generalContents={
    <>
      <DataTable enableCheckboxSelection={false} dataColumns={columns1(handleEditar, handleDetails, openDialog)} dataRows = {rows1} />
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
  }/>
    

};

export default CreateRolePage;
