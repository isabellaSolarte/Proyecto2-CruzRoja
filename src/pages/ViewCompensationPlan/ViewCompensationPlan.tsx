import { useNavigate } from 'react-router-dom';
import { PathNames } from '../../core';
import { useEffect } from 'react';
import RecyclingIcon from '@mui/icons-material/Recycling';
import {ManagmentLayout, CustomButton, CustomText, CustomColumn,DataTable,} from '../../components';
import { Box, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { green } from '@mui/material/colors';
import { useViewCompensationPlan } from './hooks/useViewCompensationPlan';
import { getRolId } from '../../services/AxiosRequests/Roles/roleRequest';

const ViewCompensationPage = () => {
    const { t } = useTranslation('commons');
    const { currentPlan,  fetchPlan, handleEdit, currentActionsPlan } = useViewCompensationPlan();
    const navigate = useNavigate();

    useEffect(() => {
      void fetchPlan();
      
    }, []);

    const actionsWithIds = currentPlan.actions.map((action, index) => ({
      id: action.action.id || index ,
      name: action.action.name,
      footPrintUnity: action.action.footPrintUnity,
      quantity: action.quantity,
      unitaryPrice: action.action.unitaryPrice
    }));

    const handleViewButtonClick = (actionId: number) => {
      navigate(PathNames.VIEW_ACTIONS.replace(':id', actionId.toString()));
    };

  const columns = [
    CustomColumn({
      icon: <RecyclingIcon color="success" />,
      width: 200,
      field: 'name',
      headerName: t('generalTableHeaders.actions'),
      format: 'text',
      variante: 'texto',
    }),
    CustomColumn({
      width: 150,
      field: 'footPrintUnity',
      headerName: t('generalTableHeaders.ufp'),
      format: 'text',
      variante: 'texto',
    }),
    CustomColumn({
      width: 150,
      field: 'quantity',
      headerName: t('generalTableHeaders.quantity'),
      format: 'text',
      variante: 'texto',
    }),
    CustomColumn({
      width: 200,
      field: 'unitaryPrice',
      headerName: t('generalTableHeaders.cost'),
      format: 'text',
      variante: 'texto',
    }),
    CustomColumn({
      field: 'options',
      headerName: t('actionsPage.actionsTable.options'),
      width: 300,
      format: 'button',
      variante: 'texto',
      buttonDetails: [
        {
          content: t('generalButtonText.view'),
          variant: 'contained',
          color: 'warning',
          icon: <VisibilityIcon />,
          onClick: (rowData: { id: number }) => handleViewButtonClick(rowData.id),
        },
      ],
    }),
  ];
  return (
    <ManagmentLayout
      title={<CustomText texto={currentPlan.name} variante="titulo" />}
      actionsContent={
        <><CustomButton
          content={t('generalButtonText.edit')}
          variant="contained"
          color="info"
          icon={<EditIcon />}
          onClick={handleEdit}
          style={{ marginLeft: '10px' }} 
          disabled={currentPlan.isCustom === false}/>
          <CustomButton
            content={'Adquirir'}
            variant="contained"
            color="info"
            icon={<AttachMoneyIcon style={{ color: green[500] }} />}
            onClick={handleEdit}
            style={{
              marginLeft: '10px',
              backgroundColor: 'transparent', 
              border: '2px solid green',
              color: 'green', 
              padding: '10px 20px', 
            }} />
        </>
      }
      generalContents={
        <Grid>
           <Box mb={10}>
            <CustomText texto={currentPlan.description} variante="subtitulo" />
            <CustomText texto={`Compensación total: ${currentPlan.ufpCompensation} ufp`} variante="subtitulo" />
            <CustomText texto={`Costo del plan: $ ${currentPlan.price} COP`} variante="subtitulo" />
          </Box>
          <DataTable 
            enableCheckboxSelection={false} 
            dataColumns={columns} 
            dataRows={actionsWithIds} 
            />
        </Grid>
      }
    />
  );

};
export default ViewCompensationPage;