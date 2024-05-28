import React, { useState, useEffect } from 'react';
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, Alert } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { DataTable } from '../../orgamisms';
import { actionsValidationSchema } from './schema';
import { CustomColumn } from '../../Molecules';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { CustomButton } from '../../Atoms';
import { useTranslation } from 'react-i18next';
import { useActions } from './hook';

type ActionType = {
  id: number;
  name: string;
  ufp: number;
  cantidad: number;
  costo: number;
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
  const { actions, loading, error } = useActions(); // Usa el hook personalizado
  const [selectedActions, setSelectedActions] = useState<ActionType[]>([]);
  const [selectedRows, setSelectedRows] = useState(actionSummary.actions);

  useEffect(() => {
    if (!loading && !error) {
      setSelectedActions(actions);
    }
  }, [loading, error, actions]);

  const handleAddSelected = () => {
    actionsValidationSchema
      .validate(selectedActions)
      .then(() => {
        const totalCosto = selectedActions.reduce((acc, action) => acc + action.costo, 0);
        const totalUfp = selectedActions.reduce((acc, action) => acc + action.ufp, 0);
        onAddSelected({ actions: selectedActions, totalUfp, totalCosto });
      })
      .catch((error: unknown) => {
        if (error instanceof Error) {
          console.error(error.message);
        } else {
          console.error('Error al validar las acciones');
        }
      });
  };

  const columns = [
    CustomColumn({ field: 'name', headerName: 'Acción', format: 'text' }),
    CustomColumn({ field: 'ufp', headerName: 'UFP', format: 'text' }),
    CustomColumn({ field: 'cantidad', headerName: 'Cantidad', format: 'text' }),
    CustomColumn({ field: 'costo', headerName: 'Costo (COP)', format: 'text' }),
    CustomColumn({
      field: 'options',
      headerName: 'Opciones',
      format: 'button',
      buttonDetails: [
        {
          content: 'Observar',
          variant: 'contained',
          color: 'warning',
          icon: <VisibilityIcon />,
          onClick: row => console.log('Observar', row),
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
        <DialogTitle>{t('Selecciona acciones para agregar')}</DialogTitle>
        <DialogContent>
        {loading && (
          <Box display="flex" justifyContent="center" alignItems="center" height="fullWidth">
              <CircularProgress color="success"/>
            </Box>
          )}
          {error && (
            <Alert severity="error">{error}</Alert>
          )} {/* Display error directly */}
          {!loading && !error && (
            <DataTable
              enableCheckboxSelection={true}
              dataColumns={columns}
              dataRows={selectedActions}
              selectedRowsData={selectedRows}
              onSelectionChange={setSelectedRows}
            />
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
              content={t('Cancelar')}
              onClick={onCancel}
              sx={{ marginRight: '10px' }}
            />
            {!loading && !error && (
              <CustomButton
                variant="contained"
                color="success"
                content={t('Agregar')}
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
