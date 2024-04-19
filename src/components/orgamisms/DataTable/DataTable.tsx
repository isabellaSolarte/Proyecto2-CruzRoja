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
    { "id": 1, "names": "Tony Stark", "rol": "Admin", "switchState": true },
    { "id": 2, "names": "Tyrion Lannister", "rol": "User", "switchState": false },
    { "id": 3, "names": "Daenerys Targaryen", "rol": "User", "switchState": true },
    { "id": 4, "names": "Robert Baratheon", "rol": "User", "switchState": false },
    { "id": 5, "names": "Theon Greyjoy", "rol": "User", "switchState": false },
    { "id": 6, "names": "Margaery Tyrell", "rol": "User", "switchState": true },
    { "id": 7, "names": "Oberyn Martell", "rol": "User", "switchState": false },
    { "id": 8, "names": "Jon Arryn", "rol": "User", "switchState": false },
    { "id": 9, "names": "Catelyn Stark", "rol": "User", "switchState": true },
    { "id": 10, "names": "Walder Frey", "rol": "User", "switchState": true },
    { "id": 11, "names": "Ramsay Bolton", "rol": "User", "switchState": false },
    { "id": 12, "names": "Eddard Stark", "rol": "User", "switchState": false },
    { "id": 13, "names": "Jaime Lannister", "rol": "User", "switchState": true },
    { "id": 14, "names": "Yara Greyjoy", "rol": "User", "switchState": true },
    { "id": 15, "names": "Olenna Tyrell", "rol": "User", "switchState": false },
    { "id": 16, "names": "Doran Martell", "rol": "User", "switchState": true },
    { "id": 17, "names": "Robin Arryn", "rol": "User", "switchState": true },
    { "id": 18, "names": "Edmure Tully", "rol": "User", "switchState": true },
  ];


  return (
    <div style={{ height: 450, width: '100%' }}>
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
              fontSize: '1.3em',
              justifyContent: 'space-between',
              width: '100%'
            },
            '& .MuiDataGrid-columnHeaderTitle': {
              fontWeight: 'bold', // Fuente en negrita
            },
            '& .MuiDataGrid-cell': {
              paddingLeft: '1.3em', // Centra el contenido de cada celda
            },
            
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection = {enableCheckboxSelection}
        />
    </div>
  );
}

export default DataTable;