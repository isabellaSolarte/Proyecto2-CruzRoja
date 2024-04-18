import { DataGrid, GridColDef } from '@mui/x-data-grid';
/* import { columns1 } from '../../../configs/tablas/Columns'; */
import './DataTableStyle.css';

interface DataTableProps {
  enableCheckboxSelection: boolean;
  dataColumns: GridColDef[]; // Asegúrate de importar GridColDef si estás usando MUI DataGrid
}

// TODO comprobar que funciona columns" GridColDef[] o solo []
const DataTable = ({ enableCheckboxSelection, dataColumns }:DataTableProps) => {
  const rows = [
    { "id": 1, "companyName": "Stark Industries", "names": "Jon Snow", "state": "Active" },
    { "id": 2, "companyName": "Lannister Holdings", "names": "Cersei Lannister", "state": "Inactive" }
  ];



  return (
    <div style={{ height: 400, width: '100%', margin: '2.5em' }}>
      <DataGrid
        className="my-data-grid"
        rows={rows}
        columns={dataColumns}
        getRowClassName={() => 'customRow'}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        sx={{ '&, [class^=MuiDataGrid]': { border: 'none' },
          '& .MuiDataGrid-columnHeaders': {
            borderBottom: '1px solid #000',
            marginBottom: '0.5em',
            fontSize: '1.3em'
          },
          '& .MuiDataGrid-columnHeaderTitle': {
            fontWeight: 'bold', // Fuente en negrita
          }
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection = {enableCheckboxSelection}
      />
    </div>
  );
}

export default DataTable;