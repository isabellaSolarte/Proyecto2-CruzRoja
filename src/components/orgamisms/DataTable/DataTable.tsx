/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import './DataTableStyle.css';
import { esES } from '@mui/x-data-grid/locales';
import { useEffect, useState } from 'react';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';

interface DataTableProps {
  enableCheckboxSelection: boolean;
  dataColumns: GridColDef[];
  dataRows: any[];
  selectedRowsData?: any[];
  enableTools?: boolean;
  onSelectionChange?: (selectedRows: any[]) => void;
}

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

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

  // return (
  //   <TableContainer component={Paper} sx={{ overflow: 'scroll', maxWidth: '100%' }}>
  //     <Table size="small" aria-label="a dense table">
  //       <TableHead>
  //         <TableRow>
  //           {dataColumns.map(column => (
  //             <TableCell align="left" key={column.field}>
  //               {column.headerName}
  //             </TableCell>
  //           ))}
  //         </TableRow>
  //       </TableHead>
  //       <TableBody>
  //         {dataRows.map(row => (
  //           <TableRow key={row.id}>
  //             {dataColumns.map(column => (
  //               <TableCell key={column.field} align="left">
  //                 {row[column.field]}
  //               </TableCell>
  //             ))}
  //           </TableRow>
  //         ))}

  //       </TableBody>
  //     </Table>
  //   </TableContainer>
  // );

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
