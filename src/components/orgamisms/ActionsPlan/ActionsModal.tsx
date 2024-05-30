import React, { useState, useEffect } from 'react';
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, Alert } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { DataTable } from '../../orgamisms';
import { actionsValidationSchema } from './schema';
import { CustomColumn } from '../../Molecules';
import VisibilityIcon from '@mui/icons-material/Visibility';
import RecyclingIcon from '@mui/icons-material/Recycling';
import { CustomButton, CustomText } from '../../Atoms';
import { useTranslation } from 'react-i18next';
import { useActions } from './hook';
import { PathNames } from '../../../core';
import { useNavigate } from 'react-router-dom';

export type ActionType = {
  id: number;
  name: string;
  description: string;
  unitaryPrice: number;
  footPrintUnity: number;
  quantity: number;
};

type ActionSummaryType = {
  actions: ActionType[];
  totalUfp: number;
  totalCosto: number;
};

interface ActionsModalProps {
  actionSummary: ActionSummaryType;
  onCancel: () => void;
  onAddSelected: (selectedActions: ActionSummaryType) => void;
}

const ActionsModal: React.FC<ActionsModalProps> = ({ actionSummary, onCancel, onAddSelected }) => {
  const { t } = useTranslation('commons');
  const navigate = useNavigate();
  const { actions, loading, error } = useActions(); // Usa el hook personalizado
  const [selectedActions, setSelectedActions] = useState<ActionType[]>([]);
  const [actionTemplate, setActionTemplate] = useState<ActionSummaryType>();
  const [selectedRows, setSelectedRows] = useState(actionSummary.actions);
  const [validationErrors, setValidationErrors] = useState<string[]>([]); // Estado para almacenar los errores de validación

  useEffect(() => {
    if (!loading && !error) {
      setSelectedActions(actions);
      const totalCosto = selectedRows.reduce((acc, action) => acc + (action.unitaryPrice * action.quantity), 0);
      const totalUfp = selectedRows.reduce((acc, action) => acc + (action.footPrintUnity * action.quantity), 0);
      setActionTemplate({ actions: selectedRows, totalUfp, totalCosto });
    }
  }, [loading, error, actions, selectedRows, onAddSelected]);

  const handleAddSelected = () => {
    console.log('Adding selected actions:', {actions: selectedRows});

    actionsValidationSchema
      .validate({actions: selectedRows})
      .then(() => {
        const totalCosto = selectedRows.reduce((acc, action) => acc + (action.unitaryPrice * action.quantity), 0);
        const totalUfp = selectedRows.reduce((acc, action) => acc + (action.footPrintUnity * action.quantity), 0);
        onAddSelected({ actions: selectedRows, totalUfp, totalCosto });
        setValidationErrors([]); // Limpiar los errores de validación si la validación es exitosa
      })
      .catch((error: unknown) => {
        if (error instanceof Error) {
          console.error(error.message);
          setValidationErrors([error.message]); // Almacenar el error de validación en el estado
        } else {
          console.error('Error al validar las acciones');
          setValidationErrors(['Error al validar las acciones']); // Almacenar el error de validación en el estado
        }
      });
  };

  
  const columns = [
    CustomColumn({ field: 'name', headerName: t('modalAccion.name'), format: 'text', icon: <RecyclingIcon sx={{ color: 'green' }} />, }),
    CustomColumn({ field: 'footPrintUnity', headerName: t('modalAccion.footPrintUnity'), format: 'text' }),
    CustomColumn({ field: 'quantity', headerName: t('modalAccion.quantity'), format: 'text', onClick: handleQuantityEdit }),
    CustomColumn({ field: 'unitaryPrice', headerName: t('modalAccion.unitaryPrice'), format: 'text' }),
    CustomColumn({
      field: 'options',
      headerName: t('modalAccion.options'),
      format: 'button',
      buttonDetails: [
        {
          content: 'Observar',
          variant: 'contained',
          color: 'warning',
          icon: <VisibilityIcon />,
          //onClick: row => { console.log('Observar', PathNames.VIEW_ACTIONS.replace(':id', String(row.id))); },
          onClick: (row) => { console.log('Observar', PathNames.VIEW_ACTIONS.replace(':id', String(row.id))); navigate(PathNames.VIEW_ACTIONS.replace(':id', String(row.id))); },
        },
      ],
    }),
  ];
  return (
    <Box>
      <Dialog
        open
        onClose={onCancel}
        fullWidth
        maxWidth="md"
        sx={{
          width: 'fullWidth',
          height: 'fullWidth',
          boxShadow: '0 0 1rem 0 rgba(0, 0, 0, .2)',
          borderRadius: '5px',
          backgroundColor: 'rgba(255, 255, 255, .15)',
          backdropFilter: 'blur(5px)',
        }}
      >
        <DialogTitle>{t('modalAccion.title')}</DialogTitle>
        <DialogContent>
          {loading && (
            <Box display="flex" justifyContent="center" alignItems="center" height="fullWidth">
              <CircularProgress color="success" />
            </Box>
          )}
          {error && <Alert severity="error">{error}</Alert>}
          {validationErrors.length > 0 && (
            <Alert severity="error">
              {validationErrors.map((errorMessage, index) => (
                <div key={index}>{errorMessage}</div>
              ))}
            </Alert>
          )}
          {!loading && !error && (
            <>
              <DataTable
                enableCheckboxSelection={true}
                dataColumns={columns}
                dataRows={selectedActions}
                selectedRowsData={selectedRows}
                onSelectionChange={setSelectedRows}
              />
              <CustomText texto={`${t('modalAccion.totalUfp')}${actionTemplate?.totalUfp}`} variante="subtitulo" />
              <CustomText texto={`${t('modalAccion.totalCosto')} ${actionTemplate?.totalCosto} COP`} variante="texto" />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-end',
              mt: 3,
            }}
          >
            <CustomButton
              variant="contained"
              color="error"
              content={t('generalButtonText.cancel')}
              onClick={onCancel}
              sx={{ marginRight: '10px' }}
            />
            {!loading && !error && (
              <CustomButton
                variant="contained"
                color="success"
                content={t('generalButtonText.add')}
                onClick={handleAddSelected}
              />
            )}
          </Box>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ActionsModal;
