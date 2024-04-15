import { DataGrid } from '@mui/x-data-grid';
import { CustomColumn } from '../../Molecules/CustomColumn';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';

const columns = [
  CustomColumn({ field: 'companyName', headerName: 'Empresa', width: 250, format: 'text', variante: 'texto' }),
  CustomColumn({ field: 'names', headerName: 'Nombre', width: 250, format: 'text', variante: 'texto' }),
  CustomColumn({ field: 'actions', headerName: 'Acciones', width:250, format: 'button', buttonDetails: [
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
  ] }),
CustomColumn({ field: 'state', headerName: 'Estado', format: 'switch', variante: 'texto' }),
];

  

export default function DataTable() {
  const rows = [
    { "id": 1, "companyName": "Stark Industries", "names": "Jon Snow", "state": "Active" },
    { "id": 2, "companyName": "Lannister Holdings", "names": "Cersei Lannister", "state": "Inactive" }
  ];
  
  

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection = {enableCheckboxSelection}
      />
    </div>
  );
}
