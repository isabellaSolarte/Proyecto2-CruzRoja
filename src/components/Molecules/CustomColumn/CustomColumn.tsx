import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';


interface CustomColumnProps {
  field: string;
  headerName: string;
  width?: number;
  format: 'text' | 'number' | 'button';
}

const CustomColumn = ({ field, headerName, width = 150, format }: CustomColumnProps): GridColDef => ({
  field,
  headerName,
  width,
  renderCell: (params: GridRenderCellParams) => {
    if (format === 'button') {
      return <CustomButton {...params}/>;
    } else if (format == 'text') {
      return <CustomInput {...params}/>;
    }
  }
});

export default CustomColumn;

