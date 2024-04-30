import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import './DataTableStyle.css';
import { esES } from '@mui/x-data-grid/locales';
interface DataTableProps {
  enableCheckboxSelection: boolean;
  dataColumns: GridColDef[]; 
  dataRows: GridColDef[]; 
}

const DataTable = ({ enableCheckboxSelection, dataColumns, dataRows }:DataTableProps) => {

  return (
    <div style={{ height: 450, width: '100%' }}>
        <DataGrid
          localeText={esES.components.MuiDataGrid.defaultProps.localeText}
          className="my-data-grid"
          rows={dataRows}
          columns={dataColumns}
          getRowClassName={() => 'customRow'}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
            
          }}
          slots={{ toolbar: GridToolbar }}
          
          sx={{ '&, [class^=MuiDataGrid]': { border: 'none' },
            '& .MuiDataGrid-columnHeaders': {
              borderBottom: '1px solid #000',
              marginBottom: '0.5em',
              fontSize: '1.3em',
            },
            '& .MuiDataGrid-columnHeaderTitle': {
              fontWeight: 'bold', // Fuente en negrita
            },
            '& .MuiDataGrid-cell': {
              paddingLeft: '1.3em', // Centra el contenido de cada celda
            },
            '&.Mui-selected': {
              backgroundColor: 'transparent',
            },
            '& .MuiButton-text': {
              borderBottom: '1px solid #000',
              color:'black'
            },
          }}
          //pageSizeOptions={[5, 10]}
          checkboxSelection = {enableCheckboxSelection}
          disableRowSelectionOnClick
        />
    </div>
  );
}

export default DataTable;


