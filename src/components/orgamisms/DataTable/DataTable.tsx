import { DataGrid } from '@mui/x-data-grid';
import { CustomColumn } from '../../Molecules/CustomColumn';

const columns = [
    CustomColumn({ field: 'name', headerName: 'Nombre', width: 100, format: 'text' }),
    CustomColumn({ field: 'actions', headerName: 'Acciones', format: 'button' }),
    CustomColumn({ field: 'state', headerName: 'Estado', format: 'text' }),
  ];

export default function DataTable() {
  const rows = [];

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
        checkboxSelection
      />
    </div>
  );
}
