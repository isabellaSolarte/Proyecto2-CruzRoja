import { useEffect } from 'react';
import { CustomText, DataTable, ManagmentLayout } from '../../components';
import { useBusinessHooks } from './hooks';
import CustomColumn from '../../components/Molecules/CustomColumn/CustomColumn';
import { Alert, Box, CircularProgress } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { useTranslation } from 'react-i18next';
import { PathNames } from '../../core';
import { useNavigate, useNavigation } from 'react-router-dom';

const columns = (handleViewButtonClick: any, t: any) => [
  CustomColumn({
    field: 'companyName',
    headerName: 'Empresa',
    format: 'text',
    width: 200,
  }),
  CustomColumn({
    field: 'companyEmail',
    headerName: 'Email',
    format: 'text',
    width: 250,
  }),
  CustomColumn({
    field: 'companyPhone',
    headerName: 'Teléfono',
    format: 'text',
    width: 200,
  }),
  CustomColumn({
    width: 250,
    field: 'actions',
    headerName: 'Opciones',
    format: 'button',
    variante: 'texto',
    buttonDetails: [
      {
        content: 'Observar',
        variant: 'contained',
        color: 'warning',
        icon: <VisibilityIcon />,
        onClick: handleViewButtonClick,
      },
    ],
  }),
];

const BusinessPage = () => {
  const { business, loading, errors, loadAllCompanies } = useBusinessHooks();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleViewButtonClick = (rowData: GridRenderCellParams['row']) => {
    const { id } = rowData;
    console.log('id', id);
    navigate(PathNames.VIEW_BUSINESS.replace(':id', String(id)), { replace: true });
  };

  useEffect(() => {
    loadAllCompanies();
  }, []);

  return (
    <ManagmentLayout
      title={<CustomText texto={'Empresas'} variante={'titulo'} />}
      description={
        <CustomText
          texto={
            'Explora empresas comprometidas con la sostenibilidad en nuestra lista. Encuentra negocios registrados en la aplicación de la Cruz Roja que están reduciendo su huella de carbono para un futuro más verde.'
          }
          variante={'texto'}
        />
      }
      generalContents={
        <>
          {loading && (
            <Box display="flex" justifyContent="center" alignItems="center" height="fullWidth">
              <CircularProgress color="success" />
            </Box>
          )}
          {errors && <Alert severity="error">{errors}</Alert>}
          {!loading && !errors && (
            <DataTable
              key={0}
              enableCheckboxSelection={false}
              dataColumns={columns(handleViewButtonClick, t)}
              dataRows={business}
            />
          )}
        </>
      }
    />
  );
};

export default BusinessPage;
