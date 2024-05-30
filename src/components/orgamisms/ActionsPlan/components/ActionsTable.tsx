import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { CustomColumn } from '../../../Molecules';
import { ActionType } from '../types/ActionType';

interface ActionsTableProps {   
  actions: ActionType[];
  selectedActions: ActionType[];
  onSelectAction: (action: ActionType) => void;
}

const ActionsTable: React.FC<ActionsTableProps> = ({ actions, selectedActions, onSelectAction }) => {
  const columns = [
    CustomColumn({
      field: 'select',
      headerName: 'Seleccionar',
      format: 'button',
      buttonDetails: [{
        content: 'Seleccionar',
        variant: 'contained',
        color: 'primary',
        onClick: (row) => onSelectAction(row),
      }]
    }),
    CustomColumn({ field: 'name', headerName: 'Acción', format: 'text' }),
    CustomColumn({ field: 'ufp', headerName: 'UFP', format: 'text' }),
    CustomColumn({ field: 'cantidad', headerName: 'Cantidad', format: 'text' }),
    CustomColumn({
      field: 'options',
      headerName: 'Opciones',
      format: 'button',
      buttonDetails: [
        {
          content: 'Editar',
          variant: 'text',
          color: 'primary',
          onClick: (row) => console.log('Editar', row),
        },
        {
          content: 'Eliminar',
          variant: 'text',
          color: 'secondary',
          onClick: (row) => console.log('Eliminar', row),
        },
      ]
    }),
  ];

  return (
    <div style={{ height: 450, width: '100%' }}>
      <DataGrid
        rows={actions.map(action => ({
          ...action,
          id: action.name, // assuming name is unique, otherwise use a unique id
        }))}
        columns={columns}
        checkboxSelection
        onSelectionModelChange={(selection) => {
          const selectedIDs = new Set(selection);
          const selectedActions = actions.filter(action => selectedIDs.has(action.name));
          onSelectAction(selectedActions);
        }}
      />
    </div>
  );
};

export default ActionsTable;
