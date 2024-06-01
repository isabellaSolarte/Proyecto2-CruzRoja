import { useNavigate } from 'react-router-dom';
import { PathNames } from '../../core';
import { useEffect } from 'react';
import RecyclingIcon from '@mui/icons-material/Recycling';
import { green } from '@mui/material/colors';
import {ManagmentLayout, CustomButton, CustomText, CustomColumn,DataTable,} from '../../components';
import { Box, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useViewCompensationPlan } from './Hooks/useViewCompensationPlan';

const viewCompensationPage = () => {
    const { t } = useTranslation('commons');
    const { actions, fetchActions } = useViewCompensationPlan();
  const navigate = useNavigate();

  useEffect(() => {
    void fetchActions();
  }, []);

  const handleEditButtonClick = (actionId: number) => {
    navigate(PathNames.EDIT_PLAN.replace(':id', actionId.toString()));
  };

  const handleViewButtonClick = (actionId: number) => {
    navigate(PathNames.VIEW_ACTIONS.replace(':id', actionId.toString()));
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
      field: 'options',
      headerName: t('actionsPage.actionsTable.options'),
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
      title={<CustomText texto={t('pageTitles.actions')} variante="titulo" />}
      actionsContent={
        <CustomButton
          content={t('generalButtonText.createAction')}
          variant="contained"
          color="success"
          //onClick={(rowData: { id: number }) => handleViewButtonClick(rowData.id)}
          style={{ marginLeft: '10px' }}
        />
      }
      generalContents={
        <Grid>
           <Box mb={10}>
            <CustomText texto={t('actionsPage.description')} variante="subtitulo" />
          </Box>
          <DataTable enableCheckboxSelection={false} dataColumns={columns} dataRows={actions} />
        </Grid>
      }
    />
  );

};
export default viewCompensationPage;