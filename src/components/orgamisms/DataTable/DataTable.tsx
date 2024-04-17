import { DataGrid, GridColDef } from '@mui/x-data-grid';
/* import { columns1 } from '../../../configs/tablas/Columns'; */

// TODO comprobar que funciona columns" GridColDef[] o solo []
export default function DataTable(enableCheckboxSelection: boolean, columns: GridColDef[]) {
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
