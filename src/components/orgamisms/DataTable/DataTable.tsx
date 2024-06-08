/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import './DataTableStyle.css';
import { esES } from '@mui/x-data-grid/locales';
import { useEffect, useState } from 'react';
import ToolBar from './ToolBar';

interface DataTableProps {
  enableCheckboxSelection: boolean;
  dataColumns: GridColDef[];
  dataRows: any[];
  selectedRowsData?: any[];
  enableTools?: boolean;
  onSelectionChange?: (selectedRows: any[]) => void;
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
  selectedRowsData,
  onSelectionChange,
  enableTools = true,
}: DataTableProps) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  /*   useEffect(()=> {
    if (selectedRowsData && selectedRowsData.length > 0) {
      const selectedRowIds = selectedRowsData.map(row => row.id);
      setSelectedRows(selectedRowIds);
    }
    
  }) */
  useEffect(() => {
    const selectedRowIds = selectedRowsData?.map(row => row.id);
    setSelectedRows(selectedRowIds);
  }, [selectedRowsData]);

  return (
    <div style={{ height: 450 }}>
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
        slots={{
          toolbar: enableTools ? ToolBar : undefined,
        }}
        sx={{
          '&, [class^=MuiDataGrid]': { border: 'none' },
          '& .MuiDataGrid-columnHeaders': {
            borderBottom: '2px solid rgba(255, 1, 11, 0.3)',
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
          '& .MuiCheckbox-colorPrimary.Mui-checked': {
            color: '#65B741', // Cambia el color del checkbox seleccionado
          },
        }}
        //pageSizeOptions={[5, 10]}
        checkboxSelection={enableCheckboxSelection}
        onRowSelectionModelChange={ids => {
          const selectedIDs = new Set(ids);
          const selectedRowData = dataRows.filter(row => selectedIDs.has(row.id));
          onSelectionChange(selectedRowData);
        }}
        //onSelectionModel={selectedRows}
        rowSelectionModel={selectedRows}
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default DataTable;
