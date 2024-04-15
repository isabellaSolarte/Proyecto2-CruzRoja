import { GridColDef } from '@mui/x-data-grid';
import { CustomColumn } from '../../components/Molecules/CustomColumn';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import React from 'react';

const columns1: GridColDef[] = [
  CustomColumn({
    field: 'companyName',
    headerName: 'Empresa',
    width: 250,
    format: 'text',
    variante: 'texto'
  }),
  CustomColumn({
    field: 'names',
    headerName: 'Nombre',
    width: 250,
    format: 'text',
    variante: 'texto'
  }),
  CustomColumn({
    field: 'actions',
    headerName: 'Acciones',
    width: 250,
    format: 'button',
    buttonDetails: [
      {
        content: 'Editar',
        variant: 'contained',
        color: 'primary',
        icon: <EditIcon />
      },
      {
        content: 'Observar',
        variant: 'contained',
        color: 'warning',
        icon: <VisibilityIcon />
      }
    ]
  }),
  CustomColumn({
    field: 'state',
    headerName: 'Estado',
    format: 'text', // Assume `format: 'switch'` is handled appropriately in CustomColumn or replace with valid type
    variante: 'texto'
  }),
];

export default columns1;
