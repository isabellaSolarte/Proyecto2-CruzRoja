/* eslint-disable no-unused-vars */
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
import { ActionsModel, CompensationPlanActionModel } from '../../../models/Actions';
export interface ActionsModel {
  id: number;
  name: string;
  description: string;
  unitaryPrice: number;
  footPrintUnity: number;
}

export interface CompensationPlanActionModel {
  action: ActionsModel;
  quantity: number;
  totalActionPrice: number;
  totalActionUfp: number;
}

type ActionSummaryType = {
  actions: CompensationPlanActionModel[];
  totalUfp: number;
  totalPrice: number;
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
  const [selectedActions, setSelectedActions] = useState<CompensationPlanActionModel[]>([]);
  const [actionTemplate, setActionTemplate] = useState<ActionSummaryType>({
    actions: [],
    totalUfp: 0,
    totalPrice: 0,
  });
  const [selectedRows, setSelectedRows] = useState(actionSummary.actions);
  const [validationErrors, setValidationErrors] = useState<string[]>([]); // Estado para almacenar los errores de validación
  const [totalPrice, setTotalCosto] = useState(0);
  const [totalUfp, setTotalUfp] = useState(0);

  useEffect(() => {
    if (!loading && !error) {
      setSelectedActions(actions);
      const newSelectedRows = selectedRows.map((action) => {
        const totalActionPrice = action.action.unitaryPrice * action.quantity;
        const totalActionUfp = action.action.footPrintUnity * action.quantity;
        return { ...action, totalActionPrice, totalActionUfp };
      });
  
      const newTotalCosto = newSelectedRows.reduce(
        (acc, action) => acc + action.totalActionPrice,
        0,
      );
      const newTotalUfp = newSelectedRows.reduce(
        (acc, action) => acc + action.totalActionUfp,
        0,
      );
  
      setTotalCosto(newTotalCosto);
      setTotalUfp(newTotalUfp);
      setSelectedRows(newSelectedRows);
      setActionTemplate({ actions: newSelectedRows, totalUfp, totalPrice });
    }
  }, [loading, error, actions, selectedRows, onAddSelected, totalUfp, totalPrice]);

  const handleAddSelected = () => {
    console.log('Adding selected actions:', { actions: selectedRows });

    actionsValidationSchema
      .validate({ actions: selectedRows })
      .then(() => {
        onAddSelected(actionTemplate);
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
    CustomColumn({
      field: 'name',
      headerName: t('modalAccion.name'),
      format: 'text',
      icon: <RecyclingIcon sx={{ color: 'green' }} />,
      width: 200,
    }),
    CustomColumn({
      field: 'footPrintUnity',
      headerName: t('modalAccion.footPrintUnity'),
      format: 'text',
      width: 150,
    }),
    CustomColumn({
      field: 'quantity',
      headerName: t('modalAccion.quantity'),
      format: 'text',
      width: 150,
    }),
    CustomColumn({
      field: 'unitaryPrice',
      headerName: t('modalAccion.unitaryPrice'),
      format: 'text',
      width: 200,
    }),
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
          onClick: row => {
            console.log('Observar', PathNames.VIEW_ACTIONS.replace(':id', String(row.id)));
            navigate(PathNames.VIEW_ACTIONS.replace(':id', String(row.id)));
          },
        },
      ],
      width: 200,
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
        <DialogTitle sx={{ marginBottom: 2, textAlign: 'center' }}>
          {t('modalAccion.title')}
        </DialogTitle>
        <DialogContent sx={{ paddingTop: 2 }}>
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
                enableTools={false}
              />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              padding: '1rem',
            }}
          />
          <CustomText
            texto={`${t('modalAccion.totalUfp')}${actionTemplate.totalUfp}`}
            variante="subtitulo"
            styles={{ textAlign: 'center' }}
          />
          <CustomText
            texto={`${t('modalAccion.totalCosto')} ${actionTemplate.totalPrice} COP`}
            variante="texto"
            styles={{ textAlign: 'center' }}
          />
          <Box />

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
                sx={{ marginRight: '20px' }}
              />
            )}
          </Box>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ActionsModal;
