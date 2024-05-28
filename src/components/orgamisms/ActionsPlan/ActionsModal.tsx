import React, { useState, useEffect } from 'react';
import { Box, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import {DataTable} from '../../orgamisms';
import { actionsValidationSchema } from './schema';
import { CustomColumn } from '../../Molecules';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { CustomButton } from '../../Atoms';
import { useTranslation } from 'react-i18next';
type ActionType = {
    id: number;
    name: string;
    ufp: number;
    cantidad: number;
    costo: number;
}
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
  //TODO: quitar los valores quemados y traerlos del backend
  const [selectedActions, setSelectedActions] = useState<ActionType[]>([
    { id: 1, name: 'Plantar Árboles', ufp: 100, cantidad: 5, costo: 1000},
    { id: 2, name: 'Reciclaje', ufp: 50, cantidad: 10, costo: 500},
    // otras acciones
  ]);
  const [selectedRows, setSelectedRows] = useState([ { id: 1, name: 'Plantar Árboles', ufp: 100, cantidad: 5, costo: 1000}]);
  const isSelected = (action: ActionType) => {
    return selectedActions.some(selectedAction => selectedAction.id === action.id);
  };
  useEffect(() => {
    console.log(selectedRows);

  }, [selectedRows]);

  const handleAddSelected = () => {
      //calcular el costo total
      const totalCosto = selectedActions.reduce((acc, action) => acc + action.costo, 0);
      //calcular el total de UFP
      const totalUfp = selectedActions.reduce((acc, action) => acc + action.ufp, 0);
      onAddSelected({ actions: selectedActions, totalUfp, totalCosto });
    actionsValidationSchema.validate(selectedActions)
      .then(() => {
        //TODO: aun no voy a validar para agregar las acciones seleccionadas
      })
      .catch((error: unknown) => {
        if (error instanceof Error) {
          console.error(error.message);
        }
        else {
            console.error('Error al validar las acciones');
        }
      });
  };

  const columns = [
    CustomColumn({ field: 'name', headerName: 'Acción', format: 'text' }),
    CustomColumn({ field: 'ufp', headerName: 'UFP', format: 'text' }),
    CustomColumn({ field: 'cantidad', headerName: 'Cantidad', format: 'text' }),
    CustomColumn({ field: 'costo', headerName: 'Costo (COP)', format: 'text' }),
    // en la opciones estara obcervar
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
                onClick: (row) => console.log('Observar', row),
            },
        ]
    }),
  ];

return (
    <Box>
        <Dialog open onClose={onCancel} fullWidth maxWidth="md" sx={
            {
                width: 'fullWidth',
                height: 'fullWidth',
                boxShadow: '0 0 1rem 0 rgba(0, 0, 0, .2)',
                borderRadius: '5px',
                backgroundColor: 'rgba(255, 255, 255, .15)',
                backdropFilter: 'blur(5px)',
            }
        }>            
        <DialogTitle>{t('Selecciona acciones para agregar')} </DialogTitle>
            <DialogContent>
                {/* TODO: Controlar que la seleccion se recuerde */}
                <DataTable
                    enableCheckboxSelection={true}
                    dataColumns={columns}
                    dataRows={selectedActions}
                    selectedRowsData={selectedRows}
                    onSelectionChange={setSelectedRows}
                />
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

                    <CustomButton
                        variant="contained"
                        color="success"
                        content={t('Agregar')}
                        onClick={handleAddSelected}
                    />
                </Box>
            </DialogActions>
        </Dialog>
    </Box>
);
};

export default ActionsModal;