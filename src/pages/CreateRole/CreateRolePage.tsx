// TODO: CREAR EL FORMULARIO CON VALIDACIONES

import DataTable from "../../components/orgamisms/DataTable/DataTable";
import { columns1, rows1 } from "../../configs/tablas/Columns";
import { esES } from '@mui/material/locale';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react';
import CustomDialog from "../../components/orgamisms/CustomDialog/CustomDialog";
import AccountCircle from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';


const theme = createTheme(
  {
    // Aquí puedes añadir personalizaciones adicionales de tu tema si lo necesitas
  },
  esES  // Aplica el locale español a todos los componentes de MUI
);

const CreateRolePage = () => {
  // const { t } = useTranslation('commons');
  const [lastAction, setLastAction] = useState<{
    action: string | null;
    rowId: number | null;
  }>({
    action: null,
    rowId: null,
  });

  // Function to handle different actions
  const handleActionClick = (actionContent: string, rowId: number) => {
    console.log(`Action "${actionContent}" clicked for row ID ${rowId}`);
    
    // Update state with the action details
    setLastAction({ action: actionContent, rowId });

    // Perform different actions based on actionContent
    switch (actionContent) {
      case 'Edit':
        editRow(rowId);
        break;
      case 'DetailSeeker':
        viewRowDetails(rowId);
        break;
        case 'Activation':
          UserActivationHandler(rowId);
          break;
      default:
        console.log('Unknown action:', actionContent);
    }
  };

  // Function to "edit" a row based on row ID
  const editRow = (rowId: number) => {
    console.log(`Initiating edit for row ID ${rowId}`);
    // Your edit logic here...
  };

  // Function to "view" row details based on row ID
  const viewRowDetails = (rowId: number) => {
    console.log(`Viewing details for row ID ${rowId}`);
    // Your view logic here...
  };

  const UserActivationHandler = (rowId: number) => {
    console.log(`Viewing details for row ID ${rowId}`);
    // Your view logic here...
  };

  return <ThemeProvider theme={theme}>
    <DataTable enableCheckboxSelection={false} dataColumns={columns1(handleActionClick)} dataRows = {rows1} />
    <CustomDialog isOpen={true} title='Alert Dialog' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum placerat faucibus. Nullam quis vulputate purus. Aenean sed purus orci.' buttons={[
      {
      content: 'Cancel',
      variant: 'contained',
      color: 'inherit',
      onClick: (rowId: number) => onButtonClick('Editar', rowId)
    },
    {
      content: 'Continue',
      variant: 'contained',
      color: 'success',
      onClick: (rowId: number) => onButtonClick('Editar', rowId)
    }
    ]} icon={<InfoIcon/>} color='#65B741'/>
  </ThemeProvider>;
};

export default CreateRolePage;
