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
import { CompensationPlanActionModel, ActionsModel } from '../../../models/Actions';
import { ViewActionModal } from './components';



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
  const [showModal, setShowModal] = useState(false);
  const { actions, setActions, loading, error, fetchActionById, actionSelect,setActionSelect , errorActionSelect, loadingActionSelect} = useActions(actionSummary.actions);
  const [selectedActions, setSelectedActions] = useState<CompensationPlanActionModel[]>([]);
  const [selectedRows, setSelectedRows] = useState(actionSummary.actions);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [totalPrice, setTotalCosto] = useState(0);
  const [totalUfp, setTotalUfp] = useState(0);
  

  const handleViewButtonClick = async (actionId: number) => {
    console.log('Ver acción', actionId);
    await fetchActionById(actionId);
    console.log('actionSelect', actionSelect);
    setShowModal(true);
  };

  useEffect(() => {
    if (!loading && !error) {
      
      const updatedSelectedRows = selectedRows.map(action => {
        const totalActionPrice = action.action.unitaryPrice * action.quantity;
        const totalActionUfp = action.action.footPrintUnity * action.quantity;
        return { ...action, totalActionPrice, totalActionUfp };
      });

      const newTotalCosto = updatedSelectedRows.reduce(
        (acc, action) => acc + action.totalActionPrice,
        0,
      );
      const newTotalUfp = updatedSelectedRows.reduce(
        (acc, action) => acc + action.totalActionUfp,
        0,
      );

      setTotalCosto(newTotalCosto);
      setTotalUfp(newTotalUfp);
      setSelectedRows(updatedSelectedRows);
      setSelectedActions(actions);
    }
  }, [loading, error, actions, selectedRows]);

  const handleAddSelected = () => {
    actionsValidationSchema
      .validate({ actions: selectedRows })
      .then(() => {
        onAddSelected({
          actions: selectedRows,
          totalUfp,
          totalPrice
        });
        setValidationErrors([]);
      })
      .catch((error: unknown) => {
        if (error instanceof Error) {
          setValidationErrors([error.message]);
        } else {
          setValidationErrors(['Error al validar las acciones']);
        }
      });
  };

  const handleQuantityChange = (e, row) => {
    const newQuantity = Number(e.target.value);

    const updatedActions = actions.map(action => 
      action.action.id === row.action.id ? { ...action, quantity: newQuantity } : action
    );

    const updatedSelectedRows = selectedRows.map(selectedRow => {
      if (selectedRow.action.id === row.action.id) {
        const totalActionPrice = selectedRow.action.unitaryPrice * newQuantity;
        const totalActionUfp = selectedRow.action.footPrintUnity * newQuantity;
        return { ...selectedRow, quantity: newQuantity, totalActionPrice, totalActionUfp };
      }
      return selectedRow;
    });

    const newTotalCosto = updatedSelectedRows.reduce(
      (acc, action) => acc + action.totalActionPrice,
      0,
    );
    const newTotalUfp = updatedSelectedRows.reduce(
      (acc, action) => acc + action.totalActionUfp,
      0,
    );

    setActions(updatedActions);
    setSelectedActions(updatedActions);
    setTotalCosto(newTotalCosto);
    setTotalUfp(newTotalUfp);
    setSelectedRows(updatedSelectedRows);
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
      aling: 'center',
      field: 'footPrintUnity',
      headerName: t('modalAccion.footPrintUnity'),
      format: 'text',
      width: 150,
    }),
    CustomColumn({
      aling: 'center',
      width: 150,
      field: 'quantity',
      headerName: t('modalAccion.quantity'),
      format: 'input',
      inputDetails: [
        {
          placeholder: t('modalAccion.quantity'),
          updateText: (text) => {
            console.log('Cantidad actualizada: ', text);
          },
          onChange: handleQuantityChange
        },
      ],
    }),
    CustomColumn({
      aling: 'center',
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
            handleViewButtonClick(row.action.id);
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
                {errorActionSelect && <Alert severity="error">{errorActionSelect}</Alert>}
                {loadingActionSelect && (
                  <Box display="flex" justifyContent="center" alignItems="center" height="fullWidth">
                    <CircularProgress color="warning" />
                  </Box>
                )}
                {actionSelect && !loadingActionSelect && !errorActionSelect && (
                  <ViewActionModal
                    open={showModal}
                    action={actionSelect}
                    onClose={() => {
                      setActionSelect(null);
                      setShowModal(false);
                    }}
                  />
                  )}
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
            texto={`${t('modalAccion.totalUfp')}${totalUfp}`}
            variante="subtitulo"
            styles={{ textAlign: 'center' }}
          />
          <CustomText
            texto={`${t('modalAccion.totalCosto')} ${totalPrice} COP`}
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
