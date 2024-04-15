import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { CustomButton } from '../../Atoms/Button';
import { Etiqueta } from '../../Atoms/Label';
import { CustomSwitch } from '../../Atoms/Switch';
import { ReactElement } from 'react'; 

interface CustomColumnProps {
  field: string;
  headerName: string;
  width?: number;
  format: 'text' | 'button' | 'switch';
  content:string;
  variante: "titulo" | "texto" | "subtitulo";
  icon?: ReactElement; 
  buttonDetails: Array<{
    content: string;
    variant: "text" | "outlined" | "contained";
    color: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
    icon?: React.ReactElement;
    cellStyle?: React.CSSProperties;
  }>;
}

const CustomColumn = ({ field, headerName, width = 150, format, buttonDetails, variante }: CustomColumnProps): GridColDef => ({
  field,
  headerName,
  width,
  renderCell: (params) => {
    if (format === 'button') {
        {console.log(buttonDetails);}
      return <div style={{ display: 'flex', gap: '10px' }}>
            {buttonDetails?.map((button, index) => (
              
              <CustomButton
                key={index}
                content={button.content}
                variant={button.variant}
                color={button.color}
                icon={button.icon}
                 // Add more specific handling as needed
              />
            ))}
          </div>;
    } else if (format == 'text') {
      return <Etiqueta texto = {params.value || ''} variante={variante}/>;
    }else if (format == 'switch') {
      return <CustomSwitch />;
    }
  }
});

export default CustomColumn;

