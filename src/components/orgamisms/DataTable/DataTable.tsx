/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import './DataTableStyle.css';
import { esES } from '@mui/x-data-grid/locales';
interface DataTableProps {
  enableCheckboxSelection: boolean;
  dataColumns: GridColDef[];
  dataRows: any[];
  enableTools?: boolean;
}

/**
 *
 * @param enableCheckboxSelection this prop is used to enable the checkbox selection in the table
 * @param dataColumns this prop is used to define the columns of the table
 * @param dataRows this prop is used to define the rows of the table
 * @example dataColumns = [ id, name, description, unitaryPrice, footPrintUnity, quantity]
 * @returns
 */
const DataTable = ({
  enableCheckboxSelection,
  dataColumns,
  dataRows,
  enableTools = true,
}: DataTableProps) => {
  return (
    <div
      style={{
        height: 450,
        maxWidth: '100%',
      }}
    >
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
        slots={{ toolbar: enableTools ? GridToolbar : undefined }}
        sx={{
          '&, [class^=MuiDataGrid]': { border: 'none' },
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
            color: 'black',
          },
        }}
        //pageSizeOptions={[5, 10]}
        checkboxSelection={enableCheckboxSelection}
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default DataTable;
