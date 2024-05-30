import {ManagmentLayout, CustomButton, CustomText, CustomColumn,DataTable,} from '../../components';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useActionsPage } from '../../pages/Actions/hooks/useActions';
import { useNavigate } from 'react-router-dom';
import { PathNames } from '../../core';
import { useEffect } from 'react';
import RecyclingIcon from '@mui/icons-material/Recycling';

const ActionsPage = () => {
  const { t } = useTranslation('commons');
  const { actions, fetchActions } = useActionsPage();
  const navigate = useNavigate();

  useEffect(() => {
    void fetchActions();
  }, []);

  const handleEditButtonClick = (actionId: number) => {
    navigate(PathNames.EDIT_ACTIONS.replace(':id', actionId.toString()));
  };

  const handleViewButtonClick = (actionId: number) => {
    navigate(PathNames.VIEW_ACTIONS.replace(':id', actionId.toString()));
  };

  const handleCreateButtonClick = () => {
    navigate(PathNames.VIEW_ACTIONS);
  };

  const columns = [
    CustomColumn({
      field: 'typeAction',
      headerName: t('actionsPage.actionsTable.name'),
      format: 'text',
      variante: 'texto',
      icon: <RecyclingIcon />
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
          content: t('generalButtonText.edit'),
          variant: 'contained',
          color: 'info',
          icon: <EditIcon />,
          onClick: (rowData: { id: number }) => handleEditButtonClick(rowData.id),
        },
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
          onClick={handleCreateButtonClick}
          style={{ marginLeft: '10px' }}
        />
      }
      generalContents={
        <Grid>
          <DataTable enableCheckboxSelection={false} dataColumns={columns} dataRows={actions} />
        </Grid>
      }
    />
  );
};

export default ActionsPage;
