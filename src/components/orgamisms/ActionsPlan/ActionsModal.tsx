import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import {DataTable} from '../../orgamisms';
import { ActionType } from './types/ActionType';
import { actionsValidationSchema } from './schema';
import { CustomColumn } from '../../Molecules';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { CustomButton } from '../../Atoms';
import { useTranslation } from 'react-i18next';

interface ActionsModalProps {
  actions: ActionType[];
  onCancel: () => void;
  onAddSelected: (selectedActions: ActionType[]) => void;
}

const ActionsModal: React.FC<ActionsModalProps> = ({ actions, onCancel, onAddSelected }) => {
  const { t } = useTranslation('commons');
  const [selectedActions, setSelectedActions] = useState<ActionType[]>([]);

  const handleAddSelected = () => {
    actionsValidationSchema.validate(selectedActions)
      .then(() => {
        onAddSelected(selectedActions);
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
                <DataTable
                    enableCheckboxSelection={true}
                    dataColumns={columns}
                    dataRows={actions}
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