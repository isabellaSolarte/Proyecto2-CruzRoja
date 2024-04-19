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
    { "id": 1, "companyName": "Stark Industries", "names": "Tony Stark", "switchState": true },
    { "id": 2, "companyName": "Lannister Holdings", "names": "Tyrion Lannister", "switchState": false },
    { "id": 3, "companyName": "Targaryen Enterprises", "names": "Daenerys Targaryen", "switchState": true },
    { "id": 4, "companyName": "Baratheon Co.", "names": "Robert Baratheon", "switchState": false },
    { "id": 5, "companyName": "Greyjoy Shipping", "names": "Theon Greyjoy", "switchState": false },
    { "id": 6, "companyName": "Tyrell Gardens", "names": "Margaery Tyrell", "switchState": true },
    { "id": 7, "companyName": "Martell Spices", "names": "Oberyn Martell", "switchState": false },
    { "id": 8, "companyName": "Arryn of the Eyrie", "names": "Jon Arryn", "switchState": false },
    { "id": 9, "companyName": "Tully Fisheries", "names": "Catelyn Stark", "switchState": true },
    { "id": 10, "companyName": "Frey Crossings", "names": "Walder Frey", "switchState": true },
    { "id": 11, "companyName": "Bolton Leathers", "names": "Ramsay Bolton", "switchState": false },
    { "id": 12, "companyName": "Stark Industries", "names": "Eddard Stark", "switchState": false },
    { "id": 13, "companyName": "Lannister Holdings", "names": "Jaime Lannister", "switchState": true },
    { "id": 14, "companyName": "Greyjoy Shipping", "names": "Yara Greyjoy", "switchState": true },
    { "id": 15, "companyName": "Tyrell Gardens", "names": "Olenna Tyrell", "switchState": false },
    { "id": 16, "companyName": "Martell Spices", "names": "Doran Martell", "switchState": true },
    { "id": 17, "companyName": "Arryn of the Eyrie", "names": "Robin Arryn", "switchState": true },
    { "id": 18, "companyName": "Tully Fisheries", "names": "Edmure Tully", "switchState": true },
];




  return (
    <div style={{ height: 450, width: '100%', margin: '2.5em' }}>
        <DataGrid
          className="my-data-grid"
          rows={[]}
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