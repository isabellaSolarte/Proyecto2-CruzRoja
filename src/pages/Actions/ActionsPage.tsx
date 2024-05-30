import {ManagmentLayout,CustomButton,CustomText, CustomColumn, DataTable} from '../../components';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';

const ActionsPage = () => {
  const { t } = useTranslation('commons');
  const columns = [
    CustomColumn({
      field: 'typeRole',
      headerName: t('usersPages.userTable.roles'),
      format: 'text',
      variante: 'texto',
    }),
    CustomColumn({
      field: 'actions',
      headerName: t('usersPages.userTable.actions'),
      format: 'button',
      variante: 'texto',
      buttonDetails: [
        {
          content: t('generalButtonText.edit'),
          variant: 'contained',
          color: 'info',
          icon: <EditIcon />,
          //onClick: handleEditButtonClick,
        },
        {
          content: t('generalButtonText.view'),
          variant: 'contained',
          color: 'warning',
          icon: <VisibilityIcon />,
          //onClick: handleViewButtonClick,
        },
      ],
    }),
  ];
  return (
    <ManagmentLayout
      title={<CustomText texto={t('pageTitles.actions')} variante="titulo" />}
      actionsContent={
        <CustomButton
        content={t('  generalButtonText.createAction')}
        variant="contained"
        color="success"
        //onClick={handleCreateButtonClick}
        style={{ marginLeft: '10px' }}
      />
      }
      generalContents={
        <Grid>
        
        </Grid>
      }
    />
  );
};

export default ActionsPage;
