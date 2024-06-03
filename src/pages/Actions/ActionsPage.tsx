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
      field: 'unitaryPrice',
      headerName: t('actionsPage.actionsTable.unitaryPrice'),
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
                title={<CustomText texto={action?.name ?? ''} variante="titulo" />}
                description={<CustomText texto={action?.description ?? ''} variante="subtitulo" />}
                generalContents={
                <Box> </Box>
                }
                onClose={() => setShowModal(false)}
              />
            )}
        </Grid>
        
      }
    />
  );
};

export default ActionsPage;
