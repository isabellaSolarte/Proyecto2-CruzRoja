import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { CustomButton } from '../../Atoms/Button';
import { Etiqueta } from '../../Atoms/Label';


interface CustomColumnProps {
  field: string;
  headerName: string;
  width?: number;
  format: 'text' | 'button' | 'toggle';
  content:string;
  variant: "text" | "outlined" | "contained";
  variante: "titulo" | "texto" | "subtitulo";
  color:"inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
}

const CustomColumn = ({ field, headerName, width = 150, format,  content, variant, color, variante }: CustomColumnProps): GridColDef => ({
  field,
  headerName,
  width,
  renderCell: (params: GridRenderCellParams) => {
    if (format === 'button') {
      return <CustomButton content={content} variant={variant} color={color}/>;
    } else if (format === 'text') {
      return <Etiqueta texto = {content} variante={variante}/>;
    }else{
      return <Etiqueta {...params}/>;
    }
  }
});

export default CustomColumn;

