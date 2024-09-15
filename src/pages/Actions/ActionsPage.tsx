import {
  ManagmentLayout,
  CustomButton,
  CustomText,
  CustomColumn,
  DataTable,
} from '../../components';
import { Box, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useActionsPage } from '../../pages/Actions/hooks/useActions';
import { useNavigate } from 'react-router-dom';
import { PathNames } from '../../core';
import { useEffect, useState } from 'react';
import RecyclingIcon from '@mui/icons-material/Recycling';
import { green } from '@mui/material/colors';
import { CustomModal } from '../../components/orgamisms/CustomModal';
import { set } from 'react-hook-form';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';

const ActionsPage = () => {
  const { t } = useTranslation('commons');
  const [showModal, setShowModal] = useState(false);
  const { actions, fetchActions,fetchActionById,action,setId} = useActionsPage();
  const navigate = useNavigate();

  useEffect(() => {
    void fetchActions();
  }, []);
 

  const handleEditButtonClick = (actionId: number) => {
    
    navigate(PathNames.EDIT_ACTIONS.replace(':id', actionId.toString()));
  };

  const handleViewButtonClick = (actionId: number) => {
    setId(actionId)
    fetchActionById(actionId)
    console.log(action?.name)
    //llamo a una funcion que busque la accion por id y me devuelva la accion
    //a partir de la accion llamo al modal que muestra la informacion de la accion
    //navigate(PathNames.VIEW_ACTIONS.replace(':id', actionId.toString()));
    setShowModal(true)
  };

  const handleCreateButtonClick = () => {
    navigate(PathNames.CREATE_ACTIONS);
  };

  const columns = [
    CustomColumn({
      field: 'name',
      headerName: t('actionsPage.actionsTable.name'),
      format: 'text',
      variante: 'texto',
      icon: <RecyclingIcon style={{ color: green[500] }} />,
    }),
    CustomColumn({
      field: 'footPrintUnity',
      headerName: t('actionsPage.actionsTable.footPrintUnity'),
      format: 'text',
      variante: 'texto',
    }),
    CustomColumn({
      width: 300,
      field: 'options',
      headerName: t('actionsPage.actionsTable.options'),
      format: 'button',
      variante: 'texto',
      buttonDetails: [
        {
          content: t('generalButtonText.edit'),
          variant: 'contained',
          color: 'info',
          icon: <EditIcon />,
          onClick: (rowData: { id: number}) => handleEditButtonClick(rowData.id),
        },
        {
          content: t('generalButtonText.view'),
          variant: 'contained',
          color: 'warning',
          icon: <VisibilityIcon />,
          onClick: (rowData: { id: number}) => handleViewButtonClick(rowData.id),
        },
      ],
    }),
  ];

  return (
    <ManagmentLayout
      title={<CustomText texto={t('pageTitles.actions')} variante="titulo" />}
      actionsContent={
        <CustomButton
          content={t('generalButtonText.createAction')}
          variant="contained"
          color="success"
          onClick={handleCreateButtonClick}
          style={{ marginLeft: '10px' }}
        />
      }
      description={<CustomText texto={t('actionsPage.description')} variante="texto" />}
      generalContents={
        <Grid>
          <DataTable enableCheckboxSelection={false} dataColumns={columns} dataRows={actions} />
            {showModal && (
              <CustomModal
                open={showModal}
                title={
                        <CustomText texto={action?.name ?? ''} variante="subtitulo" icon={ <RecyclingIcon style={{ color: green[500] }} />}/>
                      }
                description={
                  <Box  sx={{borderBottom: '1px solid #C8C8C8'}}> 
                    <CustomText texto={action?.description ?? ''} variante="texto"  />
                  </Box>
                  }
                generalContents={
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex' }} >
                      <CustomText  texto={'Total UFP:'} variante="texto" styles={{ fontWeight: 'bold' }} icon={<EnergySavingsLeafIcon color="success" />}/>
                      <CustomText texto={'' + (action?.footPrintUnity ?? '')} variante="texto" />
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                      <CustomText texto={'Costo $: '} variante="texto" styles={{ fontWeight: 'bold', marginRight: '0.5rem' }} icon={<EnergySavingsLeafIcon color="success" />}/>
                      <CustomText texto={' ' + (action?.unitaryPrice ?? '') + ' COP'} variante="texto" />
                    </Box>
                  </Box>
                }
                actionsContent={
                  <CustomButton
                    content={t('generalButtonText.edit')}
                    variant='contained'
                    color='info'
                    icon= {<EditIcon />}
                    onClick={() => handleEditButtonClick(action?.id ?? 0)}
                  />}
                onClose={() => setShowModal(false)}
              />
            )}
        </Grid>
        
      }
    />
  );
};

export default ActionsPage;
